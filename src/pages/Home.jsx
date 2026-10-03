import React from "react";
import profile, { ventures } from "../data/profile";
import projects from "../data/projects";
import { visited, bucketList } from "../data/travel";
import wines from "../data/wine";
import TravelMap from "../components/TravelMap";
import { SectionTitle } from "../components/ui";
import { ProjectCard } from "./Projects";
import { rankedWines, Score, WineGlass } from "./Wine";

const services = [
  "Google Tag Manager",
  "GA4",
  "Server-side tagging",
  "Ad conversion tracking",
  "Consent (CMP) integration",
  "Attribution modelling",
  "Data governance",
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const countries = new Set(visited.map((p) => p.country));
  const topWines = rankedWines().slice(0, 4);
  const pwa = ventures[0];
  const shipped = projects.filter((p) => p.highlights).length;

  return (
    <>
      <div className="container">
        <section className="hero">
          <div className="hero-badge">
            <span className="pulse" aria-hidden="true" />
            Building {featured[0].title}
          </div>
          <h1>{profile.headline}</h1>
          <p className="hero-tagline">
            I'm <strong>{profile.name}</strong> — {profile.tagline.charAt(0).toLowerCase() + profile.tagline.slice(1)}
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#/projects">See my work</a>
            <a className="btn" href={pwa.href} target="_blank" rel="noopener noreferrer">
              Work with me ↗
            </a>
          </div>
          <dl className="hero-facts">
            <div><dt>5+ yrs</dt><dd>analytics engineering</dd></div>
            <div><dt>100+</dt><dd>websites instrumented</dd></div>
            <div><dt>{shipped}</dt><dd>products & apps built</dd></div>
            <div><dt>{countries.size}</dt><dd>countries explored</dd></div>
          </dl>
        </section>

        <section className="section">
          <SectionTitle title="Selected work" href="#/projects" linkText="All work" />
          <div className="bento">
            {featured.map((p, i) => (
              <ProjectCard project={p} key={p.slug} large={i === 0} />
            ))}
          </div>
        </section>
      </div>

      <section className="band">
        <div className="container band-inner">
          <div>
            <div className="eyebrow">My consultancy</div>
            <h2>{pwa.name}</h2>
            <p>
              The day job: making sure businesses can trust their numbers. I set up, audit and fix the
              tracking behind marketing data — then turn it into reporting people actually use.
            </p>
            <a className="btn btn-light" href={pwa.href} target="_blank" rel="noopener noreferrer">
              Visit {pwa.cta} ↗
            </a>
          </div>
          <ul className="band-services">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <SectionTitle title="Off the clock" />
          <div className="off-grid">
            <a className="card off-card" href="#/travel">
              <div className="off-head">
                <div>
                  <div className="eyebrow">Travel</div>
                  <h3>{visited.length} places, {countries.size} countries</h3>
                </div>
                <span className="more-link">Explore the map →</span>
              </div>
              <TravelMap places={visited} upcoming={bucketList} compact />
            </a>
            <a className="card off-card" href="#/wine">
              <div className="off-head">
                <div>
                  <div className="eyebrow">Wine</div>
                  <h3>{wines.length} bottles, ranked</h3>
                </div>
                <span className="more-link">The cellar →</span>
              </div>
              <ol className="mini-list">
                {topWines.map((w) => (
                  <li key={`${w.producer}-${w.name}-${w.vintage}`}>
                    <span className="mini-rank">{w.rank}</span>
                    <WineGlass type={w.type} />
                    <span className="mini-name">
                      {w.name}
                      <small>{[w.region, w.country].filter(Boolean).join(", ")}</small>
                    </span>
                    <Score value={w.score} />
                  </li>
                ))}
              </ol>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
