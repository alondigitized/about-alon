# Retail Intelligence Pulse

Daily retail research briefs — footwear, digital commerce, marketplaces, loyalty, merchandising, omnichannel, AI-enabled discovery.

Published on GitHub Pages at `alondigitized.github.io/about-alon/research/`.

## Architecture

```
research/
├── index.html                          # Archive/listing page (passcode-gated)
├── style.css                           # Dark monospace stylesheet
├── gate.js                             # Client-side passcode gate
├── rebuild-index.sh                    # Idempotent archive index regeneration
├── README.md                           # This file
└── retail_research_YYYY-MM-DD.html     # Individual daily briefs (17 and counting)
```

### Content model

Each daily brief is a standalone HTML page at `research/retail_research_YYYY-MM-DD.html`. Briefs are self-contained with inline styles (light theme, sans-serif). The archive landing page uses the dark monospace theme for navigation consistency with AI Brief.

Focus areas:
- Footwear industry (Nike, Adidas, New Balance, On, Hoka, etc.)
- Digital commerce and marketplace strategy
- Loyalty and engagement
- Merchandising and omnichannel
- AI-enabled discovery and shopping

### Static site on GitHub Pages

Everything is static HTML/CSS/JS. No build step. Pages deploy from `main` via GitHub Actions (`deploy-pages.yml`).

## Access gating

Both the archive page and individual retail brief pages use **lightweight client-side passcode gating** (same approach as AI Brief).

- SHA-256 hashed passcode compared in browser
- `localStorage` token persists across browser sessions (no need to re-enter on every visit)
- **Not real security** — content is in the HTML source; anyone who views source or disables JS can read it
- Gate script (`gate.js`) is loaded in `<head>` so it hides the page before content renders

**Default passcode:** `retailpulse`

To change:
```bash
echo -n "YOUR_NEW_PASSCODE" | shasum -a 256
# Replace EXPECTED_HASH in research/gate.js
```

**How the gate works on different page types:**
- **Archive page** (`index.html`): Content is wrapped in `<div id="brief-content">` — gate hides/shows that div.
- **Individual briefs** (`retail_research_*.html`): No wrapper needed — gate hides all `<body>` children and overlays the passcode prompt. Inline styles on the overlay ensure it renders correctly regardless of the page's own stylesheet.

**New retail briefs must include the gate.** Add this line inside `<head>`:
```html
<script src="gate.js"></script>
```

## Archive index regeneration

`rebuild-index.sh` deterministically regenerates the archive list in `index.html` by scanning all `retail_research_*.html` files. It is **idempotent** — run it any number of times and get the same result for the same inputs.

**Summary extraction priority:**
1. `<meta name="brief-summary" content="...">` tag in the brief (preferred)
2. Company/topic names from `<li><strong>Name:</strong>` patterns (first 4)
3. Fallback: "Retail intelligence pulse"

To control the archive summary for a brief, add this to its `<head>`:
```html
<meta name="brief-summary" content="Your concise summary here">
```

## How new retail briefs land

### Recommended flow (OpenClaw cron)

The cron job ("Retail Intelligence Pulse" at 4:00 AM PT daily) should follow these steps:

1. **Content generation:** Generate the brief HTML. Include `<meta name="brief-summary" content="...">` in the `<head>` for a clean archive summary. Include `<script src="gate.js"></script>` in the `<head>` for passcode gating. Write to `research/retail_research_YYYY-MM-DD.html`.
2. **Index regeneration:**
   ```bash
   ./research/rebuild-index.sh
   ```
3. **Commit + push:**
   ```bash
   cd ~/.openclaw/workspace/about-alon
   git add research/retail_research_YYYY-MM-DD.html research/index.html
   git commit -m "Retail Intelligence Pulse: YYYY-MM-DD"
   git push
   ```
4. **Telegram notification:** Send completion message with summary and URL.

GitHub Pages deploys automatically on push to `main`.

### Files the cron job should touch

| Step | File | Action |
|------|------|--------|
| Content | `research/retail_research_YYYY-MM-DD.html` | Create (new) |
| Index | `research/index.html` | Regenerate via `rebuild-index.sh` |
| Git | Both above | `git add` + commit + push |

## Telegram notification workflow

After the brief is published and pushed, the cron job should send a Telegram notification to Alan:

### Message format
```
Retail Intelligence Pulse — YYYY-MM-DD

[One-line summary: key companies/themes covered]

https://alondigitized.github.io/about-alon/research/retail_research_YYYY-MM-DD.html
```

### OpenClaw cron job config

The existing cron job in `~/.openclaw/cron/jobs.json` should separate these steps clearly in the prompt:

```
## Step 1: Content generation
Generate the retail research HTML. Include <meta name="brief-summary" content="Top companies/themes">
and <script src="gate.js"></script> in the <head>. Write to research/retail_research_YYYY-MM-DD.html.

## Step 2: Regenerate archive index
Run: ./research/rebuild-index.sh

## Step 3: Commit + push
git add research/retail_research_YYYY-MM-DD.html research/index.html
git commit -m "Retail Intelligence Pulse: YYYY-MM-DD"
git push

## Step 4: Telegram notification
Send: Retail Intelligence Pulse — YYYY-MM-DD\n[summary]\nhttps://alondigitized.github.io/about-alon/research/retail_research_YYYY-MM-DD.html
```

The `deliver_to: telegram` field in the cron job config handles the delivery channel. The cron job's completion message IS the Telegram notification.

## Naming convention

Files MUST follow: `retail_research_YYYY-MM-DD.html`

This convention is used by:
- The archive index linking
- The cron job's file-write target
- The Telegram notification URL

## Limitations

1. **No server-side generation.** Briefs must be generated externally and committed.
2. **Summary auto-extraction is approximate.** Without a `<meta name="brief-summary">` tag, summaries are extracted from `<li><strong>` patterns. For best results, include the meta tag in every new brief.
3. **Client-side gating is not real security.** Both archive and individual brief pages are gated, but the passcode check runs in the browser. Content is in the HTML source and accessible to anyone who views source or disables JavaScript.
4. **Mixed styling.** Archive page is dark monospace; individual briefs have their own light inline styles. This is intentional — preserving existing brief formatting.
5. **No live push notifications.** Telegram notification is handled by the OpenClaw cron job, not the website.
