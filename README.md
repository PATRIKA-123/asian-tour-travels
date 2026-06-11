# Asian Tour and Travels — Website

A premium, single-page travel agency website for **Asian Tour and Travels**, Guwahati — North East India tour & cab specialists.

Built with **React + Vite + Tailwind CSS**, animated with **Framer Motion**, carousels by **Swiper**, forms by **React Hook Form**.

---

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → /dist
npm run preview  # preview the production build
```

Node 18+ recommended.

---

## Design system

| Token | Value | Role |
| --- | --- | --- |
| `forest` | `#1B4332` | Primary — Deep Forest Green |
| `mountain` | `#1D3557` | Secondary — Mountain Blue |
| `gold` | `#E0A82E` | Accent — Golden Yellow |
| `mist` | `#F7F8F5` | Background — Soft White |

- **Display type:** Fraunces · **Body type:** Plus Jakarta Sans (loaded via Google Fonts in `index.html`).
- **Signature element:** layered, misty **mountain-ridge dividers** (`components/ui/MountainDivider.jsx`) that transition between sections — a nod to the Himalayan foothills of the North East.
- Glassmorphism, soft shadows, gold accents, and scroll-reveal / hover-lift micro-interactions throughout.

---

## Architecture

```
src/
├── assets/
├── components/
│   ├── ui/          → Button, SectionHeading, MountainDivider
│   ├── layout/      → Navbar, Footer, FloatingButtons
│   └── sections/    → Hero, Stats, Fleet, Destinations, Services,
│                      WhyChooseUs, BookingProcess, Testimonials, Contact
├── hooks/           → useCountUp, useScrollSpy
├── data/            → siteContent.js  ← SINGLE SOURCE OF TRUTH
├── utils/           → icons.js (curated registry), helpers.js
├── pages/           → Home.jsx
├── App.jsx
└── main.jsx
```

**Key patterns**
- **`data/siteContent.js` is the single source of truth.** All copy, contact details, services, destinations, fleet and testimonials live here. Edit this one file to update the site or rebrand.
- **Curated icon registry** (`utils/icons.js`): icons are imported explicitly and resolved by name — no `import *` wildcards, so the Lucide footprint stays tiny.
- **No backend.** The contact form composes a pre-filled WhatsApp message and opens `wa.me` — submissions land straight in WhatsApp.

---

## ✅ Pre-launch checklist

1. **Swap the images.** Every `image:` URL in `src/data/siteContent.js` (and the hero) is a curated Unsplash *placeholder*. Replace them with the client's own licensed/owned photos of the actual destinations. Put real **fleet photos** into the empty `image: ''` fields to switch each vehicle card from icon-mode to photo-mode.
2. **Confirm contact details.** Phone numbers are wired up. Update `email` in `siteContent.js` (currently a placeholder) and verify the address `mapsQuery`.
3. **Replace sample testimonials** with real client reviews.
4. **Add an OG share image** at `/public/og-image.jpg` (referenced in `index.html` structured data) and update the canonical domain.
5. Drop in real social links if needed (footer icons currently route to WhatsApp/call/email).

---

## SEO

- Semantic headings, descriptive `alt` text, lazy-loaded destination images.
- Meta title/description/keywords + Open Graph + Twitter cards in `index.html`.
- `TravelAgency` JSON-LD structured data with NAP (name, address, phone) for local search ("Best Travel Agency in Guwahati", "North East Tour Packages", etc.).

---

## Accessibility & performance

- Mobile-first, no horizontal scroll, responsive across mobile → desktop.
- Keyboard-focusable controls with visible focus rings; `prefers-reduced-motion` respected (animations and count-ups disable gracefully).
- Production bundle ≈ 147 KB gzipped.
