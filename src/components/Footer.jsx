import React from "react";
import profile, { ventures } from "../data/profile";
import { contactLinks, icons } from "../pages/About";

export default function Footer() {
  const pwa = ventures[0];
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-cta">
          <h2>Let's build something.</h2>
          <p className="muted">
            Analytics work goes through{" "}
            <a href={pwa.href} target="_blank" rel="noopener noreferrer">{pwa.name}</a>. For anything
            else, say hi.
          </p>
        </div>
        <div className="footer-links">
          {contactLinks().map((c) => (
            <a key={c.key} href={c.href} target={c.key === "email" ? undefined : "_blank"} rel="noopener noreferrer" aria-label={c.label}>
              {icons[c.key]}
            </a>
          ))}
        </div>
      </div>
      <div className="container footer-base">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  );
}
