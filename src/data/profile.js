import _821e56th from "../assets/real-estate/821e56th.jpg";
import _3132712thpls from "../assets/real-estate/3132712thpls.jpg";
import _710111thsts from "../assets/real-estate/710111thsts.jpg";
import _3907wildwoodvalleyct from "../assets/real-estate/3907wildwoodvalleyct.jpg";
import _741625thstw from "../assets/real-estate/741625thstw.jpg";
import valledelmaiz from "../assets/real-estate/valledelmaiz.jpg";
import homeplaceholder from "../assets/real-estate/homeplaceholder.jpg";

// Everything personal about the site lives here — edit freely.
const profile = {
  name: "Adam Birgenheier",
  shortName: "Adam",
  role: "Web analytics engineer & builder",
  location: "Tacoma, WA",
  headline: "I make data trustworthy — then build products on top of it.",
  tagline:
    "Analytics engineer with 5+ years implementing tracking on 100+ websites. Founder of Precision Web Analytics. Lately I build AI-powered products for marketers and investors — and keep an honest ranking of every city and wine I come across.",
  links: {
    github: "https://github.com/Adambear1",
    linkedin: "https://www.linkedin.com/in/ajbirgenheier",
    email: "contact@precisionwebanalytics.com",
  },
  bio: [
    "I'm a web analytics engineer. For more than five years I've implemented, audited and maintained tracking for over a hundred websites — Google Tag Manager, GA4, server-side tagging, ad conversion APIs, consent management and attribution. Through Precision Web Analytics I help businesses get to data they can actually trust.",
    "That work keeps pointing me at problems worth building for. So I build: tools that check what tracking really fires, products that measure how AI models talk about a brand, schema tooling that deploys its own fixes, and a handful of apps for my own investing, learning and travel.",
    "Outside of code I invest in real estate in Washington, Texas and Mexico, and spend as much time as I can on the road across Latin America.",
  ],
  skills: [
    {
      group: "Analytics engineering",
      items: ["Google Tag Manager", "Server-side GTM", "GA4", "Conversion APIs", "Consent (CMP)", "Attribution", "BigQuery", "Looker Studio"],
    },
    {
      group: "Product engineering",
      items: ["React", "Next.js", "React Native / Expo", "TypeScript", "Node.js", "Supabase / Postgres", "Firebase"],
    },
    {
      group: "AI & infrastructure",
      items: ["Claude & multi-LLM APIs", "Playwright / Puppeteer", "Cloudflare Workers", "Netlify", "Fly.io", "Stripe"],
    },
  ],
  maxims: [
    {
      title: "Diversify macro, focus micro.",
      body: "On a large scale I spread out — several jobs, investments and side projects at once. But each individual piece gets my full attention. Doing a lot of things sounds cool; doing them badly catches up with you fast.",
    },
    {
      title: "Invest in yourself first.",
      body: "The best returns I've had came from putting money and time into myself — learning new crafts, starting businesses, buying property I can actually control — before anything I can't.",
    },
    {
      title: "Always be learning.",
      body: "I learn best through action. Travelling, exploring and meeting new people keeps that loop going even when I'm not sitting down with a textbook.",
    },
  ],
  now: [
    "Building AI Visibility Monitor",
    "Running Precision Web Analytics",
    "Planning the next trip — Porto is high on the list",
  ],
};

export const ventures = [
  {
    name: "Precision Web Analytics",
    role: "Founder & owner",
    year: "Current",
    summary:
      "Analytics consultancy: Tag Manager and GA4 implementations, ad conversion tracking, consent integration, attribution modelling and data governance.",
    href: "https://www.precisionwebanalytics.com",
    cta: "precisionwebanalytics.com",
  },
  {
    name: "The Bromad",
    role: "Founder",
    year: "2022–24",
    summary: "My earlier travel and international-investing brand — and the first version of this site.",
  },
];

export const realEstate = [
  { kind: "Single-family", location: "Tacoma, WA", year: "2021", image: _821e56th },
  { kind: "Multifamily", location: "Federal Way, WA", year: "2021", image: _3132712thpls },
  { kind: "Single-family", location: "Tacoma, WA", year: "2021", image: _710111thsts },
  { kind: "Single-family", location: "Houston, TX", year: "2022", image: _3907wildwoodvalleyct },
  { kind: "Single-family", location: "University Place, WA", year: "2022", image: _741625thstw },
  { kind: "Single-family", location: "San Miguel de Allende, MX", year: "2023", image: valledelmaiz },
  { kind: "Single-family", location: "University Place, WA", year: "Coming soon", image: homeplaceholder },
];

export default profile;
