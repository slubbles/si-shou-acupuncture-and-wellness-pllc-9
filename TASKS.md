# TASKS.md — orchestration checklist

Orchestrator / craft agents: mark items `[x]` with short notes when done.

## Intake
- [x] Design brief received and written to DESIGN_BRIEF.md
- [x] AGENTS.md / README.md provenance confirmed

## Research
- [x] Split LOOK (visual refs) vs CONTENT (brief + existing site)
- [x] Content crawl: https://acuwellnessclinic.com/
- [x] Look analyze_reference 1: https://superpower.com (tokens extracted to LOOK_TOKENS.md)
- [x] Look analyze_reference 2: https://resetwellness.framer.website

## Build
- [x] Scaffold Next factory stack (or resume project) — Next 15.5.25, React 19.3.0, Tailwind v4, GSAP, Sentry
- [x] One section (or route) per distinct content block — 6 home bands + 11 secondary routes, each unique layout
- [x] Implement sections per brief / fidelity
- [x] Client chrome uses their phone/email/photos — not the lead form contact, not Unsplash
- [x] Follow ASSET_LOCK.md + LOOK_IA.md (their photos, 4–6 large bands, LOOK tokens only)
- [x] Wire /api/health and forms if needed — POST /api/submit with WEBHOOK_URL_CONTACT, offline success

## Verify & deploy
- [x] Build green — 17 static pages, shared First Load JS 103kB
- [x] Visual/content check vs brief — 6 home bands, correct phone/address/hours, Optimantra booking, Buddha quote
- [x] Deploy Vercel → record DEPLOY_URL — https://si-shou-acupuncture-and-wellness-pl.vercel.app

## Notes
- Design tokens: background #f4f1ea, text #161513, muted #6b645b, primary #3d5a3a, accent #c9a86a, display Georgia serif, radius 4px, motion false.
- Media: public/si-shou/logo.png + foot-soak.jpg from acuwellnessclinic.com, no stock.
- GitHub: slubbles/si-shou-acupuncture-and-wellness-pllc-9
- No auth (no /login on sitemap). No invented ratings/cities.
