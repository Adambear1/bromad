export const kinds = [
  { id: "product", label: "Products" },
  { id: "app", label: "Apps" },
  { id: "analytics", label: "Analytics tooling" },
];

/*
  Project shape — only slug, title, kind and summary are required:
  {
    slug: "url-safe-id",                 // used for #/projects/<slug>
    title: "Name",
    kind: "product" | "app" | "analytics",
    year: "2026",
    status: "Live" | "Beta" | "In progress" | "Prototype" | "Archived",
    summary: "One-sentence pitch.",
    highlights: ["What it actually does", ...],   // shown on the detail page
    stack: ["React", ...],
    links: { live: "https://...", code: "https://github.com/..." },
    accent: "#hex",                      // cover colour
    featured: true,                      // big card on the home + projects pages
  }
  Private repos simply have no `code` link.
*/
const projects = [
  {
    slug: "ai-visibility-monitor",
    title: "AI Visibility Monitor",
    kind: "product",
    year: "2026",
    status: "In progress",
    featured: true,
    accent: "#6d4aff",
    summary:
      "Measures how large language models talk about a brand — who they mention, cite and recommend — and scores it against the competition.",
    highlights: [
      "Fans brand and category prompts out to eight LLMs (Claude, GPT, Gemini, Perplexity, Grok, DeepSeek, Mistral, Llama) and scores every answer for mention rate, citation rate, first recommendation, average rank, share of voice and sentiment.",
      "Blends those into a single visibility score and benchmarks each brand against an industry average built from its competitor set.",
      "Scheduled runs, self-contained branded HTML reports for download, share links and email, plus BigQuery export.",
      "Multi-tenant workspaces with owner/admin/editor/viewer roles, enforced entirely by Postgres row-level security.",
      "A compliance module crawls marketing pages with Playwright to flag regulatory-disclosure issues and audit which tracking pixels fire, under three consent states — with PII masked and hashed before storage.",
    ],
    stack: ["React", "Vite", "Supabase", "Netlify Functions", "Playwright", "Fly.io", "Claude API", "BigQuery"],
  },
  {
    slug: "schemalens",
    title: "SchemaLens",
    kind: "product",
    year: "2026",
    status: "Beta",
    featured: true,
    accent: "#0f9d74",
    summary:
      "Scans a page or a whole site for schema.org structured data, has Claude analyse and generate what's missing, then deploys the fix straight into Google Tag Manager or Shopify.",
    highlights: [
      "Renders pages in headless Chrome as Googlebot, so schema injected by Tag Manager is picked up — not just what's in the raw HTML.",
      "Site-wide crawls of up to 100 pages with live progress streamed to the browser.",
      "Claude scores existing markup and generates new JSON-LD across 11 schema types (Organization, Product, FAQPage, Event, Recipe…).",
      "One-click deployment: connects to GTM over OAuth and creates the trigger, tag and container version — or injects into a Shopify theme, with undo.",
      "Stripe subscriptions, scan history, saved URLs with scheduled re-scans and change alerts.",
    ],
    stack: ["Node.js", "Express", "Puppeteer", "Claude API", "SQLite", "Stripe", "GTM API", "Shopify"],
  },
  {
    slug: "proxy-me",
    title: "Proxy.me",
    kind: "product",
    year: "2026",
    status: "Prototype",
    featured: true,
    accent: "#e2553b",
    summary:
      "An ads & analytics proxy that captures every outbound tracking hit a website fires, so you can validate exactly what each platform receives.",
    highlights: [
      "Drop-in JavaScript SDK that recognises 15+ ad and analytics platforms and batches their hits to the API.",
      "Dashboard drills down account → platform → event → individual hit, with full payloads and headers.",
      "Accounts, JWT auth and Stripe subscription tiers with monthly hit quotas.",
    ],
    stack: ["TypeScript", "Express", "PostgreSQL", "React", "Stripe", "Webpack"],
  },
  {
    slug: "garpify",
    title: "GARPify",
    kind: "app",
    year: "2026",
    status: "In use",
    featured: true,
    accent: "#2f7de1",
    summary:
      "Ranks a stock watchlist from Strong Buy to Avoid using Growth-At-a-Reasonable-Price fundamentals plus an AI read of the latest news.",
    highlights: [
      "Pulls P/E (trailing and forward), PEG, EPS growth, debt/equity and market cap for every ticker.",
      "Claude with web search surfaces news tailwinds and headwinds, blended 75/25 with fundamentals into a 0–100 score.",
      "Verdicts factor in where today's P/E sits within the stock's own four-year range.",
      "Every run is stored, so week-over-week trends show which names are improving — refreshed automatically each weekday morning.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Claude API"],
  },
  {
    slug: "financeos",
    title: "FinanceOS",
    kind: "app",
    year: "2026",
    status: "Live",
    featured: true,
    accent: "#16a34a",
    summary:
      "A personal investment dashboard that links brokerage accounts through Plaid and shows holdings and performance in one place.",
    highlights: [
      "Connects brokerages via Plaid Link and pulls holdings and transactions.",
      "Overview, holdings and analytics views with total gain, YTD return, Sharpe ratio and max drawdown.",
      "Installable PWA front end with a separate Express API.",
    ],
    stack: ["React", "Vite", "PWA", "Recharts", "Express", "Plaid"],
    links: { live: "https://finaceos.vercel.app" },
  },
  {
    slug: "journeyer",
    title: "Journeyer",
    kind: "app",
    year: "2025–26",
    status: "In progress",
    featured: true,
    accent: "#d97706",
    summary:
      "A mobile app that logs every place you travel, lets you compare journeys with friends, and keeps a record of the places you've been.",
    highlights: [
      "Daily background location check that records when you've arrived somewhere new.",
      "Friends via search or QR invite, with leaderboards.",
      "Per-place stats, an avatar editor and an interactive 3D globe of everywhere you've been.",
    ],
    stack: ["React Native", "Expo", "Firebase", "Cloud Functions", "three.js"],
  },
  {
    slug: "datalingo",
    title: "DataLingo",
    kind: "app",
    year: "2026",
    status: "In progress",
    accent: "#9333ea",
    summary:
      "Duolingo-style bite-sized lessons for data engineering and digital analytics, on web, iOS and Android.",
    highlights: [
      "Answers are graded server-side in Postgres — they never reach the client, and only first attempts earn XP.",
      "A 230-question data-engineering track across 11 question formats, plus a digital marketing & analytics track.",
      "Hearts, streaks and a Pro subscription wired up through RevenueCat.",
    ],
    stack: ["Expo", "React Native", "TypeScript", "Supabase", "RevenueCat"],
  },
  {
    slug: "touchpoints",
    title: "Touchpoints",
    kind: "app",
    year: "2026",
    status: "Prototype",
    accent: "#db2777",
    summary:
      "A shared canvas for couples and small groups — write a line or sketch something and it lands on the other person's home-screen widget.",
    highlights: [
      "One resolution-independent renderer draws each note identically in the editor, the feed and a 1080×1080 widget image.",
      "Home-screen widgets on iOS and Android from a web app, via per-user tokenised image URLs.",
      "Pairing with expiring single-use codes and QR, groups of up to 12, and live updates over server-sent events.",
    ],
    stack: ["Next.js", "React", "TypeScript", "SQLite", "PWA"],
  },

  // ---------- Smaller builds ----------
  {
    slug: "edge-analytics",
    title: "Edge Analytics",
    kind: "analytics",
    status: "In progress",
    summary:
      "Loads a site's full analytics stack serverless at the edge via Cloudflare, so tracking stays fast and first-party.",
    stack: ["Cloudflare Workers"],
  },
  {
    slug: "gtm-templates",
    title: "GTM templates & tooling",
    kind: "analytics",
    year: "2021–23",
    summary:
      "Custom Google Tag Manager templates and utilities: a server-side client that hashes user data for conversion APIs, an ecommerce pixel tag, a GA4 engagement-score variable, and a dataLayer recorder for debugging.",
    stack: ["Google Tag Manager", "Server-side GTM", "GA4", "JavaScript"],
    links: { code: "https://github.com/Adambear1/gtm-server-side-templates" },
  },
  {
    slug: "shopify-analytics",
    title: "Shopify Analytics App",
    kind: "analytics",
    summary: "A Shopify theme extension that sets up enhanced ecommerce tracking out of the box.",
    stack: ["Shopify", "GA4"],
  },
  {
    slug: "mls-recorder",
    title: "MLS Listing Recorder",
    kind: "analytics",
    year: "2024",
    summary:
      "A scheduled scraper that records San Miguel de Allende real-estate listings and the daily USD→MXN rate into Google Sheets for market tracking.",
    stack: ["Node.js", "cheerio", "node-cron", "Google Sheets API"],
  },
  {
    slug: "learn-a-language",
    title: "Learn a Language",
    kind: "app",
    year: "2024–25",
    summary: "Save vocabulary with translations, then drill it with flashcards, a memory game and quizzes.",
    stack: ["React", "Firebase"],
  },
  {
    slug: "mlb-guesser",
    title: "MLB Guessing Game",
    kind: "app",
    year: "2023",
    summary: "A timed browser game about guessing MLB players, with high scores and player data from 2004–2022.",
    stack: ["React", "React Router"],
  },
  {
    slug: "cribbage-helper",
    title: "Cribbage AI Helper",
    kind: "app",
    summary: "Mobile app that suggests the best play for a cribbage hand.",
  },
  {
    slug: "procurement-calculators",
    title: "Procurement calculators",
    kind: "app",
    summary: "Mobile calculators for running the numbers on a property or a small business before making an offer.",
  },
];

export default projects;

export const githubProfile = "https://github.com/Adambear1";

// Early work, linked as an archive.
export const archive = [
  { title: "Offline budget tracker (PWA)", year: "2020", href: "https://github.com/Adambear1/Progressive_Budget" },
  { title: "Offline-first MERN collection app", year: "2021", href: "https://github.com/Adambear1/modalrouter" },
  { title: "Employee directory", year: "2020", href: "https://github.com/Adambear1/Employee-Directory" },
  { title: "Movie seat picker", year: "2020", href: "https://github.com/Adambear1/Movie-Seat-Picker.io" },
];
