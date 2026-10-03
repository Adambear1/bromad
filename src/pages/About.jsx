import React from "react";
import profile, { ventures, realEstate } from "../data/profile";
import { PageHeader, Photo, SectionTitle } from "../components/ui";

export const icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 110-4.2 2.1 2.1 0 010 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
};

export function contactLinks() {
  const { github, linkedin, email } = profile.links;
  return [
    email && { key: "email", label: email, href: `mailto:${email}` },
    linkedin && { key: "linkedin", label: "LinkedIn", href: linkedin },
    github && { key: "github", label: "GitHub", href: github },
  ].filter(Boolean);
}

export default function About() {
  return (
    <div className="container">
      <PageHeader eyebrow="About" title={`Hi, I'm ${profile.shortName}.`}>
        {profile.role} · {profile.location}
      </PageHeader>

      <div className="about-grid">
        <div className="prose">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <aside>
          {profile.now.length > 0 && (
            <div className="card side-card">
              <div className="eyebrow">Now</div>
              <ul className="now-list">
                {profile.now.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="eyebrow" style={{ margin: "24px 0 10px" }}>Get in touch</div>
          <div className="contact">
            {contactLinks().map((c) => (
              <a key={c.key} href={c.href} target={c.key === "email" ? undefined : "_blank"} rel="noopener noreferrer">
                {icons[c.key]}
                {c.label}
              </a>
            ))}
          </div>
        </aside>
      </div>

      <section className="section">
        <SectionTitle title="What I work with" />
        <div className="skills">
          {profile.skills.map((s) => (
            <div className="card side-card" key={s.group}>
              <div className="eyebrow">{s.group}</div>
              <div className="chips">
                {s.items.map((i) => (
                  <span className="chip" key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle title="Ventures" />
        <div className="ventures">
          {ventures.map((v) => (
            <div className="card venture" key={v.name}>
              <div className="work-meta">
                <span>{v.role}</span>
                <span>{v.year}</span>
              </div>
              <h3>{v.name}</h3>
              <p className="muted">{v.summary}</p>
              {v.href && (
                <a className="more-link" href={v.href} target="_blank" rel="noopener noreferrer">
                  {v.cta} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle title="Real estate" />
        <p className="muted" style={{ marginBottom: 20, maxWidth: 640 }}>
          Properties I've invested in across Washington, Nevada, Texas and central Mexico.
        </p>
        <div className="tiles">
          {realEstate.map((r, i) => (
            <figure className="tile" key={i}>
              <Photo src={r.image} alt={`${r.kind} in ${r.location}`} fallback="🏠" />
              <figcaption>
                {r.location}
                <small>{[r.kind, r.year].filter(Boolean).join(" · ")}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionTitle title="A few things I live by" />
        <div className="maxims">
          {profile.maxims.map((m, i) => (
            <div className="card maxim" key={m.title}>
              <span className="maxim-num">0{i + 1}</span>
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
