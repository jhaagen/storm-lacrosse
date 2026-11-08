# Fort Wayne Storm Lacrosse

Source for [fwblacrosse.org](https://fwblacrosse.org): Create React App, react-router 6, SCSS, with every route prerendered to static HTML.

## Updating season info

Fees, dates, form links, birthdate ranges, practice details, area teams, vendors and contact links all live in [`src/data/season.js`](src/data/season.js). Change them there and every page picks it up.

The Home photo strip stays hidden until `photos` in that file has three entries, each with `src` and `alt`.

## Develop

```sh
npm install
npm start        # dev server at http://localhost:3000
npm test         # route smoke tests + jest-axe accessibility checks
npm run build    # production build, then prerender
```

`npm run build` runs `react-scripts build` and then [`scripts/prerender.js`](scripts/prerender.js), which renders each route to `build/<route>/index.html` (plus `build/404.html`) with its own title, description, canonical and Open Graph tags. Every component must render under `renderToString`: keep `window` and `document` access inside `useEffect` or event handlers.

To preview the production build locally: `npx serve build`.

## Deploy

Pushing to `main` deploys to production through Azure Static Web Apps (`.github/workflows/`). Pull requests into `main` get a staging preview URL. Routing is folder-per-page, so `public/staticwebapp.config.json` only needs the 404 override.

## Design and accessibility

The design follows [`docs/redesign-plan.md`](docs/redesign-plan.md). Tokens are in `src/styles/_tokens.scss`; use them rather than raw colors. Black text only on green: white on `#00DA00` fails contrast.

The site targets WCAG 2.2 AA: skip link, landmarks, one h1 per page, a real menu button, visible focus rings on every background, 44px targets, and no horizontal scroll at 320px. `npm test` runs axe against every route.

The registration and medical forms are third-party Google Forms and are outside this site's accessibility audit.
