import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import 'react/jsx-runtime';
import 'react';
import { $ as $$Layout, P as Piazza } from '../chunks/Layout_DbmlHL6U.mjs';
import { H as Hero } from '../chunks/index_B9BWbPCF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL", "description": "Evento organizzato dalla Scuola Superiore Di Toppo Wassermann in collaborazione con RIASISSU" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content"> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "heroType": "fullPageSlider", "data": [
    {
      title: "XCOOL 2025",
      subtitle: 'Udine 3-6 Settembre 2025, Scuola Superiore " Di Toppo Wassermann"',
      background: Piazza.src,
      paragraph: "Per ulteriori informazioni, contattaci a xcool@riasissu.it.",
      button: {
        text: "Scarica il regolamento",
        // link : "/xcool/formclosed",
        link: "https://docs.google.com/document/d/1s-zJGsPYkalBX8bdJcWRafC1iemn5NLFNGzwRJaZEg4/edit?usp=sharing"
      },
      secondaryButton: {
        text: "Info e Programma",
        link: "/xcool/info"
      },
      // secondaryButton: {
      //     text: "Iscriviti qui!",
      //     link: "/xcool/form/singleForm",
      //     // link : "/xcool/formclosed",
      // },
      tertiaryButton: {
        text: "Gironi e tabelloni",
        link: "/xcool/tabelloni"
        // link : "/xcool/formclosed",
      }
    }
  ], "client:component-hydration": "load", "client:component-path": "@modules/Hero", "client:component-export": "Hero" })} </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/index.astro";
const $$url = "/xcool";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
