import React from "react";
import profile, { ventures } from "../data/profile";

export const navItems = [
  { id: "projects", label: "Work" },
  { id: "travel", label: "Travel" },
  { id: "wine", label: "Wine" },
  { id: "about", label: "About" },
];

function readTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function useTheme() {
  const [theme, setTheme] = React.useState(readTheme);
  React.useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggle = () => {
    const current =
      theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return toggle;
}

export default function Nav({ route }) {
  const [open, setOpen] = React.useState(false);
  const toggleTheme = useTheme();

  React.useEffect(() => setOpen(false), [route]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#/">
          <span className="brand-mark" aria-hidden="true">AB</span>
          {profile.name}
        </a>
        <ul className={`nav-links${open ? " open" : ""}`}>
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a href={`#/${id}`} aria-current={route === id ? "page" : undefined}>
                {label}
              </a>
            </li>
          ))}
          <li className="nav-cta-li">
            <a className="nav-cta" href={ventures[0].href} target="_blank" rel="noopener noreferrer">
              Work with me ↗
            </a>
          </li>
        </ul>
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="icon-btn menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
