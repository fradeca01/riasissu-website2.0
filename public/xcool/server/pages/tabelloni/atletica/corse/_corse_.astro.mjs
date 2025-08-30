import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { R as RacesTable } from '../../../../chunks/RacesTable_CJzBGRQi.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_DbmlHL6U.mjs';
import { c as corse_urls, d as corse_to_title } from '../../../../chunks/getData_BWmicdPc.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://riasissu.it");
async function getStaticPaths() {
  return corse_urls.map((corse) => ({
    params: { corse }
  }));
}
const $$corse = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$corse;
  const { corse } = Astro2.params;
  const atleta_squadra = !corse.includes("x");
  const path = `https://storage.googleapis.com/riasissu-7c453.firebasestorage.app/xcool-data/atletica/${corse}.json`;
  let res;
  try {
    res = await fetch(path, { cache: "no-store" });
  } catch (e) {
    throw Astro2.redirect("/404");
  }
  const mod = await res.json();
  const data = mod.data ?? mod.default;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Medal standings for the XCOOL 2025 event." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center><h1 style="margin:200px 0 50px 0px;">${corse_to_title[corse]}</h1></center> <!-- hydrate on load for interactivity --> <center><div style="margin: 0 10px 0 10px; max-width:960px; overflow:auto"> ${renderComponent($$result2, "RacesTable", RacesTable, { "event": "", "data": data, "decimals": 2, "finals": true, "atleta_squadra": atleta_squadra })} </div></center> </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/corse/[corse].astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/corse/[corse].astro";
const $$url = "/xcool/tabelloni/atletica/corse/[corse]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$corse,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
