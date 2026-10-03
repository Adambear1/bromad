import React from "react";
import projects from "../data/projects";
import Cover from "../components/Cover";
import { kindLabel, StatusPill } from "./Projects";

export default function ProjectDetail({ slug }) {
  const project = projects.find((p) => p.slug === slug);

  React.useEffect(() => {
    if (project) document.title = `${project.title} · Adam Birgenheier`;
  }, [project]);

  if (!project) {
    return (
      <div className="container page-header">
        <h1>Project not found</h1>
        <p>
          <a href="#/projects">Back to all work</a>
        </p>
      </div>
    );
  }

  const { title, year, status, summary, highlights = [], stack = [], links = {} } = project;
  const detailed = projects.filter((p) => p.highlights);
  const pos = detailed.indexOf(project);
  const next = detailed[(pos + 1) % detailed.length];

  return (
    <article className="container detail">
      <a className="back-link" href="#/projects">← All work</a>
      <header className="detail-header">
        <div className="work-meta">
          <span>{kindLabel(project.kind)}</span>
          {year && <span>{year}</span>}
          <StatusPill status={status} />
        </div>
        <h1>{title}</h1>
        <p className="detail-summary">{summary}</p>
        {(links.live || links.code) && (
          <div className="hero-actions">
            {links.live && (
              <a className="btn btn-primary" href={links.live} target="_blank" rel="noopener noreferrer">
                Visit live site ↗
              </a>
            )}
            {links.code && (
              <a className="btn" href={links.code} target="_blank" rel="noopener noreferrer">
                View code ↗
              </a>
            )}
          </div>
        )}
      </header>

      <div className="detail-cover card">
        <Cover project={project} />
      </div>

      <div className="detail-grid">
        <section>
          <h2>What it does</h2>
          {highlights.length > 0 ? (
            <ul className="highlights">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          ) : (
            <p className="muted">Write-up coming soon.</p>
          )}
        </section>
        <aside className="detail-aside">
          {stack.length > 0 && (
            <div>
              <div className="eyebrow">Built with</div>
              <div className="chips">
                {stack.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>
          )}
          {!links.code && (
            <div>
              <div className="eyebrow">Source</div>
              <p className="muted">Private repository — happy to walk through it.</p>
            </div>
          )}
        </aside>
      </div>

      {next && next !== project && (
        <a className="next-project card" href={`#/projects/${next.slug}`}>
          <span className="muted">Next project</span>
          <strong>{next.title} →</strong>
        </a>
      )}
    </article>
  );
}
