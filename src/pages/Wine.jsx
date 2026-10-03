import React from "react";
import wines, { wineTypes } from "../data/wine";
import { FilterBar, PageHeader, RankRow, Stat } from "../components/ui";

const typeColor = (type) => `var(--wine-${type})`;
const typeLabel = (type) => wineTypes.find((t) => t.id === type)?.label || type;

const sorters = {
  score: (a, b) => b.score - a.score,
  recent: (a, b) => (b.date || "").localeCompare(a.date || ""),
  vintage: (a, b) => (Number(b.vintage) || 0) - (Number(a.vintage) || 0),
};

function formatDate(ym) {
  if (!ym) return null;
  const [y, m] = ym.split("-").map(Number);
  return new Date(y, (m || 1) - 1).toLocaleDateString(undefined, { month: "short", year: "numeric" });
}

export function WineGlass({ type }) {
  return (
    <span className="wine-glass" style={{ "--dot": typeColor(type) }} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3h10l-.6 5.2a4.4 4.4 0 01-8.8 0L7 3z" fill="currentColor" fillOpacity=".35" />
        <path d="M12 13v7M8.5 21h7" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function Score({ value }) {
  return (
    <span className="score">
      <span className="score-value">
        {value.toFixed(1)}
        <small>/10</small>
      </span>
      <span className="score-bar" aria-hidden="true">
        <span style={{ width: `${value * 10}%` }} />
      </span>
    </span>
  );
}

// Rank is always by score, whatever order the list is shown in.
export function rankedWines() {
  return [...wines].sort(sorters.score).map((w, i) => ({ ...w, rank: i + 1 }));
}

export default function Wine() {
  const [type, setType] = React.useState(null);
  const [sort, setSort] = React.useState("score");

  const ranked = rankedWines();
  const shown = (type ? ranked.filter((w) => w.type === type) : ranked).sort(sorters[sort]);
  const countries = new Set(wines.map((w) => w.country));
  const avg = wines.length ? wines.reduce((s, w) => s + w.score, 0) / wines.length : 0;
  const hasPlaceholders = wines.some((w) => w.placeholder);
  const typeOptions = wineTypes
    .map((t) => ({ ...t, count: wines.filter((w) => w.type === t.id).length }))
    .filter((t) => t.count > 0);

  return (
    <div className="container">
      <PageHeader eyebrow="Wine" title="Every bottle, ranked">
        A running log of the wines I've had, scored out of 10. Tap a bottle for notes.
      </PageHeader>

      <div className="stats" style={{ marginBottom: 40 }}>
        <Stat value={wines.length} label="wines ranked" />
        <Stat value={countries.size} label="countries" />
        <Stat value={avg.toFixed(1)} label="average score" />
        <Stat value={ranked[0] ? ranked[0].score.toFixed(1) : "–"} label="top score" />
      </div>

      {hasPlaceholders && (
        <div className="notice" role="note">
          <span aria-hidden="true">🍷</span>
          <span>
            Entries marked <strong>sample</strong> are placeholders. Real bottles go in{" "}
            <code>src/data/wine.js</code>.
          </span>
        </div>
      )}

      <div className="toolbar">
        <FilterBar options={typeOptions} value={type} onChange={setType} allCount={wines.length} />
        <label className="muted" style={{ fontSize: "0.9rem" }}>
          Sort{" "}
          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="score">Highest score</option>
            <option value="recent">Most recent</option>
            <option value="vintage">Vintage</option>
          </select>
        </label>
      </div>

      {shown.length === 0 ? (
        <div className="empty">Nothing here yet.</div>
      ) : (
        <ol className="ranked ranked-numbered">
          {shown.map((w) => (
            <RankRow
              key={`${w.producer}-${w.name}-${w.vintage}`}
              rank={w.rank}
              media={<WineGlass type={w.type} />}
              title={
                <>
                  {w.name}
                  {w.placeholder && <span className="sample-tag">sample</span>}
                </>
              }
              sub={[w.producer, w.vintage].filter(Boolean).join(" · ")}
              side={
                <>
                  <span className="chip hide-sm" style={{ "--dot": typeColor(w.type) }}>
                    <span className="wine-dot" />
                    {typeLabel(w.type)}
                  </span>
                  <Score value={w.score} />
                </>
              }
            >
              <div className="wine-facts">
                {w.varietal && <span>{w.varietal}</span>}
                <span>{[w.region, w.country].filter(Boolean).join(", ")}</span>
                {w.where && <span>Had in {w.where}</span>}
                {w.date && <span>{formatDate(w.date)}</span>}
              </div>
              {w.notes && <p>{w.notes}</p>}
            </RankRow>
          ))}
        </ol>
      )}
    </div>
  );
}
