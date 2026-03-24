# AI Brief

Daily AI intelligence brief — enterprise strategy + founder/operator edge.

Published on GitHub Pages at `alondigitized.github.io/about-alon/ai-brief/`.

## Architecture

```
ai-brief/
├── index.html           # Archive/listing page (passcode-gated)
├── style.css            # Shared dark monospace stylesheet
├── gate.js              # Client-side passcode gate
├── sources.json         # Curated source lists (X accounts, subreddits, categories)
├── brief-template.html  # HTML template with placeholder variables
├── generate.sh          # Shell script to scaffold new briefs & update index
├── README.md            # This file
└── briefs/
    └── 2026-03-23.html  # Individual daily brief pages
```

### Content model

Each daily brief is a standalone HTML page in `briefs/YYYY-MM-DD.html` with two sections:

1. **Enterprise AI Brief** — sharp executive advisor tone. Strategic importance, market moves, regulation.
2. **Founder / Operator AI Brief** — builder-focused. Tools, tactics, fundraising, open-source.

Target: ~10-12 total items per brief, ranked by a weighted blend of:
- Strategic importance (40%)
- Actionability (35%)
- Heat / momentum (25%)

Monday briefs include a weekend rollup banner covering Saturday and Sunday.

### Static site on GitHub Pages

Everything is static HTML/CSS/JS. No build step required. Pages deploy directly from the `main` branch via GitHub Pages.

## Access gating

The site uses **lightweight client-side passcode gating**. This is honest-tier security:

- A passcode prompt overlay appears before content is shown.
- The entered passcode is SHA-256 hashed in the browser and compared to a stored hash.
- On success, `sessionStorage` stores a token so subsequent pages in the same tab session skip the prompt.
- The gate script and hash are in the page source — a determined user can bypass this trivially.

**This is not real security.** It is equivalent to a shared password on a Google Doc link. It prevents casual access and makes it clear the content is not public. It does NOT protect against anyone who views page source.

**Default passcode:** `aibrief`

To change the passcode:
```bash
echo -n "YOUR_NEW_PASSCODE" | shasum -a 256
# Copy the hash and replace EXPECTED_HASH in gate.js
```

## Generating a new brief

### Option A: Full agent workflow (recommended for OpenClaw cron)

The agent (OpenClaw cron job at 5:00 AM PT weekdays) should:

1. Read `sources.json` for the curated source lists and ranking weights.
2. Research current AI news from those sources.
3. Write a complete HTML brief page to `ai-brief/briefs/YYYY-MM-DD.html` using `brief-template.html` as the structure reference.
4. Update the archive index:
   ```bash
   ./ai-brief/generate.sh YYYY-MM-DD --index-only --commit
   ```
5. Push to `main` — GitHub Pages deploys automatically.

### Option B: Skeleton + fill

1. Run the generator to create a skeleton:
   ```bash
   cd ai-brief
   ./generate.sh 2026-03-24
   # For Monday with weekend rollup:
   ./generate.sh 2026-03-24 --monday
   ```
2. Edit `briefs/2026-03-24.html` — fill in the enterprise and founder items.
3. Commit and push.

### Option C: Manual

Copy an existing brief (e.g., `briefs/2026-03-23.html`), update the date and content, and add an entry to `index.html`.

## OpenClaw cron integration

Add a cron job to `~/.openclaw/cron/jobs.json`:

```json
{
  "name": "Daily AI Brief",
  "schedule": "0 5 * * 1-5",
  "timezone": "America/Los_Angeles",
  "prompt": "Generate today's Daily AI Brief. Read ai-brief/sources.json for source lists and ranking weights. Research current AI news from X, Reddit, Hacker News, and publications. Write 5 enterprise items (sharp executive advisor tone) and 6 founder/operator items (builder-focused, practical). If today is Monday, include a weekend rollup banner. Write the HTML to ai-brief/briefs/YYYY-MM-DD.html following the structure in ai-brief/brief-template.html and ai-brief/briefs/2026-03-23.html as examples. Then run: cd about-alon && ./ai-brief/generate.sh YYYY-MM-DD --index-only --commit && git push",
  "deliver_to": "telegram"
}
```

**Note:** The Telegram delivery of brief content is out of scope for the static site. The cron job's `deliver_to: telegram` will send a summary notification. The full brief lives on the website.

## Source lists

Maintained in `sources.json`:

- **~30 X accounts** across three categories:
  - Enterprise strategists (Nadella, Pichai, Altman, Andrew Ng, Benedict Evans, etc.)
  - AI labs & research (OpenAI, Anthropic, DeepMind, Meta AI, Mistral, etc.)
  - Builders & founders (Karpathy, swyx, Simon Willison, Amjad Masad, etc.)
- **~12 subreddits** across two categories:
  - Agent/coding tools (r/ClaudeAI, r/ChatGPT, r/LocalLLaMA, r/cursor, etc.)
  - Broader AI/startup (r/MachineLearning, r/startups, r/SaaS, etc.)
- **Other sources:** Hacker News, TechCrunch, The Information, Semafor, ArXiv, Product Hunt

### X access limitations

X/Twitter API access for automated reading is limited and expensive. Practical approaches:
- **Manual curation:** Agent uses web search to find recent posts from listed accounts.
- **RSS bridges:** Services like Nitter (when available) or RSS.app can provide feeds.
- **Web search:** Brave Search or Google can surface recent tweets by account handle.
- The source list is a targeting guide, not an API integration. The agent uses it to know *who* to look for, then finds their content through available channels.

## Limitations

1. **No server-side generation.** Briefs must be generated externally and committed to the repo.
2. **Client-side gating is not secure.** Content is in the HTML source. This is a UX gate, not an access control.
3. **X/Twitter sourcing is imperfect.** API access is expensive; the agent relies on web search and available feeds.
4. **No live push notifications.** The site doesn't send Telegram messages. That's handled by the OpenClaw cron job's delivery mechanism separately.
5. **Manual archive updates.** The `generate.sh` script automates index updates, but if you write HTML manually, you need to update `index.html` too.

## Design

Dark monospace aesthetic, mobile-first. Matches the repo's existing style direction per CLAUDE.md.

- Color-coded sections: purple for enterprise, green for founder/operator
- Red "hot" tags for high-heat items
- 720px max-width, comfortable reading on mobile and desktop
- Minimal — no frameworks, no build tools, no dependencies
