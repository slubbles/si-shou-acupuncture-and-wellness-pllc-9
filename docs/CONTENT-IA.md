# CONTENT IA — Si Shou Acupuncture and Wellness, PLLC

Source: https://acuwellnessclinic.com/ + DESIGN_BRIEF.md
Sitemap derived: 12 content routes (WP json / xmlrpc filtered out)

## Routes
- `/` — Home (6 bands)
- `/about-us` — What is Sì Shòu? The 4 Guardians, philosophy, prevention + harmonious health
- `/our-team` — Practitioners Kate and Aaron
- `/testimonials` — Patient stories + Leave a Review CTA (Endorsal widget noted, no fake stars)
- `/upcoming-events` — Events / workshops
- `/treatment-modalities` — Service modalities offered
- `/blog` — Recent articles feed (4 posts from live: Eye Disorders, Neurological, Alzheimer's, Does it Hurt?)
- `/what-is-acupuncture` — What is acupuncture overview (Qi, meridians)
- `/what-is-acupuncture/what-we-treat` — Conditions treated
- `/what-is-acupuncture/first-visit` — What to expect first visit
- `/what-is-acupuncture/q-a` — Common questions
- `/clinic-forms` — Intake forms + contact info

No `/login` on sitemap — no auth surface.

## Palette (from LOOK_TOKENS + spectrum)
- Background: #f4f1ea (warm parchment)
- Text: #161513
- Muted: #6b645b
- Border: #e8e2d6
- Primary: #3d5a3a (sage evergreen — same-spectrum muted green for wellness)
- Accent: #c9a86a (warm brass, for CTA contrast) — stays in warm muted spectrum
- Gradients allowed: sage→parchment washes

## Typography
- Display: Georgia, 'Times New Roman', serif
- Body: system-ui, sans-serif
- Radius: 4px

## Media Plan — public/si-shou/
- logo.png (Artboard-1@sishou 1024) — header + hero mark
- logo-300.png — footer / compact
- foot-soak.jpg — Tibetan foot soak promo + treatment section bg (opacity-layered)
- Hero video: live site embeds YouTube S2ewQXzt8oM — keep as embed, no AI video
- Additional band images: foot-soak as layered opacity bg; logo as emblem; no Unsplash

## Copy Strategy
- Keep live phrasing verbatim where present (brief + scraped sections)
- Quote kept: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship." ~Buddha
- Peripheral Neuropathy foot-soak offer + PN2022 code preserved on home + modalities

## Layout Rule
- Each route has unique layout tree; only navbar + footer are shared.
- Home = 6 full-width bands, not stacked cards.
