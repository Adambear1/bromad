import React from "react";
import projects, { kinds, archive, githubProfile } from "../data/projects";
import Cover from "../components/Cover";
import { FilterBar, PageHeader, SectionTitle } from "../components/ui";

export const kindLabel = (kind) => kinds.find((k) => k.id === kind)?.label.replace(/s$/, "");

export function StatusPill({ status }) {
  if (!status) return null;
  const tone = status === "Live" || status === "In use" ? "live" : status === "Archived" ? "muted" : "building";
  return <span className={`pill ${tone}`}>{status}</span>;
}

export function ProjectCard({ project, large = false }) {
  const { slug, title, year, status, summary, stack = [] } = project;
  return (
    <a className={`card work-card${large ? " large" : ""}`} href={`#/projects/${slug}`}>
      <div className="work-cover" style={{ "--c": project.accent }}>
        <Cover project={project} fit={large ? "meet" : "slice"} />
      </div>
      <div className="work-body">
        <div className="work-meta">
          <span>{kindLabel(project.kind)}</span>
          {year && <span>{year}</span>}
          <StatusPill status={status} />
        </div>
        <h3>{title}</h3>
        <p>{summary}</p>
        {stack.length > 0 && (
          <div className="chips">
            {stack.slice(0, large ? 6 : 4).map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
        )}
        <span className="work-more">Read more →</span>
      </div>
    </a>
  );
}

function SmallProject({ project }) {
  const { title, year, status, summary, stack = [], links } = project;
  const href = links?.live || links?.code;
  return (
    <li className="small-project">
      <div>
        <div className="small-title">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">{title} ↗</a>
          ) : (
            title
          )}
          <StatusPill status={status} />
        </div>
        <p className="muted">{summary}</p>
      </div>
      <div className="small-side">
        {stack.length > 0 && <span className="muted">{stack.slice(0, 3).join(" · ")}</span>}
        {year && <span className="small-year">{year}</span>}
      </div>
    </li>
  );
}

export default function Projects() {
  const [kind, setKind] = React.useState(null);
  const match = (p) => !kind || p.kind === kind;
  const featured = projects.filter((p) => p.featured && match(p));
  const others = projects.filter((p) => !p.featured && p.highlights && match(p));
  const smaller = projects.filter((p) => !p.featured && !p.highlights && match(p));
  const options = kinds.map((k) => ({ ...k, count: projects.filter((p) => p.kind === k.id).length }));

  return (
    <div className="container">
      <PageHeader eyebrow="Work" title="Things I've built">
        Products, apps and analytics tooling — mostly built solo, end to end. Client work lives over at{" "}
        <a href="https://www.precisionwebanalytics.com" target="_blank" rel="noopener noreferrer">
          Precision Web Analytics
        </a>
        .
      </PageHeader>
      <FilterBar options={options} value={kind} onChange={setKind} allCount={projects.length} />

      {[...featured, ...others].length > 0 && (
        <div className="work-grid">
          {[...featured, ...others].map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>
      )}

      {smaller.length > 0 && (
        <section className="section">
          <SectionTitle title="Smaller builds & experiments" />
          <ul className="small-list card">
            {smaller.map((p) => (
              <SmallProject project={p} key={p.slug} />
            ))}
          </ul>
        </section>
      )}

      {!kind && (
        <section className="section">
          <SectionTitle title="Where it started" href={githubProfile} linkText="All 180+ repos on GitHub" />
          <p className="muted" style={{ maxWidth: 640, marginBottom: 16 }}>
            My GitHub goes back to 2020, when I was learning full-stack development one small build at a
            time. A few from the archive:
          </p>
          <div className="chips">
            {archive.map((a) => (
              <a className="chip chip-link" href={a.href} key={a.href} target="_blank" rel="noopener noreferrer">
                {a.title} <span className="muted">{a.year}</span>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
