#!/usr/bin/env bash
# rebuild-index.sh — Deterministically regenerate the Retail Pulse archive index.
#
# Scans retail_research_*.html, extracts dates and summaries, and rewrites the
# <ul class="archive-list"> block in index.html.
#
# Idempotent: run any number of times, same inputs produce same output.
#
# Usage:
#   ./rebuild-index.sh
#
# Summary extraction priority:
#   1. <meta name="brief-summary" content="..."> in the brief HTML
#   2. Company/topic names from <li><strong>Name:</strong> patterns (first 4)
#   3. "Retail intelligence pulse"
#
# To control the summary for a brief, add this to its <head>:
#   <meta name="brief-summary" content="Your summary here">

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
INDEX_FILE="$SCRIPT_DIR/index.html"

# Collect retail brief files sorted newest-first
files=()
for f in "$SCRIPT_DIR"/retail_research_*.html; do
  [ -f "$f" ] && files+=("$f")
done

if [ ${#files[@]} -eq 0 ]; then
  echo "No retail brief files found"
  exit 0
fi

IFS=$'\n' sorted=($(printf '%s\n' "${files[@]}" | sort -r)); unset IFS

# --- Build archive list entries ---
list_html=""
for brief in "${sorted[@]}"; do
  # Extract date from filename: retail_research_YYYY-MM-DD.html
  date_str=$(basename "$brief" .html | sed 's/^retail_research_//')

  # Day of week (macOS / GNU fallback)
  day_name=$(date -j -f "%Y-%m-%d" "$date_str" "+%A" 2>/dev/null \
          || date -d "$date_str" "+%A" 2>/dev/null \
          || echo "Unknown")

  day_label="$day_name"

  # --- Extract summary ---
  summary=""

  # Priority 1: meta brief-summary tag
  meta=$(grep -o '<meta name="brief-summary" content="[^"]*"' "$brief" 2>/dev/null \
       | sed 's/.*content="//;s/"$//' || true)
  if [ -n "$meta" ]; then
    summary="$meta"
  fi

  # Priority 2: company/topic names from exec summary <li><strong>Name:</strong>
  if [ -z "$summary" ]; then
    topics=$(grep '<li><strong>' "$brief" 2>/dev/null \
           | sed 's/.*<strong>//;s/<\/strong>.*//' \
           | sed 's/:$//' \
           | head -4 || true)
    if [ -n "$topics" ]; then
      summary=$(echo "$topics" | tr '\n' '|' | sed 's/|$//; s/|/ \&middot; /g')
    fi
  fi

  # Priority 3: fallback
  if [ -z "$summary" ]; then
    summary="Retail intelligence pulse"
  fi

  list_html+="    <li>
      <a href=\"retail_research_${date_str}.html\" class=\"archive-date\">${date_str}</a>
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

echo "Rebuilt retail index: ${#sorted[@]} briefs"
