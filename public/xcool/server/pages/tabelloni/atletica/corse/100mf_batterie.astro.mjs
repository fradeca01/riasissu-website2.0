import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { R as RacesTable } from '../../../../chunks/RacesTable_CJzBGRQi.mjs';
import { $ as $$Layout } from '../../../../chunks/Layout_DbmlHL6U.mjs';
export { renderers } from '../../../../renderers.mjs';

const $$Astro = createAstro("https://riasissu.it");
const $$100MFBatterie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$100MFBatterie;
  const path = `https://storage.googleapis.com/riasissu-7c453.firebasestorage.app/xcool-data/atletica/100mF_batterie.json`;
  let res;
  try {
    res = await fetch(path, { cache: "no-store" });
  } catch (e) {
    throw Astro2.redirect("/404");
  }
  const mod = await res.json();
  const data1 = mod.data1 ?? mod.default;
  const data2 = mod.data2 ?? mod.default;
  const data3 = mod.data3 ?? mod.default;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Medal standings for the XCOOL 2025 event." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center><h1 style="margin:200px 0 50px 0px;">100m piani Femminile - Batterie</h1></center> <!-- hydrate on load for interactivity --> <center><div style="margin: 0 10px 0 10px; max-width:960px; overflow:auto"> ${renderComponent($$result2, "RacesTable", RacesTable, { "event": "Batteria 1", "data": data1, "decimals": 2, "finals": false })} </div></center><center><div style="margin: 0 10px 0 10px; max-width:960px; overflow:auto"> ${renderComponent($$result2, "RacesTable", RacesTable, { "event": "Batteria 2", "data": data2, "decimals": 2, "finals": false })} </div></center><center><div style="margin: 0 10px 0 10px; max-width:960px; overflow:auto"> ${renderComponent($$result2, "RacesTable", RacesTable, { "event": "Batteria 3", "data": data3, "decimals": 2, "finals": false })} </div></center></main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/corse/100mF_batterie.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/atletica/corse/100mF_batterie.astro";
const $$url = "/xcool/tabelloni/atletica/corse/100mF_batterie";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$100MFBatterie,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
