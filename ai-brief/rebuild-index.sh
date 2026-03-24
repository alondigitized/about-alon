#!/usr/bin/env bash
# rebuild-index.sh — Deterministically regenerate the AI Brief archive index.
#
# Scans briefs/*.html, extracts dates and summaries, and rewrites the
# <ul class="archive-list"> block in index.html.
#
# Idempotent: run any number of times, same inputs produce same output.
#
# Usage:
#   ./rebuild-index.sh
#
# Summary extraction priority:
#   1. <meta name="brief-summary" content="..."> in the brief HTML
#   2. First ≤6 item-headline texts, joined with " · "
#   3. "Brief pending"
#
# To control the summary for a brief, add this to its <head>:
#   <meta name="brief-summary" content="Your summary here">

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRIEFS_DIR="$SCRIPT_DIR/briefs"
INDEX_FILE="$SCRIPT_DIR/index.html"

if [ ! -d "$BRIEFS_DIR" ]; then
  echo "No briefs directory: $BRIEFS_DIR"
  exit 0
fi

# Collect brief files sorted newest-first by filename (YYYY-MM-DD.html)
files=()
for f in "$BRIEFS_DIR"/*.html; do
  [ -f "$f" ] && files+=("$f")
done

if [ ${#files[@]} -eq 0 ]; then
  echo "No brief files found in $BRIEFS_DIR"
  exit 0
fi

IFS=$'\n' sorted=($(printf '%s\n' "${files[@]}" | sort -r)); unset IFS

# --- Build archive list entries ---
list_html=""
for brief in "${sorted[@]}"; do
  date_str=$(basename "$brief" .html)

  # Day of week (macOS / GNU fallback)
  day_name=$(date -j -f "%Y-%m-%d" "$date_str" "+%A" 2>/dev/null \
          || date -d "$date_str" "+%A" 2>/dev/null \
          || echo "Unknown")

  # Detect weekend rollup from brief content
  day_label="$day_name"
  if grep -qi "rollup\|weekend" "$brief" 2>/dev/null; then
    day_label="$day_name (weekend rollup)"
  fi

  # --- Extract summary ---
  summary=""

  # Priority 1: meta brief-summary tag
  meta=$(grep -o '<meta name="brief-summary" content="[^"]*"' "$brief" 2>/dev/null \
       | sed 's/.*content="//;s/"$//' || true)
  if [ -n "$meta" ]; then
    summary="$meta"
  fi

  # Priority 2: item-headline div text (first 6)
  if [ -z "$summary" ]; then
    headlines=$(grep 'item-headline' "$brief" 2>/dev/null \
              | sed 's/.*item-headline">//;s/<.*//' \
              | head -6 || true)
    if [ -n "$headlines" ]; then
      summary=$(echo "$headlines" | tr '\n' '|' | sed 's/|$//; s/|/ \&middot; /g')
    fi
  fi

  # Priority 3: fallback
  if [ -z "$summary" ]; then
    summary="Brief pending"
  fi

  list_html+="    <li>
      <a href=\"briefs/${date_str}.html\" class=\"archive-date\">${date_str}</a>
      <span class=\"archive-day\">${day_label}</span>
      <div class=\"archive-summary\">${summary}</div>
    </li>
"
done

# --- Replace archive-list block in index.html ---
ul_line=$(grep -n '<ul class="archive-list">' "$INDEX_FILE" | head -1 | cut -d: -f1)
if [ -z "$ul_line" ]; then
  echo "ERROR: Could not find <ul class=\"archive-list\"> in $INDEX_FILE" >&2
  exit 1
fi

close_offset=$(tail -n +"$((ul_line + 1))" "$INDEX_FILE" | grep -n '</ul>' | head -1 | cut -d: -f1)
if [ -z "$close_offset" ]; then
  echo "ERROR: Could not find </ul> after archive-list in $INDEX_FILE" >&2
  exit 1
fi
close_ul_line=$((ul_line + close_offset))

{
  head -n "$ul_line" "$INDEX_FILE"
  printf '%s' "$list_html"
  tail -n +"$close_ul_line" "$INDEX_FILE"
} > "$INDEX_FILE.tmp" && mv "$INDEX_FILE.tmp" "$INDEX_FILE"

echo "Rebuilt ai-brief index: ${#sorted[@]} briefs"
