// Generated cover art for a project: an abstract UI motif in the project's accent colour,
// seeded from its slug so every project looks distinct but stable.

function seeded(slug) {
  let h = 2166136261;
  for (const c of slug) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => {
    h = Math.imul(h ^ (h >>> 15), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function Dashboard({ rand }) {
  const bars = Array.from({ length: 9 }, () => 20 + rand() * 70);
  const line = Array.from({ length: 10 }, (_, i) => `${190 + i * 17},${150 - rand() * 50}`).join(" ");
  return (
    <g>
      <rect x="40" y="36" width="320" height="200" rx="10" fill="#fff" fillOpacity=".96" />
      <rect x="40" y="36" width="320" height="22" rx="10" fill="#000" fillOpacity=".06" />
      {[54, 66, 78].map((x) => (
        <circle key={x} cx={x} cy="47" r="3.5" fill="#000" fillOpacity=".18" />
      ))}
      <rect x="52" y="70" width="70" height="154" rx="6" fill="var(--c)" fillOpacity=".1" />
      {[82, 98, 114, 130].map((y, i) => (
        <rect key={y} x="62" y={y} width={i === 0 ? 50 : 40} height="7" rx="3.5" fill="var(--c)" fillOpacity={i === 0 ? 0.7 : 0.25} />
      ))}
      <rect x="134" y="70" width="214" height="34" rx="6" fill="var(--c)" fillOpacity=".08" />
      <rect x="144" y="80" width="60" height="14" rx="4" fill="var(--c)" fillOpacity=".75" />
      <rect x="214" y="83" width="50" height="8" rx="4" fill="var(--c)" fillOpacity=".25" />
      {bars.map((b, i) => (
        <rect key={i} x={140 + i * 12} y={220 - b * 0.9} width="8" height={b * 0.9} rx="2" fill="var(--c)" fillOpacity={0.35 + (i % 3) * 0.2} />
      ))}
      <polyline points={line} fill="none" stroke="var(--c)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </g>
  );
}

function Phone({ rand }) {
  const rows = Array.from({ length: 4 }, () => 40 + rand() * 50);
  return (
    <g>
      <rect x="150" y="22" width="100" height="206" rx="18" fill="#fff" fillOpacity=".96" />
      <rect x="182" y="30" width="36" height="6" rx="3" fill="#000" fillOpacity=".15" />
      <circle cx="200" cy="80" r="26" fill="var(--c)" fillOpacity=".18" />
      <circle cx="200" cy="80" r="26" fill="none" stroke="var(--c)" strokeWidth="5" strokeDasharray={`${rand() * 100 + 40} 200`} transform="rotate(-90 200 80)" strokeLinecap="round" />
      {rows.map((w, i) => (
        <g key={i}>
          <rect x="162" y={124 + i * 22} width="14" height="14" rx="4" fill="var(--c)" fillOpacity={0.3 + i * 0.15} />
          <rect x="182" y={127 + i * 22} width={w} height="8" rx="4" fill="#000" fillOpacity=".12" />
        </g>
      ))}
      <rect x="162" y="210" width="76" height="10" rx="5" fill="var(--c)" fillOpacity=".8" />
    </g>
  );
}

function Network({ rand }) {
  const nodes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2 + rand() * 0.5;
    const r = 70 + rand() * 40;
    return [200 + Math.cos(a) * r * 1.5, 125 + Math.sin(a) * r * 0.9];
  });
  return (
    <g>
      {nodes.map(([x, y], i) => (
        <line key={i} x1="200" y1="125" x2={x} y2={y} stroke="#fff" strokeOpacity=".45" strokeWidth="1.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={5 + (i % 3) * 3} fill="#fff" fillOpacity={0.55 + (i % 2) * 0.4} />
      ))}
      <rect x="166" y="103" width="68" height="44" rx="10" fill="#fff" />
      <text x="200" y="131" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="15" fontWeight="700" fill="var(--c)">
        {"</>"}
      </text>
    </g>
  );
}

export default function Cover({ project, className = "" }) {
  const rand = seeded(project.slug);
  const accent = project.accent || "#7d1f3c";
  const Motif = project.kind === "app" ? Phone : project.kind === "analytics" ? Network : Dashboard;
  const id = `g-${project.slug}`;
  return (
    <svg className={`cover ${className}`} viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" style={{ "--c": accent }} role="img" aria-label={`${project.title} cover`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={accent} />
          <stop offset="1" stopColor={accent} stopOpacity=".72" />
        </linearGradient>
        <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill="#fff" fillOpacity=".18" />
        </pattern>
      </defs>
      <rect width="400" height="250" fill={`url(#${id})`} />
      <rect width="400" height="250" fill={`url(#${id}-dots)`} />
      <circle cx={340 + rand() * 40} cy={20 + rand() * 30} r="90" fill="#fff" fillOpacity=".08" />
      <Motif rand={rand} />
    </svg>
  );
}
