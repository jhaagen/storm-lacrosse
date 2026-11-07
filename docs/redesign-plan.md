# Storm Lacrosse Site Redesign: Implementation Plan

Nov 6, 2026 · @Jared

## Goal and scope

Rebuild the UI of fwblacrosse.org in the repo [jhaagen/storm-lacrosse](https://github.com/jhaagen/storm-lacrosse) to match the Storm redesign, meet WCAG 2.2 AA, and keep routes, SEO metadata, prerendering and the Azure deploy working exactly as they do today.

- **Visual reference:** the [Storm Lacrosse Website Redesign canvas](https://claude.ai/artifact/MStuq3n76zAhVM9wKhvTi9), with six artboards: Home, Registration, Schedule, Equipment, Area Teams, Contact. This plan carries every token, copy line and rule Claude Code needs, so it does not need canvas access.
- **In scope:** global styles and fonts, header and mobile menu, footer, all six pages, the 404 page, image handling, accessibility.
- **Out of scope:** new pages, a CMS, hosting changes, the Google Forms themselves, copy beyond what this plan lists.
- **How to hand this to Claude Code:** export this doc as Markdown to `docs/redesign-plan.md` in the repo, then start a session with: "Read docs/redesign-plan.md. Implement Phase 1 on a new branch and open a PR. Stop after Phase 1."

## Ground rules for Claude Code

Work on a branch, ship one PR per phase, and never change routing, SEO or the build pipeline as a side effect.

- **Branching:** branch `redesign/storm-edge` off `main`, with one PR per phase from Work sequence. Never push to `main`. Every push to `main` deploys to production through `.github/workflows/azure-static-web-apps-witty-rock-02874ff0f.yml`. A PR into `main` gets an Azure staging preview URL, so use that for review.
- **Do not change:** route paths in `src/App.js`, `scripts/prerender.js` (its ROUTES list and folder-per-page output), `public/staticwebapp.config.json`, `public/sitemap.xml`, `public/robots.txt`. Leave `src/components/seo.js` alone except for the Contact description change listed in Decisions.
- **Prerender safety:** every component must render under `renderToString` with `StaticRouter`. Never touch `window` or `document` during render; browser-only code goes in `useEffect`. The new menu must keep its state in React, never in `document.getElementById`.
- **Dependencies:** no new UI frameworks or CSS-in-JS. Styles stay in SCSS. Keep `styled-components` installed, because `prerender.js` imports `ServerStyleSheet`. The only new dependencies allowed are dev-only testing tools: `jest-axe`, `@axe-core/cli`, `serve`.
- **Copy:** use the exact copy in Page-by-page build. Do not invent stats, claims or names. Keep facts (fees, dates, birthdate ranges, links) in one data file so no page can drift from another.
- **Gate before every PR:** `npm run build` passes and prerenders all 7 routes, `npm test` passes, and the axe checks in Testing and acceptance criteria report zero violations.

## Current codebase

The site is Create React App with react-router 6, SCSS, one styled-components file and a custom prerender step. Every page renders its own Banner and Navbar today, so the first structural change is a shared layout. I read the repo at commit `6fea4f2` (Nov 5, 2026).

| File | Today | Change |
| --- | --- | --- |
| `public/index.html` | Loads Chakra Petch and Farsan from Google Fonts | Swap to Anton, Barlow Condensed (600, 700, 800) and Barlow (400, 500, 600), with `display=swap`. Keep the preconnects. |
| `src/App.js` | Routes plus an inline footer with an h2 "Contact Us" | Wrap `<Routes>` in a new `Layout`. Move the footer into `components/Footer.js`. |
| `src/components/banner.js`, `banner.scss` | Large logo banner on every page (uses `banner-background.jpg`) | Delete in Phase 6. The logo moves into the header. |
| `src/components/navbar.js`, `NavbarElements.js`, `navbar.scss` | styled-components nav. The hamburger is an icon with an onClick, not a button, and toggles `display` through `document.getElementById`. | Replace with `components/SiteHeader.js` and `SiteHeader.scss`. Delete the old files in Phase 6. |
| `src/components/cta.js`, `cta.scss` | Registration blurb with fee copy | Replace with `RegisterBlock`, which reads fees from the data file. |
| `src/pages/*.js` (7 files incl. `pagenotfound.js`) | Each renders `<header><Banner/></header><Navbar/>` and its content | Remove Banner and Navbar. Each page returns only its content sections. |
| `src/App.scss` | Global Chakra Petch rules, `.button`, footer, `.container` | Rewrite as `styles/_tokens.scss`, `styles/_base.scss` and component partials. |
| `src/components/seo.js` | Helmet title, description, OG and JSON-LD per route | Keep as is, except the new Contact description in Decisions. |
| `scripts/prerender.js` | Renders 7 routes to folder-per-page HTML | No change. Verify its output each phase. |
| `src/App.test.js` | Default CRA test looking for "learn react". Fails today: App renders without a Router and that text doesn't exist. | Replace with route smoke tests and axe tests. |
| `package.json` | `@fortawesome/*` installed but unused. `react-icons` used only for `FaBars`. | Remove the unused Font Awesome packages in Phase 6 after a grep confirms no imports. |

## Design tokens and global styles

Define these once in `styles/_tokens.scss` as CSS custom properties and use nothing else. The green is #00DA00, the same value used on the Storm flyers.

| Token | Value | Use |
| --- | --- | --- |
| `--storm-bg` | #0a0a0a | Page background |
| `--storm-ink` | #000000 | Footer, buttons on green, text on green |
| `--storm-surface` | #141414 | Cards on dark sections |
| `--storm-rule` | #262626 | Header bottom border, footer divider |
| `--storm-border` | #2e2e2e | Decorative card borders (never the only boundary of a control) |
| `--storm-green` | #00DA00 | Accent, CTA fills, green text on dark |
| `--storm-green-hover` | #5CFF5C | Link hover on dark |
| `--storm-paper` | #F2F2EE | Light sections |
| `--text` / `--text-body` / `--text-muted` | #ffffff / #d4d4d4 / #a3a3a3 | Text on dark |
| `--paper-text` / `--paper-body` / `--paper-eyebrow` | #0a0a0a / #2b2b2b / #3d3d3d | Text on paper |

**Color rules.** On green, use black text only: white on green is 1.90:1 and fails. Never put green text on paper. Contrast for every pair in use is in Accessibility requirements.

**Type.**

- Display: Anton 400, uppercase. Home h1 `clamp(52px, 9.5vw, 150px)`, inner-page h1 `clamp(46px, 9vw, 140px)`, line-height 0.88. Section h2 `clamp(48px, 6vw, 88px)`, line-height 0.92.
- Labels, nav, buttons, eyebrows: Barlow Condensed 700 or 800, uppercase, letter-spacing 0.08em (buttons, nav) to 0.2em (eyebrows).
- Body: Barlow 400 or 500, 18px, line-height 1.55. Lead paragraphs 20px.
- The h1 minimums are set so the longest word ("Registration") fits a 320px viewport. Don't raise them.

**Layout.** Content max-width 1280px, centered. Side padding `clamp(20px, 4vw, 48px)`. Section padding `clamp(72px, 9vw, 128px)` vertical. Layouts are flex with `flex-wrap: wrap` and flex-basis values (280 to 520px), so columns stack on phones without breakpoints.

**Shapes.**

- Slanted button: `clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)` (12px on the hero CTA). Put it on an inner `<span>`, never on the `<a>` or `<button>`, because clip-path also clips the focus outline.
- Angled sections: paper and green sections use a 48 to 56px clip-path cut on the top or bottom edge. Add at least that much padding so content is never clipped.
- Bolt icon: `<svg viewBox="0 0 24 30" aria-hidden="true"><path d="M15 0L2 17h8l-2 13L22 11h-8l1-11z"/></svg>`
- Giant outline word behind each page hero: Anton, `color: transparent`, `-webkit-text-stroke: 2px rgba(0, 218, 0, 0.22)`, absolutely positioned, `aria-hidden="true"`, `pointer-events: none`.

**Focus and skip link (global).**

```css
a:focus-visible, button:focus-visible { outline: 3px solid #ffffff; outline-offset: 3px; box-shadow: 0 0 0 6px #000000; }
.skip-link { position: absolute; left: 16px; top: -80px; z-index: 10; padding: 12px 20px; background: var(--storm-green); color: #000; font-weight: 700; text-decoration: none; }
.skip-link:focus { top: 16px; }
```

The white ring plus black halo stays visible on dark, paper and green backgrounds. The design has no animation. If any is added later, wrap it in `@media (prefers-reduced-motion: no-preference)`.

## Shared components

One `Layout` owns the skip link, header, `<main>` and footer, so pages only render their own sections. Facts live in one data file.

**Component tree**

- `App` → `SEO` + `Layout` → `Routes`
  - `Layout`: skip link, `SiteHeader`, `<main id="main" tabIndex="-1">`, `Footer`
  - Pages: built from `PageHero`, `Section`, `Eyebrow`, `ButtonLink`, `BoltIcon`, `RegisterBlock`

**`src/data/season.js`** is the single source for: fees ($375 through Dec 31, 2026 and $400 from Jan 1, 2027), the USA Lacrosse fee ($35), what the fee covers, the three registration links, the birthdate ranges, both practice schedules with map links, the area team names and URLs, email and Facebook URL. (The club has no Instagram account; it was dropped before launch.)

**`Layout`**

- The first focusable element is `<a href="#main" class="skip-link">Skip to main content</a>`.
- On a route change (not the first load), scroll to top and move focus to `<main>`, using `useLocation` plus `useEffect`. This tells keyboard and screen reader users the page changed.

**`SiteHeader`**

- Logo link to `/`: `storm-logo.png` at 72 × 56 with `alt=""`, plus visible text "STORM" and "Fort Wayne Boys Lacrosse". The text names the link, so the image is decorative.
- `<nav aria-label="Main">` with react-router `NavLink`s: Home, Registration, Schedule, Equipment, Area Teams, Contact. `NavLink` sets `aria-current="page"`. Style the current page green with a 3px bottom border, so color is never the only cue.
- "Register" is an external link to the registration form, with the slant on an inner span.
- Below 900px: a real `<button type="button" aria-expanded aria-controls="primary-nav">Menu</button>`. Open state lives in `useState`. Escape closes the menu and returns focus to the button, and the menu also closes on route change. No focus trap. Links stay in the DOM, so they are prerendered. Every target is at least 44px tall.

**`Footer`**

- Default: h2 "Questions?", email as a `mailto:` link, the line "Season updates go out through the GameChanger app.", a Facebook button, and the copyright line with `new Date().getFullYear()`.
- `compact` prop for Contact: copyright line only, since the page body already has everything else.

**Primitives**

- `PageHero({ eyebrow, title, lead, outlineWord })`: renders the page's only h1.
- `Section({ tone: 'dark' | 'paper' | 'green', angle })`
- `Eyebrow`: the small green or gray label, e.g. "01 / Who we are".
- `ButtonLink({ to | href, variant: 'primary' | 'outline' | 'onGreen' })`: uses a router `Link` for internal routes and `<a>` for external ones.
- `BoltIcon`: always `aria-hidden`.
- `RegisterBlock`: the green price and steps block, used on Home and Registration.

**External links** open in the same tab, matching the design. Remove the current `target="_blank"` uses in `App.js`, `equipment.js` and `registration.js`. If any link must open a new tab, its visible text must say so.

## Page-by-page build

Each page below lists its sections top to bottom with exact copy. Quoted text is literal. Facts come from `season.js`. Every page has exactly one h1, from `PageHero` (Home builds its own hero).

### Home (`/`)

1. **Hero (dark).** Green slanted tag "Spring 2027 registration is open". h1 "Bring the Storm.", with "Storm." in green. Lead: "Youth boys travel lacrosse for grades 3–8 in Fort Wayne. Brand new to the game or already hooked, players of every experience level are welcome on the Storm." Buttons: "Register now" (primary, registration form) and "See the schedule" (outline, `/schedule/`). Note: "$375 early rate through Dec 31, 2026". Right column: hero image with an angled clip-path, `object-fit: cover`, `object-position: 62% 40%`, alt "Storm player in a white number 45 jersey raising his stick to pass during a spring game". Outline word "STORM" behind it, plus a green bolt overlapping the image corner.
2. **Band (green, rotated -1.6deg).** "Grades 3–8 · 10U · 12U · 14U · No experience needed · Travel team", with bolts between items. It must wrap (`flex-wrap: wrap`): no `white-space: nowrap`, no overflow clipping, no animation.
3. **Who we are (dark).** Eyebrow "01 / Who we are". h2 "Love the game. Build the skills." Paragraph: "The Fort Wayne Storm builds a love for lacrosse and real skills in players from grades 3–8, in a positive, supportive place to learn, grow and have fun. Players make friends, get better every week and get ready for the next level." Three cards, each with an h3 and an outlined number marked `aria-hidden`:
   - "Travel team": "We compete beyond Fort Wayne, with tournaments and league games all spring."
   - "Volunteer coaches": "Storm is run by volunteers who know the game and are invested in every player's success."
   - "Every level": "Seasoned player or first time picking up a stick, there's a place for you here."
4. **The season (paper, angled).** Eyebrow "02 / The season". h2 "January to May." Link "Full schedule and maps" to `/schedule/`. Three columns, each with a big label and an h3:
   - JAN, "Winter training": Sunday mornings, 8:00–10:00 AM. January 10 through the end of March. PSM Empowered.
   - MAR, "Outdoor practice": Tuesdays and Thursdays, 6:00–7:30 PM. Beginning of March through the end of May. Perry Hill Elementary.
   - GAME, "Spring games": "About 10 spring games plus tournaments. The 2027 game schedule is coming soon on GameChanger."
5. **Pick your team (dark).** Eyebrow "03 / Pick your team". h2 "Three teams. One Storm." Paragraph: "Teams are placed by birthdate. Each team is capped so every player gets real playing time." Three cards with big green labels: 10U born 9/1/16–8/31/18. 12U born 9/1/14–8/31/16. 14U born 9/1/12–8/31/14, "Through 8th grade".
6. **RegisterBlock (green, angled).** h2 "Spring 2027 registration". "$375" huge. "Per player if you register by Dec 31, 2026". "$400 starting January 1, 2027. Covers winter training, outdoor practices and about 10 spring games." h3 "Three steps to join", then an `<ol>` of three black link rows: Registration form, Medical release form, "USA Lacrosse membership ($35)", with the USA Lacrosse logo chip (26px tall) before the arrow. The step numbers are `aria-hidden` because the `<ol>` already numbers them. Link "Registration details" to `/registration/`.
7. **Photo strip (dark).** Three angled photos: practice drill, team huddle, goal celebration. Ship this section only once real photos with alt text exist. Never ship placeholders.
8. **What's next (dark).** Eyebrow "04 / What's next". h2 "Ready for high school." Paragraph: "Storm's goal is to make sure our players are ready to compete in high school and beyond." Link "See area teams". `<ul aria-label="Area high school and college programs">` of plain chips (not links): Homestead, Leo, Carroll, Snider, Bishop Dwenger, Concordia Lutheran, Trine University and Indiana Tech (the last two in green).

### Registration (`/registration/`)

1. **PageHero.** Eyebrow "Spring 2027 · 10U · 12U · 14U". h1 "Registration is open." Lead: "Teams are capped so playing time isn't diluted. Lock in your spot and the early rate before December 31." Outline word "2027".
2. **Price and steps (green).** "Through Dec 31, 2026 / $375" and "From Jan 1, 2027 / $400". "Per player. Your fee covers:" followed by a `<ul>`: Winter training, January to March. Outdoor practices, March to May. About 10 spring games. h2 "Complete all three", then an `<ol>` of three link rows with sublabels: "Google Form", "Google Form", "$35, required for every player". The membership row also shows the USA Lacrosse logo on a white chip (white background, 3px radius, logo 32px tall, alt="") between the text and the arrow, so parents recognize the official site. The text span gets min-width: 0 so it wraps on phones.
3. **Birthdate ranges (dark).** Eyebrow "Find your team". h2 "Birthdate ranges". A `<table>` with `<th scope="col">` (Team, Born on or after, Born on or before, Note) and `<th scope="row">` team names, wrapped in `<div role="region" aria-label="Birthdate ranges by team" tabindex="0">` with `overflow-x: auto`.
4. **For parents (paper, angled).** Eyebrow "For parents". h2 "What we count on."
   - h3 "Watch GameChanger": "All club communication goes through the GameChanger app. Check it often and add every email address in your family."
   - h3 "Volunteer at games": "The club relies 100% on volunteers to run. Every family is expected to help out on game days."
   - A dark card with h3 "The sideline code" and an `<ol>`: "Parents watch from the spectator area behind the outer fence." / "No coaching from the sidelines. Let the coaches coach." / "Criticizing athletes, referees or other adults is not tolerated."

### Schedule (`/schedule/`)

1. **PageHero.** Eyebrow "Spring 2027 season". h1 "Where to be. When to be there." Outline word "JAN–MAY".
2. **Two cards.**
   - Winter, dark card: eyebrow "Phase 01 · Indoors", h2 "Winter training".
   - Spring, green card: eyebrow "Phase 02 · Outdoors", h2 "Spring practice".
   - Each card has a `<dl>` with When, Time, Dates and Where. Its map link reads "Map to PSM Empowered" or "Map to Perry Hill Elementary" (unique link text, no "Open map"). Remove the two Google Maps iframes that the current page embeds.
3. **Game day (paper, angled).** Eyebrow "Phase 03 · Game day". h2 "2027 games coming soon." Paragraph: "The spring game schedule will be posted here and on GameChanger. Turn on GameChanger notifications so you don't miss a change." A big "\~10" marked `aria-hidden`, with the label "About 10 spring games, plus tournaments".

### Equipment (`/equipment/`)

1. **PageHero.** Eyebrow "Equipment". h1 "Gear up." Lead: "Here's everything a field player needs, where to buy it and how to keep it from smelling like a locker room." Green callout "New to lacrosse?": "Borrow gear first. We loan equipment to new players so they can try the sport before buying anything."
2. **h2 "The checklist".** A `<ul>` of 8 cards: Helmet ("Must fit properly"), Stick, Gloves, Elbow pads, Chest protector, Cleats, Athletic cup, Mouth guard. Below it, a goalie note: "Goalies: you need specialized gear. Check with the club before you buy."
3. **h2 "Suggested vendors".** Two large link cards: Lacrosse Monkey (lacrossemonkey.com) and Empire Lacrosse (empirelax.com).
4. **Gear care (paper, angled).** h2 "Keep it fresh." Three h3 tips: "Air it out": "Don't leave damp gear zipped in the bag. Take it out and let it air out every day." "Wipe it down": "Clean pads and helmets with a damp cloth and an anti-bacterial spray." "Stuff it": "Push newspaper into wet gloves and stick pockets to soak up moisture."

### Area Teams (`/area-teams/`)

1. **PageHero.** Eyebrow "Area teams". h1 "The next level." Lead: "Fort Wayne has several high school club teams. Storm's goal is to make sure our players are ready to compete in high school and beyond."
2. **h2 "High school".** A `<ul>` of 6 link cards with the current site's URLs: Homestead, Leo, Carroll, Snider, Bishop Dwenger, Concordia Lutheran.
3. **h2 "College".** A `<ul>` of 2 green link cards: Trine University, Indiana Tech.

### Contact (`/contact/`)

1. **PageHero.** Eyebrow "Contact". h1 "Got questions? Hit us up." Lead: "Have questions about Fort Wayne Storm Lacrosse? We'd love to hear from you."
2. **Links.** A large green email link card: "Email us" plus the address, using `overflow-wrap: anywhere`. One outline card for Facebook.
3. **Note.** "Already registered? Team updates, schedule changes and game info go out through the GameChanger app."
4. `Footer compact`.

### 404

`PageHero` with h1 "Page not found", the current lead text and a primary button "Back to home". Keep the `noindex` from `seo.js`. Remove the duplicate `<SEO />` inside `pagenotfound.js`, since `App` already renders it.

## Accessibility requirements

The design meets WCAG 2.2 AA as of today's revision. Every text color pair passes at 6.68:1 or better, and the structural failures found in the audit are fixed on the canvas. The build has to keep all of that and add the behaviors only code can provide.

**Contrast (1.4.3), measured with the WCAG relative-luminance formula**

| Foreground on background | Where | Ratio | Result |
| --- | --- | --- | --- |
| #ffffff on #0a0a0a | Headings on dark | 19.80:1 | Pass |
| #d4d4d4 on #0a0a0a | Body on dark | 13.36:1 | Pass |
| #d4d4d4 on #141414 | Body in cards | 12.43:1 | Pass |
| #a3a3a3 on #0a0a0a | Muted text | 7.85:1 | Pass |
| #a3a3a3 on #141414 | Muted in cards | 7.30:1 | Pass |
| #00DA00 on #0a0a0a | Green text, eyebrows | 10.40:1 | Pass |
| #00DA00 on #000000 | Step numbers on black rows | 11.03:1 | Pass |
| #000000 on #00DA00 | Text on green | 11.03:1 | Pass |
| #2b2b2b on #F2F2EE | Body on paper | 12.62:1 | Pass |
| #3d3d3d on #F2F2EE | Eyebrow on paper | 9.68:1 | Pass |
| #ffffff on #00DA00 | Not allowed anywhere | 1.90:1 | Fail |

**Audit findings fixed in the design**

| Issue | WCAG | Fix |
| --- | --- | --- |
| No skip link on pages with 7 header links | 2.4.1 | Skip link to `#main` |
| No `<main>` landmark | 1.3.1 | Content wrapped in `<main id="main">` |
| Focus outline clipped on slanted buttons | 2.4.7 | Slant moved to an inner span, plus the two-tone global focus ring |
| Green ticker clipped text at narrow widths | 1.4.10 | Band wraps, no overflow clipping |
| h1 too wide for a 320px viewport | 1.4.10 | Lower clamp minimums |
| Lists, steps, schedule details built from divs | 1.3.1 | `<ul>`, `<ol>`, `<dl>` |
| Missing h2 in register block, footer heading as `<p>` | 1.3.1 | Real h2 and h3 elements, no skipped levels |
| Two links both read "Open map" | 2.4.4 | "Map to PSM Empowered", "Map to Perry Hill Elementary" |
| Scrollable table not keyboard-reachable | 2.1.1 | Region with `tabindex="0"` and a label |
| Decorative numbers and "\~10" read aloud | 1.1.1 | `aria-hidden` on the decorative glyphs |

**Code-level requirements**

- [ ] `lang="en"` and a unique `<title>` per route (already in `seo.js`, keep it)
- [ ] Skip link is the first focusable element and visible on focus
- [ ] Focus moves to `<main>` on route change, not on first load
- [ ] Menu is a real `<button>` with `aria-expanded` and `aria-controls`, closes on Escape and returns focus
- [ ] `NavLink` `aria-current="page"` plus the underline on the current page
- [ ] Landmarks: one banner (`header`), one navigation labelled "Main", one `main`, one contentinfo (`footer`)
- [ ] Exactly one h1 per page, no skipped heading levels
- [ ] Every content image has alt text. The decorative logo next to text uses `alt=""`. Every SVG is `aria-hidden`.
- [ ] No clip-path, `overflow: hidden` or negative z-index on any focusable element or its focus ring
- [ ] Targets are at least 44 × 44px (2.5.8 needs 24px; the design uses 44)
- [ ] At 320px width and 200% zoom, no horizontal scroll except inside the table region
- [ ] Text spacing override (1.4.12) causes no clipping: no fixed heights on text containers
- [ ] Google Forms are third-party and outside this audit. Note that in the README.

## Assets and content

The logo is ready to use. The hero photo is too small for the new layout, and the photo strip needs three photos that don't exist in the repo yet.

| Asset | Status | Action |
| --- | --- | --- |
| `public/assets/storm-logo.png` | 400 × 310, transparent background, black outline reads well on dark | Use it in the header at 72 × 56. An SVG version would be sharper if one exists. |
| `public/assets/storm-game.jpg` | 600 × 400. The hero displays it up to about 640 × 580 CSS px, so it is upscaled and soft on retina screens. | Interim: use it as is. Final: a 1600px-wide original, served with `srcset` at 800w and 1600w, under 250 KB, with `width`/`height` set to prevent layout shift. |
| Photo strip (3 photos) | Not in repo | Practice drill, team huddle, goal celebration, 1200px wide, each with written alt text. The section stays hidden until these exist. |
| `public/assets/banner-background.jpg` | Used only by `banner.scss` | Delete with the Banner component in Phase 6. |
| `public/assets/usa-lacrosse.png` | Shown on the current Registration page | Keep it. Trim the transparent padding (388 × 161 after trimming) and show it on a white chip in the membership step. The navy wordmark is invisible on black, so the chip is required. |

**Content changes compared with the live site**

- New headlines: "Bring the Storm.", "Love the game. Build the skills.", "Three teams. One Storm.", "Gear up.", "The next level.", "Got questions? Hit us up." and others listed in Page-by-page build.
- "No experience needed" appears on Home (it is on the call-out flyer and matches the site's "all experience levels" line).
- The Equipment heading typo "maintiain" goes away with the new copy.
- Facebook is added to every footer. (No Instagram: the club has no account.)
- Long home-page paragraphs are condensed into the Who we are section and its three cards. Nothing factual is dropped.

## Work sequence

Six phases, one PR each, in order. Each PR must leave the site deployable, so old page content can sit inside the new shell until its page phase lands.

1. **Foundation**
   - [ ] Swap Google Fonts in `public/index.html`
   - [ ] Add `styles/_tokens.scss` and `styles/_base.scss` (reset, body, links, focus ring, skip link). Strip the Chakra Petch rules from `App.scss`.
   - [ ] Build `Layout`, `SiteHeader` (with menu button) and `Footer`. Wire `Layout` into `App.js`.
   - [ ] Remove `Banner` and `Navbar` from all 7 page files
   - [ ] Replace `App.test.js` with a test per route that renders inside `MemoryRouter`
   - [ ] Add `jest-axe` and assert no violations on each route
2. **Primitives and data**
   - [ ] `src/data/season.js` with every fact listed under Shared components
   - [ ] `PageHero`, `Section`, `Eyebrow`, `ButtonLink`, `BoltIcon`, `RegisterBlock`
3. **Home**
   - [ ] Sections 1 to 6 and 8. Section 7 (photo strip) stays behind a `photos.length === 3` check.
4. **Registration and Schedule**
   - [ ] Both pages per spec. Remove both Maps iframes.
5. **Equipment, Area Teams, Contact, 404**
   - [ ] All four pages per spec, with `Footer compact` on Contact
6. **Cleanup and verification**
   - [ ] Delete `banner.*`, `navbar.*`, `NavbarElements.js`, `cta.*` and `banner-background.jpg`
   - [ ] Remove the `@fortawesome/*` packages if a grep finds no imports
   - [ ] Run the full checklist in Testing and acceptance criteria and paste the results into the PR description
   - [ ] Replace the CRA boilerplate `README.md` with build, test, deploy and accessibility notes

## Testing and acceptance criteria

A phase is done when every automated check passes and the manual checks for the pages it touched pass. Automated checks catch roughly a third of accessibility issues, so the keyboard and screen reader passes are not optional.

**Automated (Claude Code runs these)**

- [ ] `npm run build` exits 0, and `build/` contains `index.html`, `registration/index.html`, `schedule/index.html`, `equipment/index.html`, `area-teams/index.html`, `contact/index.html` and `404.html`
- [ ] Each prerendered file contains its own `<title>` and its h1 text in the HTML (not only after JS runs)
- [ ] `npm test` passes: route smoke tests plus `jest-axe` with zero violations
- [ ] `npx serve -s build` then `npx @axe-core/cli` against all 7 URLs: zero violations at WCAG 2.2 AA tags
- [ ] Every URL in `season.js` returns 200 or a redirect (forms.gle, maps.app.goo.gl, team sites, vendors)

**Manual (Jared, on the Azure staging preview)**

- [ ] Keyboard only, from the address bar: the first Tab shows the skip link, and Enter lands in main content
- [ ] Every link and the menu button are reachable, in visual order, with the focus ring visible on dark, paper and green sections
- [ ] Phone width: the menu opens and closes with Enter and Space, Escape closes it and returns focus, and it closes after navigating
- [ ] VoiceOver (Safari) or NVDA (Firefox): the landmarks list shows banner, Main navigation, main and contentinfo. The headings list starts with one h1. Changing pages lands focus on the new content.
- [ ] 320px width and 200% browser zoom: no sideways scrolling except the birthdate table
- [ ] Side-by-side with the canvas at 1440px and 390px: layout, type and colors match
- [ ] Lighthouse accessibility score of 100 on every route, and the performance score no lower than today's production site

## Decisions

All six open questions were answered on Nov 6, 2026. Nothing blocks any phase.

| Question | Decision | What the build does |
| --- | --- | --- |
| Photos | Jared adds photos after the redesign launches | Launch with `storm-game.jpg` in the hero and the photo strip hidden. Adding the photos later is a follow-up PR. |
| Maps embeds | Drop them | Remove both Google Maps iframes from Schedule and keep only the map link buttons. |
| Location name | Keep the site's current wording | "PSM Empowered" and "Perry Hill Elementary", no street addresses. |
| Contact staff | Don't list staff for now | Change the Contact description in `seo.js` to: "Contact the Fort Wayne Storm youth boys lacrosse program by email, or follow the team on Facebook." |
| USA Lacrosse logo | Keep it, so parents know the membership link is the official site | Show the logo on a white chip in the membership step on Home and Registration. |
| Headlines | Approved | Use the copy in Page-by-page build as written. |
