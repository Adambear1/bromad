import React from "react";

export function initials(name) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-ZÀ-Ý]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function Photo({ src, alt, label, fallback }) {
  if (!src) {
    return (
      <div className="photo-fallback" aria-hidden="true">
        {fallback || initials(label || alt || "?")}
      </div>
    );
  }
  return <img className="photo" src={src} alt={alt || ""} loading="lazy" />;
}

export function Stars({ rating, max = 5 }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < rating ? "" : "off"} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}

export function PageHeader({ eyebrow, title, children }) {
  return (
    <header className="page-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </header>
  );
}

export function SectionTitle({ title, href, linkText }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {href && (
        <a className="more-link" href={href}>
          {linkText} →
        </a>
      )}
    </div>
  );
}

// options: [{ id, label, count? }]; value of null means "All".
export function FilterBar({ options, value, onChange, allLabel = "All", allCount }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter">
      <button className="filter" aria-pressed={value === null} onClick={() => onChange(null)}>
        {allLabel}
        {allCount !== undefined && <span className="count">{allCount}</span>}
      </button>
      {options.map((o) => (
        <button
          key={o.id}
          className="filter"
          aria-pressed={value === o.id}
          onClick={() => onChange(value === o.id ? null : o.id)}
        >
          {o.label}
          {o.count !== undefined && <span className="count">{o.count}</span>}
        </button>
      ))}
    </div>
  );
}

export function Stat({ value, label }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function Chevron() {
  return (
    <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// A list row (optionally ranked) that expands to show details when there are any.
export function RankRow({ rank, media, title, sub, side, children, id, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const hasDetail = Boolean(children);
  React.useEffect(() => {
    if (defaultOpen) setOpen(true);
  }, [defaultOpen]);
  return (
    <li className="rank-row" id={id}>
      <button
        className="rank-head"
        onClick={() => setOpen(!open)}
        aria-expanded={hasDetail ? open : undefined}
        disabled={!hasDetail}
      >
        {rank !== undefined && <span className={`rank-num${rank <= 3 ? " top" : ""}`}>{rank}</span>}
        {media}
        <span className="rank-main">
          <span className="rank-title">{title}</span>
          {sub && <span className="rank-sub">{sub}</span>}
        </span>
        <span className="rank-side">
          {side}
          {hasDetail && <Chevron />}
        </span>
      </button>
      {open && hasDetail && <div className="rank-detail">{children}</div>}
    </li>
  );
}
