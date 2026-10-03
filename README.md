# Adam Birgenheier — personal site

Portfolio plus the personal bits: ranked cities, a running wine log, and food & drink rankings.

## Editing content

All content lives in `src/data/` — no component changes needed:

| File | What's in it |
| --- | --- |
| `profile.js` | Name, tagline, bio, maxims, "Now" list, contact links |
| `projects.js` | Projects (software, client work, ventures, real estate). `featured: true` puts one on the home page |
| `travel.js` | Ranked cities (array order **is** the ranking), visited-but-unranked places, bucket list |
| `wine.js` | Wine log — ranked by `score` (out of 10). Remove `placeholder: true` once an entry is real |
| `eats.js` | Food & drinks (array order is the ranking) |

Empty optional fields are hidden in the UI, so it's fine to leave things blank.
Images go in `src/utils/images/` and are imported at the top of the data file.

## Running

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production build
npm run deploy     # build + publish to GitHub Pages
```

Pages use hash routes (`#/projects`, `#/travel`, `#/wine`, `#/eats`, `#/about`) so every
page is linkable on GitHub Pages without server rewrites.
