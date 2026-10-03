import React from "react";
import { visited, bucketList, vibes, flags } from "../data/travel";
import TravelMap from "../components/TravelMap";
import { FilterBar, PageHeader, Photo, RankRow, SectionTitle, Stars, Stat } from "../components/ui";

const place = ({ region, country }) => [region, country].filter(Boolean).join(", ");
const slug = (name) => `place-${name.toLowerCase().normalize("NFD").replace(/[^a-z]+/g, "-")}`;

function PlaceDetail({ p }) {
  const { review, pros = [], cons = [] } = p;
  return (
    <>
      {review ? <p>{review}</p> : <p className="muted">Full write-up coming soon.</p>}
      {(pros.length > 0 || cons.length > 0) && (
        <div className="pros-cons">
          {pros.length > 0 && (
            <div className="chips">
              <strong>Pros</strong>
              {pros.map((x) => (
                <span className="chip pro" key={x}>{x}</span>
              ))}
            </div>
          )}
          {cons.length > 0 && (
            <div className="chips">
              <strong>Cons</strong>
              {cons.map((x) => (
                <span className="chip con" key={x}>{x}</span>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function PlaceRow({ p, open }) {
  const hasDetail = p.review || p.pros?.length || p.cons?.length;
  return (
    <RankRow
      id={slug(p.name)}
      defaultOpen={open}
      media={
        <span className="rank-thumb">
          <Photo src={p.image} alt={p.name} fallback={flags[p.country]} />
        </span>
      }
      title={p.name}
      sub={place(p)}
      side={
        <>
          <span className="chips hide-sm">
            {(p.vibes || []).slice(0, 2).map((v) => (
              <span className="chip" key={v}>{v}</span>
            ))}
          </span>
          {p.rating ? <Stars rating={p.rating} /> : <span className="muted small">Not rated</span>}
        </>
      }
    >
      {hasDetail ? <PlaceDetail p={p} /> : null}
    </RankRow>
  );
}

export default function Travel() {
  const [vibe, setVibe] = React.useState(null);
  const [view, setView] = React.useState("country");
  const [focus, setFocus] = React.useState(null);

  const countries = [...new Set(visited.map((p) => p.country))];
  const shown = vibe ? visited.filter((p) => p.vibes?.includes(vibe)) : visited;
  const vibeOptions = vibes
    .map((v) => ({ id: v, label: v[0].toUpperCase() + v.slice(1), count: visited.filter((p) => p.vibes?.includes(v)).length }))
    .filter((v) => v.count > 0);

  const selectFromMap = (name) => {
    setVibe(null);
    setFocus(name);
    requestAnimationFrame(() =>
      document.getElementById(slug(name))?.scrollIntoView({ behavior: "smooth", block: "center" })
    );
  };

  const groups =
    view === "country"
      ? countries
          .map((c) => ({ title: `${flags[c] || ""} ${c}`, items: shown.filter((p) => p.country === c) }))
          .filter((g) => g.items.length)
      : [{ title: null, items: [...shown].sort((a, b) => (b.rating || 0) - (a.rating || 0)) }];

  return (
    <div className="container">
      <PageHeader eyebrow="Travel" title="Where I've been">
        {visited.length} places across {countries.length} countries, mostly Latin America — with honest
        opinions on most of them. Tap a pin or a place for the write-up.
      </PageHeader>

      <div className="stats" style={{ marginBottom: 24 }}>
        <Stat value={visited.length} label="places visited" />
        <Stat value={countries.length} label="countries" />
        <Stat value={visited.filter((p) => p.rating).length} label="reviewed" />
        <Stat value={bucketList.length} label="on the bucket list" />
      </div>

      <div className="card map-card">
        <TravelMap places={visited} upcoming={bucketList} onSelect={selectFromMap} />
      </div>

      <div className="toolbar" style={{ marginTop: 40 }}>
        <FilterBar options={vibeOptions} value={vibe} onChange={setVibe} allLabel="All vibes" />
        <div className="segmented" role="group" aria-label="Group by">
          <button aria-pressed={view === "country"} onClick={() => setView("country")}>By country</button>
          <button aria-pressed={view === "rating"} onClick={() => setView("rating")}>Top rated</button>
        </div>
      </div>

      {groups.map((g) => (
        <section key={g.title || "all"} className="place-group">
          {g.title && (
            <h2 className="group-title">
              {g.title} <span className="muted">{g.items.length}</span>
            </h2>
          )}
          <ol className="ranked">
            {g.items.map((p) => (
              <PlaceRow key={p.name} p={p} open={focus === p.name} />
            ))}
          </ol>
        </section>
      ))}

      <section className="section">
        <SectionTitle title="Up next" />
        <div className="tiles">
          {bucketList.map((c) => (
            <figure className="tile" key={c.name}>
              <Photo src={c.image} alt={c.name} fallback={flags[c.country]} />
              <figcaption>
                {c.name}
                <small>{place(c)}</small>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
