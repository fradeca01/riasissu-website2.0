import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { T as Theme, $ as $$Layout } from '../../chunks/Layout_DbmlHL6U.mjs';
export { renderers } from '../../renderers.mjs';

const beer = new Proxy({"src":"/xcool/_astro/beer.DaduGdqG.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/beer.webp";
							}
							
							return target[name];
						}
					});

const ChartWrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  padding: 24px;
  background: ${Theme.secondary};
  border-radius: 12px;
  max-width: 960px;
  align-self: center;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;
const Label = styled.div`
  flex: 0 0 80px;
  font-size: 14px;
  font-weight: 600;
  color: ${Theme.primary};
  margin-right: 12px;
`;
const BarContainer = styled.div`
  flex: 1;
  background: ${Theme.secondary};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 20px;
`;
const Bar = styled.div`
  width: ${({ pct }) => pct}%;
  background: #0000ff;
  height: 100%;
  border-radius: 12px 12px 12px 12px;
  transition: width 1s ease-out;
`;
const Value = styled.div`
  position: absolute;
  left: ${({ pct }) => pct}%;
  top: 50%;
  transform: translate(${({ pct }) => pct > 90 ? "-100%,-50%" : "4px,-50%"});
  transition:
    left 1s ease-out,
    transform 1s ease-out;
  font-size: 16px;
  font-weight: 500;
  color: ${Theme.primary};
  white-space: nowrap;
`;
function BarChart({ data }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => setLoaded(true), 50);
    return () => window.clearTimeout(id);
  }, []);
  const max = Math.max(...data.map((d) => d.total), 1);
  return /* @__PURE__ */ jsx(ChartWrapper, { children: data.map((d) => {
    const pct = Math.round(d.total / max * 90);
    const displayPct = loaded ? pct : 0;
    return /* @__PURE__ */ jsxs(Row, { children: [
      /* @__PURE__ */ jsx(Label, { children: d.school }),
      /* @__PURE__ */ jsxs(BarContainer, { children: [
        /* @__PURE__ */ jsx(Bar, { pct: displayPct }),
        /* @__PURE__ */ jsxs(Value, { pct: displayPct, children: [
          d.total,
          " ",
          /* @__PURE__ */ jsx("img", { width: "18px", src: beer.src })
        ] })
      ] })
    ] }, d.school);
  }) });
}

const totals = [
  { school: "SSC", total: 5 },
  { school: "CSB", total: 7 },
  { school: "SSA", total: 2 },
  { school: "IUSS", total: 10 },
  { school: "ISUFI", total: 9 },
  { school: "SSSAS", total: 4 },
  { school: "SGSS", total: 3 },
  { school: "SSDTW", total: 23 },
  { school: "SSST", total: 12 },
  { school: "SSMC", total: 17 },
  { school: "SSUC", total: 19 }
];

const $$CoppaChiosco = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Medal standings for the XCOOL 2025 event." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center><h1 style="margin-top:200px;">Coppa Chiosco</h1></center> <div style="overflow:auto;"> ${renderComponent($$result2, "BarChart", BarChart, { "client:load": true, "data": totals, "client:component-hydration": "load", "client:component-path": "/home/runner/work/xcool-webpage/xcool-webpage/src/components/DrinkBarChart/DrinkBarChart", "client:component-export": "default" })} </div> </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/coppa_chiosco.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/coppa_chiosco.astro";
const $$url = "/xcool/tabelloni/coppa_chiosco";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$CoppaChiosco,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
