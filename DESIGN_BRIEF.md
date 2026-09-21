# DESIGN BRIEF (source of truth)

- Lead ID: `409d801b39a745539b09f78f0b518c37`
- Schema: `genesis_brief/v1`
- Brief hash: `d46b961648783860`
- Generated: `2026-09-21T15:05:39+00:00`

Agents MUST follow this brief. If a change contradicts it, update this file
and note why in TASKS.md before shipping.

## Contact
- Name: Cesar Salem
- Email: cesar@thelamedia.com
- Phone: (none)
- Company: Si Shou Acupuncture and Wellness, PLLC

## Existing site
- Has site: yes
- URL: https://acuwellnessclinic.com/
- Preference: `keep_bios_rebuild`

## Brand
- Brand name: Si Shou Acupuncture and Wellness, PLLC
- Tagline: DO THE THINGS THAT MAKE YOU HAPPY

### About
Si Shou Acupuncture and Wellness, PLLC. Acupuncture in South Austin (Oak Hill), TX. Care is centered around each individual patient and their specific needs and goals helping you achieve harmonious health. Phone (512) 387-4002. Address: 5424 W US Hwy 290 Service Rd Ste 106, Austin, TX 78735. Hours: Mon 10am-5pm, Tue 2pm-6pm, Wed 10am-5pm, Thu 10am-2pm, Fri 10am-7pm, Sat 10am-3pm, Sun closed. Practitioners Kate and Aaron. Booking via Optimantra. Recent articles include eye disorders, neurological disorders, Alzheimer's, and does acupuncture hurt. Quote: Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.

## Visual references
_No lead refs — harness selected past approved looks (layout/vibe only; brand/copy must stay this lead's)._
- Superpower: https://superpower.com
- Reset Wellness: https://resetwellness.framer.website
1. https://superpower.com
2. https://resetwellness.framer.website

## Style
- Chips: modern, classic, mature
- Notes: (none)

## Colors
- Mode: `designer_choose`
- Palette: (designer choose)

## Scope
- Mode: `multipage`
- Pages (existing_site_nav): /, /wp-json/oembed/1.0/embed, /wp-json, /wp-json/wp/v2/pages/5, /xmlrpc.php, /about-us, /our-team, /testimonials, /upcoming-events, /treatment-modalities, /blog, /what-is-acupuncture, /what-is-acupuncture/what-we-treat, /what-is-acupuncture/first-visit, /what-is-acupuncture/q-a, /clinic-forms

## LOOK vs CONTENT (do not mix)
- **LOOK (visual only):** reference_urls / look library. Layout, type, spacing, motion, photography *style*. Not IA, not copy.
- **CONTENT (facts only):** this brief + existing_site.url. Name, copy, services, prices, cities, phone, email, testimonials.
- NEVER copy prices, memberships, cities, or service lists from a visual reference (no Casa $199, no Bay Area unless this brief says so).
- NEVER invent star ratings, review counts, “EST. YEAR”, customer counts, or other stats unless they appear in this brief or the current site.
- If the brief or current site shows 0+, 0x, blank, or placeholder metrics, leave them blank or omit. Do not invent 600+ / 4.2x / 38%.
- If they have a current site: scrape/analyze THAT url for copy/photos/nav; visual refs are not the content source.

## Information architecture (do not cram)
- One idea per section. Hero is not the whole homepage.
- If the current site has distinct blocks (about, services, hours, contact, articles), give each its own section and/or route. Extra sections are required. Compressing their copy to fit a template is a fail.
- Do not paraphrase a long about into a short hero blurb and drop the rest. Keep their words; give them space.
- Lead form name/email/phone is **ops only**. Never put it on the client site. Footer/contact = **their** phone/email/address from the current site or brief brand facts.
- Images: same-host photos from the current site. No Unsplash/stock/placeholder people if that site has real images.
- Header wordmark = ASSET_LOCK logo_urls (their mark). Never a stock headshot in the nav.
- Use LOOK_TOKENS.md for background, type, radius. One GSAP/CSS motion on the hero if tokens.motion is true.

## Product constraints (Genesis)
- Factory stack: latest pins in FACTORY STACK STANDARD (Next 15.x, React 19, TW v4, GSAP, Sentry env-ready)
- Vercel: `vercel --prod --yes --name` from `.genesis_vercel.json` (brand slug). Do not accept a random `*-murex-six` slug.
- Deploy to Vercel; report DEPLOY_URL and GITHUB_URL
- Personalized to this brief — no generic template look
- analyze_reference on LOOK urls for design; analyze existing_site for content when present
