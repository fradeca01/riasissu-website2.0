import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { T as Theme, M as MediaQuery, $ as $$Layout } from '../../../chunks/Layout_DbmlHL6U.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { e as altro_urls, f as altro_to_title } from '../../../chunks/getData_BWmicdPc.mjs';
export { renderers } from '../../../renderers.mjs';

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
  vertical-align: middle;
  text-align: center;
  font-variant-numeric: tabular-nums;
`;
styled(Cell)`
  position: sticky;
  left: 0;
  background: ${Theme.secondary};
  z-index: 1;
  text-align: left;
`;
styled(Cell)`
  position: sticky;
  left: 200px;
  background: ${Theme.secondary};
  z-index: 1;
  text-align: left;
  @media (${MediaQuery.max("sm")}) {
    left: 160px;
  }
`;
const Badge = styled.span`
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 700;
  display: inline-block;
  min-width: 54px;
  text-align: center;
`;
const BestBadge = styled(Badge)`
  outline: 2px solid ${Theme.primary};
  border-radius: 8px;
`;
const FOULS = /* @__PURE__ */ new Set(["X", "FOUL", "F"]);
const PASSES = /* @__PURE__ */ new Set(["-", "P"]);
const NM = "NM";
function parseAttempt(inp, decimals = 2) {
  const raw = (inp || "").trim();
  if (!raw) return { valid: false, distance: null, display: "", raw: "" };
  const upper = raw.toUpperCase();
  if (upper === NM)
    return { valid: false, distance: null, display: NM, raw: NM };
  if (FOULS.has(upper))
    return { valid: false, distance: null, display: "X", raw: upper };
  if (PASSES.has(upper))
    return { valid: false, distance: null, display: "–", raw: upper };
  const cleaned = upper.replace(/[^\d,.\-]/g, "").replace(",", ".");
  const dist = Number(cleaned);
  if (!Number.isFinite(dist))
    return { valid: false, distance: null, display: raw, raw };
  return { valid: true, distance: dist, display: dist.toFixed(decimals), raw };
}
function evaluateAttempts(atts, rounds, decimals) {
  const parsed = atts.slice(0, rounds).map((a) => parseAttempt(a, decimals));
  const valids = parsed.filter((p) => p.valid && p.distance != null).map((p) => p.distance).sort((a, b) => b - a);
  const best = valids[0] ?? null, second = valids[1] ?? null, third = valids[2] ?? null;
  return {
    parsed,
    eval: {
      bests: valids,
      best,
      second,
      third,
      noMark: valids.length === 0
    }
  };
}
function compareEval(a, b) {
  const max = Math.max(a.bests.length, b.bests.length);
  for (let i = 0; i < max; i++) {
    const av = a.bests[i] ?? -Infinity, bv = b.bests[i] ?? -Infinity;
    if (av !== bv) return bv - av;
  }
  return 0;
}
function MaxAmongAttemptsTable({
  data,
  rounds = 6,
  decimals = 2
}) {
  const computed = useMemo(() => {
    const list = data.map((row) => {
      const { parsed, eval: ev } = evaluateAttempts(
        row.attempts,
        rounds,
        decimals
      );
      return { row, parsed, ev };
    });
    list.sort((A, B) => compareEval(A.ev, B.ev));
    return list.map((item, i, arr) => {
      const r = i > 0 && compareEval(arr[i - 1].ev, item.ev) === 0 ? arr[i - 1]._rank : i + 1;
      item._rank = r;
      return item;
    });
  }, [data, rounds, decimals]);
  const roundHeaders = Array.from({ length: rounds }, (_, i) => `R${i + 1}`);
  return /* @__PURE__ */ jsx(TableWrapper, { children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(Th, { children: "#" }),
      /* @__PURE__ */ jsx(Th, { children: "Atleta" }),
      /* @__PURE__ */ jsx(Th, { children: "Scuola" }),
      roundHeaders.map((h) => /* @__PURE__ */ jsx(Th, { children: h }, h))
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: computed.map(({ row, parsed, ev, _rank }) => {
      const bestIdx = ev.noMark ? -1 : parsed.findIndex((p) => p.valid && p.distance === ev.best);
      return /* @__PURE__ */ jsx(React.Fragment, { children: /* @__PURE__ */ jsxs(BodyRow, { children: [
        /* @__PURE__ */ jsx(Cell, { children: _rank }),
        /* @__PURE__ */ jsx(Cell, { children: row.athlete }),
        /* @__PURE__ */ jsx(Cell, { children: row.school }),
        parsed.map((p, idx) => /* @__PURE__ */ jsx(Cell, { children: idx === bestIdx ? /* @__PURE__ */ jsx(BestBadge, { children: p.display || " " }) : /* @__PURE__ */ jsx(Badge, { children: p.display || " " }) }, idx)),
        parsed.length < rounds && Array.from({ length: rounds - parsed.length }).map(
          (_, i) => /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(Badge, { children: "" }) }, `pad-${i}`)
        )
      ] }) }, row.athlete);
    }) })
  ] }) });
}

const $$Astro = createAstro("https://riasissu.it");
async function getStaticPaths() {
  return altro_urls.map((altro) => ({
    params: { altro }
  }));
}
const $$altro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$altro;
  const { altro } = Astro2.params;
  const path = `https://storage.googleapis.com/riasissu-7c453.firebasestorage.app/xcool-data/atletica/${altro}.json`;
  let res;
  try {
    res = await fetch(path, { cache: "no-store" });
  } catch (e) {
    throw Astro2.redirect("/404");
  }
  const mod = await res.json();
  const data = mod.data ?? mod.default;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Medal standings for the XCOOL 2025 event." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center><h1 style="margin:200px 0 50px 0px;">${altro_to_title[altro]}</h1></center> <!-- hydrate on load for interactivity --> <center><div style="margin: 0 10px 0 10px; max-width:960px; overflow:auto"> ${renderComponent($$result2, "MaxAmongAttemptsTable", MaxAmongAttemptsTable, { "event": "Peso", "rounds": 6, "decimals": 2, "data": data })} </div></center> </main> ` })} `;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/[altro].astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/[altro].astro";
const $$url = "/xcool/tabelloni/atletica/[altro]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$altro,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
