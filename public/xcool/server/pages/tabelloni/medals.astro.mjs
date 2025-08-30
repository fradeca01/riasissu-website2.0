import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { T as Theme, $ as $$Layout } from '../../chunks/Layout_DbmlHL6U.mjs';
export { renderers } from '../../renderers.mjs';

const down = new Proxy({"src":"/xcool/_astro/down.ZYNO2wrg.png","width":574,"height":303,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/icons/down.png";
							}
							
							return target[name];
						}
					});

const next = new Proxy({"src":"/xcool/_astro/next.Dxpry1eZ.png","width":473,"height":307,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/icons/next.png";
							}
							
							return target[name];
						}
					});

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
    background: #4a4f69ff;
  }
`;
const Cell = styled.td`
  padding: 12px 16px;
  vertical-align: middle;
  text-align: center;
`;
styled.img`
  width: 32px;
  height: 20px;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 8px;
`;
const SchoolCell = styled(Cell)`
  /*display: flex;*/
  align-items: center;
  padding: 0 100px;
`;
const MedalCount = styled.span`
  font-weight: 600;
  color: ${({ color }) => color};
  min-width: 32px;
  display: inline-block;
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
function MedalTable({ data }) {
  const [expandedSchool, setExpandedSchool] = useState(null);
  const sorted = [...data].sort((a, b) => {
    if (b.gold !== a.gold) return b.gold - a.gold;
    if (b.silver !== a.silver) return b.silver - a.silver;
    return b.bronze - a.bronze;
  });
  const toggle = (school) => setExpandedSchool((cur) => cur === school ? null : school);
  return /* @__PURE__ */ jsx(TableWrapper, { children: /* @__PURE__ */ jsxs(Table, { children: [
    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(Th, { children: "#" }),
      /* @__PURE__ */ jsx(Th, { children: "Scuola" }),
      /* @__PURE__ */ jsx(Th, { children: "🥇" }),
      /* @__PURE__ */ jsx(Th, { children: "🥈" }),
      /* @__PURE__ */ jsx(Th, { children: "🥉" }),
      /* @__PURE__ */ jsx(Th, { children: "Totale" })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { children: sorted.map((c, i) => {
      const total = c.gold + c.silver + c.bronze;
      const isOpen = expandedSchool === c.school;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        /* @__PURE__ */ jsxs(BodyRow, { onClick: () => toggle(c.school), children: [
          /* @__PURE__ */ jsx(Cell, { children: i + 1 }),
          /* @__PURE__ */ jsxs(SchoolCell, { children: [
            c.school,
            isOpen && /* @__PURE__ */ jsx("img", { width: "20px", src: down.src }),
            !isOpen && /* @__PURE__ */ jsx("img", { width: "15px", src: next.src })
          ] }),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(MedalCount, { color: "#FFD700", children: c.gold }) }),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(MedalCount, { color: "#C0C0C0", children: c.silver }) }),
          /* @__PURE__ */ jsx(Cell, { children: /* @__PURE__ */ jsx(MedalCount, { color: "#CD7F32", children: c.bronze }) }),
          /* @__PURE__ */ jsx(SchoolCell, { children: total })
        ] }),
        isOpen && c.details.map((d) => {
          const subTotal = d.gold + d.silver + d.bronze;
          const notEmpty = true;
          return notEmpty && /* @__PURE__ */ jsxs(DetailRow, { children: [
            /* @__PURE__ */ jsx(Cell, {}),
            /* @__PURE__ */ jsx(SchoolCell, { children: d.sport }),
            /* @__PURE__ */ jsx(Cell, { children: d.gold }),
            /* @__PURE__ */ jsx(Cell, { children: d.silver }),
            /* @__PURE__ */ jsx(Cell, { children: d.bronze }),
            /* @__PURE__ */ jsx(SchoolCell, { children: subTotal })
          ] }, d.sport);
        })
      ] }, c.school);
    }) })
  ] }) });
}

const medalData = [
  {
    school: "SSC",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "CSB",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SSA",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "IUSS",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "ISUFI",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SSSAS",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SGSS",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SSDTW",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SSST",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SSMC",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  },
  {
    school: "SSUC",
    gold: 0,
    silver: 0,
    bronze: 0,
    details: [
      { sport: "Calcio a 5", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Beach Volley", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pallacanestro", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennis", gold: 0, silver: 0, bronze: 0 },
      { sport: "Padel", gold: 0, silver: 0, bronze: 0 },
      { sport: "Calcetto Balilla", gold: 0, silver: 0, bronze: 0 },
      { sport: "Dibattito Competitivo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Briscola", gold: 0, silver: 0, bronze: 0 },
      { sport: "Atletica", gold: 0, silver: 0, bronze: 0 },
      { sport: "Nuoto", gold: 0, silver: 0, bronze: 0 },
      { sport: "Tennistavolo", gold: 0, silver: 0, bronze: 0 },
      { sport: "Scacchi", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Party DS", gold: 0, silver: 0, bronze: 0 },
      { sport: "Mario Kart", gold: 0, silver: 0, bronze: 0 },
      { sport: "Pokémon", gold: 0, silver: 0, bronze: 0 },
      { sport: "Just Dance", gold: 0, silver: 0, bronze: 0 },
      { sport: "Coppa Chiosco", gold: 0, silver: 0, bronze: 0 }
    ]
  }
];

const $$Medals = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025 - Medals", "description": "Medal standings for the XCOOL 2025 event." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center><h1 style="margin-top:200px;">Medagliere</h1></center> <!-- hydrate on load for interactivity --> ${renderComponent($$result2, "MedalTable", MedalTable, { "client:load": true, "data": medalData, "client:component-hydration": "load", "client:component-path": "/home/runner/work/xcool-webpage/xcool-webpage/src/components/MedalTable/MedalTable", "client:component-export": "default" })} </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/medals.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/medals.astro";
const $$url = "/xcool/tabelloni/medals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Medals,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
