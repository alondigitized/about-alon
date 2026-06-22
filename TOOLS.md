---
type: reference
title: Tools & Local Notes
tags:
  - reference
  - setup
---
# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

### Notion

- **Activity Log Page:** `308bb013-6214-8009-9f33-ff59f7a3876d` ("Open Claw Log")
- **API Key:** stored in openclaw.json under skills.entries.notion.apiKey
- **Rule:** Log EVERYTHING to this page with timestamps (PST) — completed tasks, scheduled tasks, background work, memory updates, no exceptions

### GitHub / gh CLI

- `gh auth login` in Alan's interactive terminal is **not sufficient** for OpenClaw's exec/runtime on this machine.
- Reliable pattern for GitHub CLI inside OpenClaw:
  - `GH_TOKEN="$(launchctl getenv GH_TOKEN)" gh ...`
- Reason: `GH_TOKEN` exists in `launchctl`, but OpenClaw runtime processes do not consistently inherit it automatically.
- Do **not** assume plain `gh ...` will work from OpenClaw just because it works in Alan's shell.

---

Add whatever helps you do your job. This is your cheat sheet.
