#!/usr/bin/env bash
# generate.sh — Generate a new daily AI Brief page from a content file.
#
# Usage:
#   ./generate.sh                    # generates for today
#   ./generate.sh 2026-03-24         # generates for a specific date
#   ./generate.sh 2026-03-24 --monday  # Monday edition with weekend rollup banner
#
# This script:
#   1. Creates a new HTML brief from the template.
#   2. Updates the archive index (index.html) with the new entry.
#   3. Optionally commits and pushes (with --commit flag).
#
# Content workflow:
#   The generator creates a skeleton HTML file. The actual content is expected
#   to be filled in by an AI agent (OpenClaw cron) that:
#     a) Reads sources from sources.json
#     b) Researches current AI news
#     c) Writes the brief content into the HTML template
#     d) Calls this script OR directly writes the HTML and updates the index
#
# For OpenClaw cron integration, the recommended approach is:
#   1. Agent generates the brief HTML content directly
#   2. Agent writes it to ai-brief/briefs/YYYY-MM-DD.html
#   3. Agent calls: ./generate.sh YYYY-MM-DD --index-only --commit
#   OR simply:
#   1. Agent calls this script to create the skeleton
#   2. Agent fills in the content
#   3. Agent commits and pushes

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BRIEFS_DIR="$SCRIPT_DIR/briefs"
INDEX_FILE="$SCRIPT_DIR/index.html"

# Parse arguments
DATE="${1:-$(date +%Y-%m-%d)}"
IS_MONDAY=false
INDEX_ONLY=false
DO_COMMIT=false

shift || true
for arg in "$@"; do
  case "$arg" in
    --monday) IS_MONDAY=true ;;
    --index-only) INDEX_ONLY=true ;;
    --commit) DO_COMMIT=true ;;
  esac
done

# Determine day of week
DAY_NAME=$(date -j -f "%Y-%m-%d" "$DATE" "+%A" 2>/dev/null || date -d "$DATE" "+%A" 2>/dev/null || echo "Unknown")

# Monday auto-detection
if [ "$DAY_NAME" = "Monday" ]; then
  IS_MONDAY=true
fi

BRIEF_FILE="$BRIEFS_DIR/$DATE.html"

# ── Generate skeleton HTML if not --index-only ──
if [ "$INDEX_ONLY" = false ] && [ ! -f "$BRIEF_FILE" ]; then
  ROLLUP_HTML=""
  META_EXTRA=""
  if [ "$IS_MONDAY" = true ]; then
    ROLLUP_HTML='
  <div class="rollup-banner">
    This Monday brief rolls up Saturday &amp; Sunday. Regular weekday cadence.
  </div>'
    META_EXTRA=" &middot; Weekend rollup"
  fi

  cat > "$BRIEF_FILE" << HTMLEOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Brief — $DATE</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>

<div id="brief-content">

  <header class="brief-header">
    <h1>Daily AI Brief</h1>
    <div class="brief-meta">$DAY_NAME, $(date -j -f "%Y-%m-%d" "$DATE" "+%B %-d %Y" 2>/dev/null || date -d "$DATE" "+%B %-d %Y" 2>/dev/null || echo "$DATE")${META_EXTRA}</div>
  </header>
${ROLLUP_HTML}
  <!-- ═══════════════════════════════════════════ -->
  <!-- ENTERPRISE AI BRIEF                        -->
  <!-- ═══════════════════════════════════════════ -->
  <section>
    <span class="section-label enterprise">Enterprise AI Brief</span>
    <h2 class="section-title">What executives need to know</h2>

    <!-- ENTERPRISE ITEMS GO HERE -->
    <!-- Use this template for each item:
    <div class="item enterprise">
      <div class="item-headline">Headline here</div>
      <div class="item-analysis">Analysis here</div>
      <div class="item-source">
        <a href="URL" target="_blank" rel="noopener">Source</a> &middot; Date
      </div>
      <div class="item-tags">
        <span class="tag">category</span>
      </div>
    </div>
    -->

  </section>

  <!-- ═══════════════════════════════════════════ -->
  <!-- FOUNDER / OPERATOR AI BRIEF                -->
  <!-- ═══════════════════════════════════════════ -->
  <section>
    <span class="section-label founder">Founder / Operator AI Brief</span>
    <h2 class="section-title">What builders should act on</h2>

    <!-- FOUNDER ITEMS GO HERE -->
    <!-- Use this template for each item:
    <div class="item founder">
      <div class="item-headline">Headline here</div>
      <div class="item-analysis">Analysis here</div>
      <div class="item-source">
        <a href="URL" target="_blank" rel="noopener">Source</a> &middot; Date
      </div>
      <div class="item-tags">
        <span class="tag">category</span>
      </div>
    </div>
    -->

  </section>

  <footer class="brief-footer">
    <p>AI Brief is generated daily at 5:00 AM PT, weekdays. Monday editions roll up the weekend.</p>
    <p>Sources: X, Reddit, Hacker News, TechCrunch, ArXiv, industry publications. <a href="../index.html">Archive</a></p>
    <p style="margin-top: 8px; opacity: 0.5;">Content is AI-curated. Verify critical claims before acting. This is not investment advice.</p>
  </footer>

</div>

<script src="../gate.js"></script>
</body>
</html>
HTMLEOF

  echo "Created: $BRIEF_FILE"
fi

# ── Update archive index ──
if [ -f "$BRIEF_FILE" ]; then
  # Check if date already in index
  if grep -q "$DATE" "$INDEX_FILE" 2>/dev/null; then
    echo "Index already contains $DATE, skipping."
  else
    # Build the new list item
    if [ "$IS_MONDAY" = true ]; then
      DAY_LABEL="$DAY_NAME (weekend rollup)"
    else
      DAY_LABEL="$DAY_NAME"
    fi

    NEW_ENTRY="    <li>\\
      <a href=\"briefs/$DATE.html\" class=\"archive-date\">$DATE<\\/a>\\
      <span class=\"archive-day\">$DAY_LABEL<\\/span>\\
      <div class=\"archive-summary\">Brief pending<\\/div>\\
    <\\/li>"

    # Insert after the <!-- New briefs --> comment, or after <ul class="archive-list">
    if grep -q "<!-- New briefs" "$INDEX_FILE"; then
      sed -i.bak "s|<!-- New briefs.*-->|&\\
$NEW_ENTRY|" "$INDEX_FILE" && rm -f "$INDEX_FILE.bak"
    else
      sed -i.bak "s|<ul class=\"archive-list\">|<ul class=\"archive-list\">\\
$NEW_ENTRY|" "$INDEX_FILE" && rm -f "$INDEX_FILE.bak"
    fi
    echo "Updated index: $INDEX_FILE"
  fi
fi

# ── Commit if requested ──
if [ "$DO_COMMIT" = true ]; then
  cd "$SCRIPT_DIR/.."
  git add "ai-brief/briefs/$DATE.html" "ai-brief/index.html"
  git commit -m "AI Brief: $DATE"
  echo "Committed."
fi

echo "Done. Brief: ai-brief/briefs/$DATE.html"
