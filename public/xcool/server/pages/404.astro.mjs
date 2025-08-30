import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { C as ContentSection } from '../chunks/index_DFtjxm_b.mjs';
import { $ as $$Layout } from '../chunks/Layout_DbmlHL6U.mjs';
import { F as FadeIn } from '../chunks/FadeIn_Bcm_HfT1.mjs';
import { B as Button } from '../chunks/index_OA8fBTz-.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 | Page not found", "description": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content page-404"> ${renderComponent($$result2, "ContentSection", ContentSection, { "style": {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  } }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FadeIn", FadeIn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@utils/animations/FadeIn.tsx", "client:component-export": "FadeIn" }, { "default": ($$result4) => renderTemplate` <h1>Wooops - Soory! 404</h1> <p>
The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
</p> ${renderComponent($$result4, "Button", Button, { "variant": "secondary", "showIcon": false, "link": "/xcool", "align": "center" }, { "default": ($$result5) => renderTemplate`
Go back
` })} ` })} ` })} </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/404.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/404.astro";
const $$url = "/xcool/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
