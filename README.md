# Adam Birgenheier — personal site

Portfolio + the personal bits: a travel map with city reviews and a running wine log.
Built with React + Vite, deployed to GitHub Pages.

## Editing content

All content lives in `src/data/` — no component changes needed:

| File | What's in it |
| --- | --- |
| `profile.js` | Headline, bio, skills, maxims, "Now", contact links, ventures, real estate |
| `projects.js` | Projects. `featured: true` puts one on the home page; entries with `highlights` get a detail page at `#/projects/<slug>` |
| `travel.js` | Places visited (with `[lng, lat]` coords for the map), ratings, reviews, bucket list |
| `wine.js` | Wine log, ranked by `score` (out of 10). Remove `placeholder: true` once an entry is real |

Empty optional fields are hidden in the UI. Photos go in `src/assets/` and are imported at the top
of the data file. Project covers are generated from each project's `accent` colour.

## Running

```bash
npm install
npm run dev        # dev server
npm run build      # production build → dist/
npm run deploy     # build + publish to GitHub Pages
```

Routes are hash-based (`#/projects`, `#/projects/schemalens`, `#/travel`, `#/wine`, `#/about`),
so every page is linkable on GitHub Pages without server rewrites.
