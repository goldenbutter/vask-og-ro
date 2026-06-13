# READINESS — renhold-demo (Vask & Ro)

> One-page sign-off gate. Per-project DEVELOPER fills this in before Bithun's review.
> **Generated:** 2026-06-13 by pipeline DEVELOPER (S56 build dispatch). Rules current as of family `CLAUDE.md` / ARCHITECTURE-DECISION-GUIDE.

## Status legend
✅ verified · ❌ failing (must fix) · ⚠️ known launch-blocker · ⏳ TODO before launch (non-blocking) · 🚫 N/A (with reason)

---

## 1. Family-wide locks

| Rule | Classic | Premium | Note |
|---|---|---|---|
| Payment modal phrase — Stripe (booking-led niche) locked verbatim | ✅ | ✅ | `Dette er en demo — Stripe-betaling aktiveres når din Stripe-konto er koblet til.` on kontakt + in translations |
| Footer credit "Utviklet av Bithun" / "Developed by Bithun" | ✅ | ✅ | on all 4 chrome pages (404 has no footer per contract) |
| No AI tool names in tracked files | ✅ | ✅ | `git ls-files` filenames clean; tracked text clean; `.gitignore` `CLAUDE.md`/`.claude/` are ignore-patterns (accepted meta-reference) |
| Vercel Analytics `/_vercel/insights/script.js` every page | ✅ | ✅ | 5/5 pages each tier |
| Visitor badge URL (`left_text=Views`, `left_color=%23333333`, `right_color=%23C98A2B`) | ✅ commented | ✅ rendered | classic HTML-commented on 4 pages; premium rendered on 4 pages |
| No remote image URLs (badge is the only exception) | ✅ | ✅ | all photos local under `assets/images/`; only Google Fonts + visitor-badge are remote |
| No `rotate()` in `@keyframes` | ✅ | ✅ | awk scan of every `@keyframes` body = none; nav-logo `rotate(360deg)` is a one-shot `:hover` transition (allowed) |
| Real `favicon.svg` file | ✅ | ✅ | eco leaf-drop glyph (sage leaf + azure vein), not a data URI |
| OG meta on every HTML page (5/5 incl. 404) | ✅ | ✅ | absolute URLs, per-tier domain |
| OG image < 600 KB | ✅ | ✅ | og-home 256 KB, og-services 219 KB (1672×941, ~16:9) |
| `og:image` URLs absolute | ✅ | ✅ | `https://demo-renhold-{tier}.ibithun.com/...` |
| `.gitignore` covers CLAUDE.md/.claude/_public/_docs/AGENTS.md/.codex/*.command + `*.jpeg` (pv- previews) | ✅ | ✅ | verified: 0 ignored paths tracked; 70 files tracked |
| Folder naming `demo-renhold-{classic,premium}` (business word) | ✅ | ✅ | |
| Build log at `_docs/_prompt/BUILD_PROGRESS.md` (gitignored) | shared | shared | present; `git ls-files _docs/` empty |
| `prefers-reduced-motion` guard on every infinite keyframe | 🚫 (no animations) | ✅ | classic strips all motion via the static-override tail |
| ~1280px nav==content frame, brand on one line | ✅ | ✅ | `--frame-max:1280px`; Marcellus wordmark `white-space:nowrap` |
| `.nav-cta { display:none }` ≤480px (scoped to top bar; drawer CTA stays) | ✅ | ✅ | `.nav-right .nav-cta` |
| `position:-webkit-sticky;position:sticky` on nav | ✅ | ✅ | |

---

## 2. Tier integrity

### Classic kill mechanisms
| Mechanism | State |
|---|---|
| Translations object wrapped `/* ... */` in `js/main.js` | ✅ |
| `applyTranslations()` / `initLangToggle()` commented in DOMContentLoaded | ✅ |
| EN toggle button HTML-commented in nav + mobile menu (4 pages) | ✅ |
| Visitor-badge `<img>` HTML-commented in footer (4 pages) | ✅ |
| Static-override block (`animation:none; transition:none`) at end of `style.css` | ✅ |
| `:hover`-state nullifier block (kills transforms/shadows/colour shifts) | ✅ |
| No premium signature motion (typewriter/backdrop/card-float/scroll-reveal) | ✅ |
| Functional surfaces still work (calculator instant total · contact form · Stripe deposit) | ✅ per brief §4 |
| Before/after = static FØR/ETTER 4-up grid (no crossfade) | ✅ |
| `node --check js/main.js` | ✅ passes (comment-wrap clean) |

### Premium signature features
| Feature | State |
|---|---|
| Active `translations = { no, en }` object | ✅ |
| `applyTranslations()` + `initLangToggle()` in DOMContentLoaded | ✅ |
| Animated NO/EN toggle (sliding pill) in nav + mobile menu | ✅ |
| `renhold-lang` localStorage persistence | ✅ |
| Rotating-highlight Fraunces typewriter (≥45ms/char, LCP-safe, restartable) | ✅ |
| Atmospheric scroll-crossfade backdrop (`initFixedBackdrop`, per-page photo sets) | ✅ |
| Price-by-area calculator (water-fill slider, count-up total, −20% recurring rabatt) | ✅ |
| Before/after hover/tap crossfade (kitchen + bathroom) + `.is-tapped` iOS twin | ✅ |
| Two-axis card-float + icon-drift — home preview AND `tjenester.html` listing | ✅ |
| Equipment showcase ("Vårt utstyr", om-oss) — 7 photos, card-float + `.is-tapped` iOS twin (static cream cards on classic) | ✅ |
| One-shot nav-logo hover rotate; scroll-reveal; ring-pulse phone CTA | ✅ |
| Stripe deposit checkout (500 kr, `?svc=` + `.book-trigger` auto-select, success receipt) | ✅ |
| Liquid-glass mobile menu (`backdrop-filter: blur`) | ✅ |
| `prefers-reduced-motion` guard | ✅ |
| `node --check js/main.js` | ✅ passes |

---

## 3. Browser smoke test
| Check | State | Note |
|---|---|---|
| Both `main.js` parse (`node --check`) | ✅ | classic + premium |
| Dev servers serve correct brand (content-identity, not just HTTP 200) | ✅ | classic :5500 + premium :5501 both serve `<title>Vask & Ro …`; served JS/CSS reflect on-disk edits |
| All 5 pages/tier reachable (200 + title) | ✅ | index/tjenester/om-oss/kontakt/404 verified via Python urllib |
| Tier markers served correctly | ✅ | classic NO-only JS + commented badge + static BA grid; premium i18n JS + rendered badge + crossfade frames |
| Interactive walk (lang toggle, calculator drag, before/after tap, modal open/close, mobile menu, console=0 errors) | ⏳ | Playwright browser was held by another session (`--isolated` needed); deferred to REVIEWER / Bithun. Mechanical + served-content checks all pass. |

---

## 4. OG / social-preview
| Page | OG <600 KB | OG URL absolute | OG alt | Note |
|---|---|---|---|---|
| index | ✅ og-home | ✅ | ✅ | |
| tjenester | ✅ og-services | ✅ | ✅ | |
| om-oss | ✅ og-home | ✅ | ✅ | reuses og-home (no og-about generated) |
| kontakt | ✅ og-services | ✅ | ✅ | reuses og-services (no og-contact generated) |
| 404 | ✅ og-home | ✅ | ✅ | |

opengraph.xyz round-trip: ⏳ pending deploy (no live URL yet).

---

## 5. Outstanding TODOs (non-blocking for sign-off; blocking for customer launch)
| Item | Status | Note |
|---|---|---|
| AI-generated placeholder photos in `assets/images/` | ⚠️ | replace with real customer photos before any custom-domain deploy (Markedsføringsloven + EU AI Act + brand authenticity) |
| Not yet deployed to Vercel (no live custom domains) | ⚠️ | two Vercel projects, Root Directory + Ignored Build Step `git diff HEAD^ HEAD --quiet ./`; URLs hardcoded for `demo-renhold-{tier}.ibithun.com` |
| Per-page OG variants og-about / og-contact not generated | ⏳ | only og-home + og-services exist; om-oss reuses og-home, kontakt reuses og-services (asset-availability limit, not a build defect) |
| `.claude/_prompt/Nano-Banana-prompt.md` predates the rename | ⏳ | carries the older "Rent & Klart" brand + sky-blue palette; the approved photos in `_public/` were used as-is per the kickoff brief (no regeneration). Update the prompt brand/palette if photos are ever re-rolled. |
| Hero is a contained 4:3 media card (not full-bleed bg) | 🏗 | `object-position: 68% 45%` favours the right-anchored cleaner; re-tune if hero re-cropped |
| Fictional brand identity (Ingrid Solheim, Innherredsveien 24, 73 00 00 00, est. 2020) | 🏗 | replaced by real customer data at fork time; classic EN strings dormant for the bilingual upsell |
| Bedroom before/after excluded (only an "after" exists) | 🚫 | intentional per brief §4 — no faked pair; before/after uses kitchen + bathroom only |

---

## 6. Drift from `bakeri-demo` (architectural reference)
| Deviation | Reasoning |
|---|---|
| Booking deposit uses **Stripe demo checkout** (not the dormant Vipps modal) | renhold is a booking-led niche → deposit is a payment surface → keeps the Stripe line (family rule #1, 2026-05-30). Vipps modal not shipped. |
| 3-font system Fraunces + Mulish + **Marcellus** (vs bakeri Fraunces + DM Sans) | per RENHOLD-DESIGN-SYSTEM.md; Marcellus wordmark is the distinctive non-denylist face |
| Atmospheric scroll-crossfade backdrop (premium) | signature feature from the design system (snekker `initFixedBackdrop` pattern); not in bakeri |
| Before/after showcase + price-by-area calculator | business-specific signature features (cleaning trust-proof + the kickoff's premium calculator) |
| `.active` nav class set in JS by pathname | same as bakeri pattern; class `.active` (family-locked, not `.is-active`) |
| Otherwise followed bakeri's wiring (i18n object + HTML-fallback guard, modal open/close triad, mobile-menu, OG block, analytics, focal-point discipline) | wiring copied; aesthetic invented per design system |

---

## 7. Pending instructions inbox
Empty — only `Nano-Banana-prompt.md` (permanent) in `.claude/_prompt/`. No architect dispatch files to apply.

---

## 8. Bithun sign-off
> Read sections 1–7, spot-check 2–3 things in the browser, then check the box and date.

- [ ] Reviewed and approved `<YYYY-MM-DD HH:MM norsk sommertid>` by Bithun.

After sign-off, skill creation is a separate session (root **skill-builder** Playbook 2).

---

## Local dev URLs (set by developer agent)
- Canonical (README): http://localhost:5500/ (classic) + http://localhost:5501/ (premium)
- This build's runtime: http://localhost:5500/ (classic, PID 76332) + http://localhost:5501/ (premium, PID 76338) — content-identity verified (`<title>` = "Vask & Ro — Miljømerket renhold i Trondheim" on both)

## Notes / changelog
- 2026-06-13 15:35 norsk sommertid — pipeline DEVELOPER fresh build: scaffold + both tiers + configs, 3 atomic commits on `main`, self-audit all green, READINESS created. 0 ❌. ⚠️ launch-blockers: AI photos + not-yet-deployed. on-stop hook chains REVIEWER next.
- 2026-06-13 17:25 norsk sommertid — S57 DEVELOPER post-build fix pass (Bithun smoke-walk; 3 atomic commits, both tiers, local `main`, no push). (1) **Footer gutter** — restored left/right `clamp(1.25rem,3vw,2.5rem)` on `.footer-top`/`.footer-bottom` (they already inherit `.container` cap+centre; only the shorthand's 0-horizontal was overriding) → footer content at 20px @375/360 (was flush at 0). (2) **Hero no-jump** — `.hero h1 { min-height:3.4em }` reserves the tallest state + clamp floor `2.4rem→2.15rem` so the typewriter cycle never reflows the hero and the longest phrase ("med miljømerkede midler") stays ≤2 rotating lines down to 360px → h1 height constant + maxRotLines=2 @375/360, both tiers. (3) **Orphan photos wired** — `service-hytte-flyttevask.jpg` → index `#tjenester` services-preview `data-bg` (eco-products-flatlay still used as the eco `<img>` + on kontakt); 7 equipment shots → new "Vårt utstyr" showcase on om-oss (cream cards, premium card-float + `.is-tapped` twin, classic static) → 7/7 imgs load, 0 broken. Only `before-after-bedroom-after.jpg` left unused (intentional — no "before" pair). All headless-verified (Playwright chromium-1223, temp profile — MCP browser was held by a parallel session). Reviewer re-spawn by on-stop hook; nothing pushed.
