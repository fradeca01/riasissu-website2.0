import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { T as Theme, M as MediaQuery, $ as $$Layout } from '../../../../chunks/Layout_DbmlHL6U.mjs';
import { a as alto_urls, b as alto_to_title } from '../../../../chunks/getData_BWmicdPc.mjs';
export { renderers } from '../../../../renderers.mjs';

const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  margin: 40px 0;
  align-self: center;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: sans-serif;
  background: ${Theme.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;
const Th = styled.th`
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${Theme.secondary};
  color: ${Theme.primary};
  white-space: nowrap;
  &:first-of-type {
    border-top-left-radius: 12px;
  }
  &:last-of-type {
    border-top-right-radius: 12px;
  }
`;
const BodyRow = styled.tr`
  cursor: pointer;
  &:nth-of-type(odd) {
    background: #626262;
  }
`;
const Cell = styled.td`
  padding: 12px 16px;
  vertical-align: middle; /* centratura verticale */
  text-align: center; /* centratura orizzontale */
  font-variant-numeric: tabular-nums;
`;
const StickyLeft = styled(Cell)`
  position: sticky;
  left: 0;
  background: ${Theme.secondary};
  z-index: 1;
  text-align: left;
`;
styled(Cell)`
  position: sticky;
  left: 160px; /* adatta se cambi larghezze */
  background: ${Theme.secondary};
  z-index: 1;
  text-align: left;
  @media (${MediaQuery.max("sm")}) {
    left: 120px;
  }
`;
const Badge = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 700;
  display: inline-block;
  min-width: 40px;
  text-align: center;
`;
const DetailRow = styled.tr`
  background: ${Theme.primary}CC;
  font-size: 12px;
  color: #94a3b8;
  &:nth-of-type(odd) {
    background: #252837ff;
  }
`;
styled.span`
  margin-left: 8px;
  color: #9ed0ff;
  font-size: 12px;
  font-weight: 600;
`;
const keyForHeight = (h) => h.toFixed(2);
function parseAttempts(seq) {
  const raw = (seq || "").toUpperCase().replace(/\s+/g, "");
  const clean = raw.replace(/[^OX\-P]/g, "");
  const chars = clean.split("");
  const cleared = chars.includes("O");
  const misses = chars.filter((c) => c === "X").length;
  const attempts = chars.filter((c) => c === "X" || c === "O").length;
  let missesBeforeClear = 0;
  if (cleared) {
    for (const c of chars) {
      if (c === "O") break;
      if (c === "X") missesBeforeClear++;
    }
  }
  return { seq: clean, cleared, misses, attempts, missesBeforeClear };
}
function calcRowMetrics(heightsAsc, row) {
  let bestHeight = null;
  let bestIndex = -1;
  let totalMisses = 0;
  const perHeight = {};
  for (let i = 0; i < heightsAsc.length; i++) {
    const k = keyForHeight(heightsAsc[i]);
    const parsed = parseAttempts(
      row.attempts[k] ?? row.attempts[String(heightsAsc[i])] ?? ""
    );
    perHeight[k] = parsed;
    if (parsed.cleared) {
      bestHeight = heightsAsc[i];
      bestIndex = i;
    }
  }
  if (bestIndex >= 0) {
    for (let i = 0; i <= bestIndex; i++) {
      const k = keyForHeight(heightsAsc[i]);
      totalMisses += perHeight[k]?.misses ?? 0;
    }
  } else {
    for (let i = 0; i < heightsAsc.length; i++) {
      const k = keyForHeight(heightsAsc[i]);
      totalMisses += perHeight[k]?.misses ?? 0;
    }
  }
  const missesAtBest = bestIndex >= 0 ? perHeight[keyForHeight(heightsAsc[bestIndex])]?.missesBeforeClear ?? 0 : 0;
  return {
    bestHeight,
    missesAtBest,
    totalMisses,
    noMark: bestIndex < 0,
    perHeight
  };
}
function compareAthletes(a, b) {
  if (a.noMark && !b.noMark) return 1;
  if (!a.noMark && b.noMark) return -1;
  if (a.noMark && b.noMark) return a.totalMisses - b.totalMisses;
  if (a.bestHeight !== b.bestHeight) return b.bestHeight - a.bestHeight;
  if (a.missesAtBest !== b.missesAtBest) return a.missesAtBest - b.missesAtBest;
  if (a.totalMisses !== b.totalMisses) return a.totalMisses - b.totalMisses;
  return 0;
}
function HighJumpTable({ heights, data }) {
  const [expandedAthlete, setExpandedAthlete] = useState(null);
  const heightsAsc = useMemo(
    () => [...heights].sort((a, b) => a - b),
    [heights]
  );
  const computed = useMemo(() => {
    const withEval = data.map((row) => ({
      row,
      eval: calcRowMetrics(heightsAsc, row)
    }));
    withEval.sort((A, B) => compareAthletes(A.eval, B.eval));
    let rank = 0;
    return withEval.map((item, i, arr) => {
      if (i === 0) rank = 1;
      else {
        const prev = arr[i - 1];
        const tie = prev.eval.noMark && item.eval.noMark || !prev.eval.noMark && !item.eval.noMark && prev.eval.bestHeight === item.eval.bestHeight && prev.eval.missesAtBest === item.eval.missesAtBest && prev.eval.totalMisses === item.eval.totalMisses;
        rank = tie ? prev._rank : i + 1;
      }
      item._rank = rank;
      return item;
    });
  }, [data, heightsAsc]);
  const toggle = (athlete) => setExpandedAthlete((cur) => cur === athlete ? null : athlete);
  const heightKeys = heightsAsc.map((h) => keyForHeight(h));
  return /* @__PURE__ */ jsx(TableWrapper, { children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(Th, { children: "#" }),
      /* @__PURE__ */ jsx(Th, { children: "Atleta" }),
      /* @__PURE__ */ jsx(Th, { children: "Scuola" }),
      heightKeys.map((hk) => /* @__PURE__ */ jsx(Th, { children: hk }, hk)),
      /* @__PURE__ */ jsx(Th, { children: "Best" }),
      /* @__PURE__ */ jsx(Th, { children: "Err@Best" }),
      /* @__PURE__ */ jsx(Th, { children: "ErrTot" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: computed.map(({ row, eval: ev, _rank }) => {
      const isOpen = expandedAthlete === row.athlete;
      const bestLabel = ev.noMark ? "—" : ev.bestHeight.toFixed(2);
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxs(BodyRow, { onClick: () => toggle(row.athlete), children: [
          /* @__PURE__ */ jsx(Cell, { children: _rank }),
          /* @__PURE__ */ jsx(Cell, { children: row.athlete }),
          /* @__PURE__ */ jsx(Cell, { children: row.school ?? row.country ?? "" }),
          heightKeys.map((hk) => /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: (row.attempts[hk] ?? "").toUpperCase() }) }, hk)),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: bestLabel }) }),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: ev.noMark ? "—" : ev.missesAtBest }) }),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: ev.totalMisses }) })
        ] }),
        isOpen && /* @__PURE__ */ jsxs(DetailRow, { children: [
          /* @__PURE__ */ jsx(Cell, {}),
          /* @__PURE__ */ jsx(StickyLeft, { colSpan: 2, style: { textAlign: "left" }, children: "Dettagli" }),
          heightKeys.map((hk) => {
            const ph = ev.perHeight[hk];
            const hint = !ph ? "" : ph.cleared ? ph.missesBeforeClear === 0 ? "OK 1°" : ph.missesBeforeClear === 1 ? "OK 2°" : "OK 3°" : ph.seq.includes("XXX") ? "Fallita" : ph.seq.includes("-") || ph.seq.includes("P") ? "Passata" : ph.seq ? "—" : "";
            return /* @__PURE__ */ jsx(Cell, { title: hint, children: /* @__PURE__ */ jsx("span", { style: { opacity: 0.85 }, children: hint }) }, hk);
          }),
          /* @__PURE__ */ jsx(Cell, { colSpan: 3, style: { textAlign: "left" }, children: "Regola classifica: miglior misura → errori alla miglior misura → errori totali. Pari merito mantenuto (niente spareggio)." })
        ] })
      ] }, row.athlete);
    }) })
  ] }) });
}

const $$Astro = createAstro("https://riasissu.it");
const prerender = false;
async function getStaticPaths() {
  return alto_urls.map((alto) => ({
    params: { alto }
  }));
}
const $$alto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$alto;
  const { alto } = Astro2.params;
  const url = `https://storage.googleapis.com/riasissu-7c453.firebasestorage.app/xcool-data/atletica/${alto}.json`;
  let res;
  try {
    res = await fetch(url, { cache: "no-store" });
  } catch (e) {
    throw Astro2.redirect("/404");
  }
  const mod = await res.json();
  const data = mod.data ?? mod.default;
  const heights = mod.heights ?? mod.default;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Medal standings for the XCOOL 2025 event." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center><h1 style="margin:200px 0 50px 0px;">${alto_to_title[alto]}</h1></center> <!-- hydrate on load for interactivity --> <center><div style="margin: 0 10px 0 10px; max-width:1440px; overflow:auto"> ${renderComponent($$result2, "HighJumpTable", HighJumpTable, { "heights": heights, "data": data })} </div></center> </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/alto/[alto].astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/alto/[alto].astro";
const $$url = "/xcool/tabelloni/atletica/alto/[alto]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$alto,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
