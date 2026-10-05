# CHECKPOINT — The Strength B.I.B.L.E.

**Last Updated:** 2026-10-04
**Session ID:** 013
**Phase:** 2 — DEPLOYED

## Live Site

**URL:** https://coachmalcolmonline-lgtm.github.io/strength-bible/
**Repo:** https://github.com/coachmalcolmonline-lgtm/strength-bible
**Hosting:** GitHub Pages (public repo, free tier)
**Auto-Deploy:** GitHub Actions on every push to main
**Workflow:** .github/workflows/deploy.yml

## Current State

- Content Files: 50 (Phase 1 complete)
- Astro site: fully functional
- All routes working: concepts, lifts, bodyweight, mobility, journal, stories
- CFU component: interactive, correct/incorrect feedback works
- BaseLayout: sticky header, Home link, Back to top
- Deployment: automatic on every push

## How to Update the Live Site

1. Edit any markdown file in src/content/
2. Run: ./scripts/checkpoint.sh "message"
3. Wait 1–2 minutes for GitHub Actions
4. Refresh the live URL

## What's Next (Priority Order)

1. Add READMEs for training programs (General, Wendler 5/3/1, Texas Method, etc.)
2. Add training log templates: general, Wendler 5/3/1, Texas Method
3. Implement localStorage journal memory (adaptive mastery tracking)
4. Build Mastery Tracker page
5. Video links (13) — pending confirmation
6. Content editing queue: update/edit/swap CFUs, stories, anecdotes

## Open Decisions

- Video links (13) — pending confirmation
- Custom domain — optional, deferred

## Prompt for Next Session

You are continuing work on The Strength B.I.B.L.E. project. Read this checkpoint, then read docs/build-spec.md. **Phase 2 (deployment) is COMPLETE.** Live site at https://coachmalcolmonline-lgtm.github.io/strength-bible/. Next task: add training program READMEs and templates (Wendler 5/3/1, Texas Method, General), then implement localStorage for journal memory. Do not re-plan. Execute.
