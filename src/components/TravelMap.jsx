import React from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const W = 1000;
const H = 560;

// Loaded on demand so the atlas (~100 kB) stays out of the main bundle.
let atlasPromise;
function loadCountries() {
  atlasPromise ??= import("world-atlas/countries-110m.json").then((m) => {
    const topo = m.default;
    return feature(topo, topo.objects.countries).features;
  });
  return atlasPromise;
}

export default function TravelMap({ places, onSelect, compact = false }) {
  const [countries, setCountries] = React.useState(null);
  const [hover, setHover] = React.useState(null);

  React.useEffect(() => {
    let alive = true;
    loadCountries().then((c) => alive && setCountries(c));
    return () => {
      alive = false;
    };
  }, []);

  const height = compact ? 560 : H;
  const projection = React.useMemo(() => {
    const pts = { type: "MultiPoint", coordinates: places.map((p) => p.coords) };
    const pad = compact ? 40 : 60;
    return geoMercator().fitExtent([[pad, pad], [W - pad, height - pad]], pts);
  }, [places, height, compact]);
  const path = geoPath(projection);
  const visitedCountries = new Set(places.map((p) => p.country));

  return (
    <div className="map-wrap">
      <svg className="map" viewBox={`0 0 ${W} ${height}`} role="img" aria-label="Map of places I've visited">
        <rect width={W} height={height} className="map-sea" />
        {countries?.map((f) => (
          <path
            key={f.id ?? f.properties.name}
            d={path(f)}
            className={visitedCountries.has(f.properties.name) ? "map-land visited" : "map-land"}
          />
        ))}
        {places.map((p) => {
          const [x, y] = projection(p.coords);
          const active = hover?.name === p.name;
          return (
            <g
              key={p.name}
              className="map-pin-g"
              onMouseEnter={() => setHover({ ...p, x, y })}
              onMouseLeave={() => setHover(null)}
              onClick={() => onSelect?.(p.name)}
              style={{ cursor: onSelect ? "pointer" : "default" }}
            >
              <circle cx={x} cy={y} r={compact ? 14 : 12} fill="transparent" />
              <circle cx={x} cy={y} r={active ? 8 : compact ? 6.5 : 5.5} className="map-pin" />
              <title>{p.name}</title>
            </g>
          );
        })}
      </svg>
      {hover && (
        <div
          className="map-tip"
          style={{ left: `${(hover.x / W) * 100}%`, top: `${(hover.y / height) * 100}%` }}
        >
          <strong>{hover.name}</strong>
          <span>{[hover.region, hover.country].filter(Boolean).join(", ")}</span>
        </div>
      )}
    </div>
  );
}
