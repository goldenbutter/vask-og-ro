# Vask & Ro — Demo Site

A two-tier static website prototype for a fictional Norwegian eco-cleaning service (renholdsbyrå) in Trondheim. Built to demonstrate what a real cleaning-company client site can look like at two price points.

**Live demos:**
- Classic → [demo-renhold-classic.ibithun.com](https://demo-renhold-classic.ibithun.com)
- Premium → [demo-renhold-premium.ibithun.com](https://demo-renhold-premium.ibithun.com)

> Both sites ship with `<meta name="robots" content="noindex, nofollow">` and a `Disallow: /` `robots.txt`. Demo content should not compete in search results with the eventual real client site.

---

## Tiers

The tier difference is **motion / hover / colour only**. Structure, layout, branding, wordmark, footer and the page palette are identical across both tiers at rest — only the premium tier animates and reveals on interaction.

### Classic
A clean, fast marketing site with no frills and no framework overhead.

- 5 pages: Hjem, Tjenester, Om oss, Kontakt, 404
- Responsive at 980 / 860 / 780 / 600 / 480 px breakpoints
- Mobile hamburger menu (solid dropdown card)
- Functional price calculator, contact form, and Stripe demo deposit checkout
- Stripe demo-payment modal (locked phrase, booking-led niche)
- Vercel Web Analytics on every page
- Norwegian only (EN translations preserved in `js/main.js`, ready to unlock as a paid upgrade)
- Fully static — no entrance animation, no backdrop, no hover motion

### Premium
Same baseline plus the signature motion + interactivity layer.

- **Price-by-area calculator** — kvm × pris/kvm × frekvens-rabatt + tillegg → live, counting total
- **Recurring vs one-off toggle** — recurring applies a −20% discount
- **Atmospheric scroll-crossfade backdrop** + rotating-highlight hero typewriter
- **Before/after hover-reveal** showcase (kitchen + bathroom)
- **Eco / miljømerket** badge + trust-and-authority section
- **NO/EN language toggle** — animated segmented switch, active and visible
- Card-float + icon-drift, scroll-reveal, one-shot nav-logo hover rotate
- **Visitor-badge view counter** in footer

---

## Stack

Vanilla HTML · CSS (custom properties, no framework) · JavaScript (no dependencies)

- No `npm install`. No build step. Open `index.html` in a browser.
- Single `css/style.css` + single `js/main.js` per tier (classic appends a static-override tail; classic JS comment-wraps the i18n block)
- Deployed on Vercel — each tier has a `vercel.json` with 1-year immutable cache for `/assets/*`, 5-minute revalidate for css/js, and security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- Vercel Web Analytics enabled on both projects

---

## Run locally

No build step, no dependencies. Open two terminals at the prototype root:

```bash
cd demo-renhold-classic && python -m http.server 5500
# then open http://localhost:5500
```

```bash
cd demo-renhold-premium && python -m http.server 5501
# then open http://localhost:5501
```

---

## Repo layout

```
renhold-demo/
├── demo-renhold-classic/    # Classic tier
│   ├── assets/images/       # All photos
│   ├── css/style.css
│   ├── js/main.js
│   ├── favicon.svg · robots.txt · vercel.json
│   └── *.html (5 pages)
└── demo-renhold-premium/    # Premium tier (classic + signature motion)
    └── ... (mirrors classic page set)
```

---

## Design system

- **Palette:** warm cream canvas `#F6F1E7`, cornflower-azure primary `#2F6BB0` (from the uniform), deep-caramel AA text-accent `#8A5A14` + sun-ochre decorative `#C98A2B`, sage eco `#6E8C6A` / `#3F5641`, espresso text `#2B2622`
- **Type:** Fraunces (display serif) · Mulish (body) · Marcellus (wordmark)
- All token pairs AA-verified; opaque focus ring; reduced-motion guarded.

---

## Photography

Placeholder photos are generated for prototype use only. Real customer photos replace every asset at fork time before the site goes live on a custom domain. Norwegian Markedsføringsloven and EU disclosure rules around generated imagery in commercial contexts make real photos the only safe default for production.

---

## Credits

Developed by Bithun
