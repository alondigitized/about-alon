# Retail Intelligence Pulse

Daily retail research briefs — footwear, digital commerce, marketplaces, loyalty, merchandising, omnichannel, AI-enabled discovery.

Published on GitHub Pages at `alondigitized.github.io/about-alon/research/`.

## Architecture

```
research/
├── index.html                          # Archive/listing page (passcode-gated)
├── style.css                           # Dark monospace stylesheet
├── gate.js                             # Client-side passcode gate
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
- `sessionStorage` token for same-tab session persistence
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

## How new retail briefs land

### Current flow (OpenClaw cron)

The existing cron job ("Retail Intelligence Pulse" at 4:00 AM PT daily) generates a standalone HTML file and writes it to:

```
research/retail_research_YYYY-MM-DD.html
```

After generating the brief, the cron job should:

1. Write the HTML to `research/retail_research_YYYY-MM-DD.html`
2. Update the archive index (`research/index.html`) — prepend a new `<li>` entry after the `<!-- New briefs -->` comment
3. Commit and push:
   ```bash
   cd ~/.openclaw/workspace/about-alon
   git add research/retail_research_YYYY-MM-DD.html research/index.html
   git commit -m "Retail Intelligence Pulse: YYYY-MM-DD"
   git push
   ```
4. GitHub Pages deploys automatically on push to `main`.

### Updating the archive index

New entries should be prepended (newest first) as `<li>` elements inside the `<ul class="archive-list">` in `research/index.html`, immediately after the `<!-- New briefs -->` comment.

Format:
```html
<li>
  <a href="retail_research_YYYY-MM-DD.html" class="archive-date">YYYY-MM-DD</a>
  <span class="archive-day">DayName</span>
  <div class="archive-summary">One-line summary of key topics</div>
</li>
```

## Telegram notification workflow

After the brief is published and pushed, the cron job should send a Telegram notification to Alan:

### Message format
```
Retail Intelligence Pulse — YYYY-MM-DD

[One-line summary: key companies/themes covered]

https://alondigitized.github.io/about-alon/research/retail_research_YYYY-MM-DD.html
```

### OpenClaw cron job config

The existing cron job in `~/.openclaw/cron/jobs.json` should include instructions to:

1. Generate the retail research HTML
2. Write it to `research/retail_research_YYYY-MM-DD.html`
3. Update `research/index.html` with the new entry
4. Commit and push
5. Send Telegram notification with the URL and a one-line summary

Example prompt addition for the cron job:
```
After pushing, send Alan a Telegram message:
"Retail Intelligence Pulse — YYYY-MM-DD\n[one-line summary]\nhttps://alondigitized.github.io/about-alon/research/retail_research_YYYY-MM-DD.html"
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
2. **Archive index requires manual/scripted update.** New briefs don't auto-appear in the listing.
3. **Client-side gating is not real security.** Both archive and individual brief pages are gated, but the passcode check runs in the browser. Content is in the HTML source and accessible to anyone who views source or disables JavaScript.
4. **Mixed styling.** Archive page is dark monospace; individual briefs have their own light inline styles. This is intentional — preserving existing brief formatting.
5. **No live push notifications.** Telegram notification is handled by the OpenClaw cron job, not the website.
