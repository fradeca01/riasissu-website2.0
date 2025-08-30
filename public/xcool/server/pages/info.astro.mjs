import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DbmlHL6U.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { H as Hero } from '../chunks/index_B9BWbPCF.mjs';
import { C as ContentSection } from '../chunks/index_DFtjxm_b.mjs';
import { B as Button } from '../chunks/index_OA8fBTz-.mjs';
import { F as FadeIn } from '../chunks/FadeIn_Bcm_HfT1.mjs';
export { renderers } from '../renderers.mjs';

const ProtectedInfo = ({}) => {
  const [text, setText] = useState("");
  const [_authorized, setAuthorized] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("authorized");
    if (saved === "true") {
      setAuthorized(true);
    }
  });
  {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("style", { children: `
    .button-container {
        margin-bottom: 3rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.5rem;

        margin: 100px auto;

        /* padding: 0 50px; */

        @media (min-width: 768px) {
            grid-template-columns: repeat(8, minmax(0, 1fr));
            padding: 0 50px;
        }
        @media (min-width: 1024px) {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }
    }

    .sidebar {
        grid-column: span 4 / span 4;

        @media (min-width: 1024px) {
            grid-column: span 3 / span 3;
        }
    }

    .side-content {
        grid-column: span 4 / span 4;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;

        @media (min-width: 1024px) {
            grid-column: span 9 / span 9;
        }
    }

    .sticky {
        width: 100%;
    }

    h4 {
        margin-bottom: 0px;
        font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
        .sticky {
            position: sticky;
            top: 10rem;

            h1,
            h2,
            h3,
            h4 {
                text-align: left;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }

    h1 {
        color: white;
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0.3rem;
    }

    li {
        text-align: left;
    }

    @media (min-width: 768px) {
        .contatti li {
            font-size: 1.2rem;
        }
    }
    /* .contatti li {
        font-size: 1.2rem;
    } */

    li a,
    p a {
        color: #abdbe3;
    }
        ` }),
      /* @__PURE__ */ jsx(
        Hero,
        {
          heroType: "ParallaxImage",
          data: {
            content: {
              title: "Programma XCOOL 2025",
              paragraph: "Qui potrai trovare tutte le informazioni utili riguardanti le XCOOL 2025. Tutte le novità, gli aggiornamenti e le informazioni utili verranno pubblicate in questa pagina."
            }
          }
        }
      ),
      /* @__PURE__ */ jsxs(ContentSection, { children: [
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsxs("div", { className: "sticky", children: [
            /* @__PURE__ */ jsx("h1", { children: "Programma" }),
            /* @__PURE__ */ jsx("h4", { children: "Calendario provvisorio" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Al link qui sotto è possibile scaricare il programma delle",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "XCool 2025" }),
              " in formato ",
              /* @__PURE__ */ jsx("strong", { children: "PDF" }),
              ":"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                target: "_blank",
                link: "https://drive.google.com/file/d/1_ZLPzCCCSA1KSC9QvzBhctQ7MK_0DH0P/view?usp=sharing",
                children: "Programma PDF"
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { children: [
              "e il link al file ",
              /* @__PURE__ */ jsx("strong", { children: "EXCEL" }),
              " aggiornato con le ultime modifiche:"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                target: "_blank",
                link: "https://riasissu.sharepoint.com/:x:/s/xcool/EYcvQSNEmINFq-Uz3TQxflcBSZnTaGScmzb7ObFlYli0lQ",
                children: "Calendario Excel"
              }
            ) }),
            /* @__PURE__ */ jsx("p", { children: "Il programma è provvisorio e potrebbe subire modifiche. Si consiglia di verificare i propri impegni e di segnalare eventuali criticità." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsxs("div", { className: "sticky", children: [
            /* @__PURE__ */ jsx("h1", { children: "Volantino" }),
            /* @__PURE__ */ jsx("h4", { children: "Le dati importanti dell'evento." })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Al link qui sotto è possibile scaricare il volantino delle",
              " ",
              /* @__PURE__ */ jsx("strong", { children: "XCool 2025" }),
              " in formato ",
              /* @__PURE__ */ jsx("strong", { children: "PDF" }),
              ", con tute le date e i luoghi importanti dell'evento:"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                target: "_blank",
                link: "https://riasissu.sharepoint.com/:b:/s/xcool/ETvbx8b0gqVApP_hepI4zJ4Bs4Hsqt6nsucc31mYd1y0uQ?e=L5etdZ",
                children: "Volantino PDF"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsxs("div", { className: "sticky", children: [
            /* @__PURE__ */ jsx("h1", { children: "Gironi e Tornei" }),
            /* @__PURE__ */ jsx("h4", { children: "Tabelloni con i risultati" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Al link qui sotto potete trovare, divisi per sport:",
              /* @__PURE__ */ jsxs("ul", { children: [
                /* @__PURE__ */ jsxs("li", { children: [
                  "I ",
                  /* @__PURE__ */ jsx("strong", { children: "gironi" })
                ] }),
                /* @__PURE__ */ jsxs("li", { children: [
                  "i risultati dei tornei ",
                  /* @__PURE__ */ jsx("strong", { children: "LIVE" }),
                  ": cercheremo di tenere aggiornati i risultati il più possibile durante la competizione"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                link: "/xcool/tabelloni",
                children: "TABELLONI"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsxs("div", { className: "sticky", children: [
            /* @__PURE__ */ jsx("h1", { children: "Le Squadre" }),
            /* @__PURE__ */ jsx("h4", { children: "Squadre iscritte all'evento" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content", children: [
            /* @__PURE__ */ jsx("p", { children: "Al link qui sotto è possibile visualizzare l'elenco di tutte le squadre iscritte all'evento XCOOL 2025. Le squadre sono divise per sport:" }),
            /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                target: "_blank",
                link: "https://docs.google.com/document/d/1BKdfkffQc8etiyxV_l39QZ6VS3RYNrPKlK8FbAHZREo/edit?usp=sharing",
                children: "SQUADRE ISCRITTE"
              }
            ) }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Dopo la conclusione delle iscrizioni, sono state effettuate varie modifiche e aggiunte alle squadre. Per questo motivo, è possibile che alcune squadre siano differenti rispetto a quelle inizialmente iscritte. In particolare, in alcuni casi, sono state create squadre miste. Per qualsiasi dubbio o necessità, contattare il referente dello sport oppure inviare una mail a:",
              /* @__PURE__ */ jsx("a", { href: "mailto://xcool@riasissu.it", children: "xcool@riasissu.it" }),
              "."
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsxs("div", { className: "sticky", children: [
            /* @__PURE__ */ jsx("h1", { children: "I Luoghi" }),
            /* @__PURE__ */ jsx("h4", { children: "Posizioni utili" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content", children: [
            /* @__PURE__ */ jsx("p", { children: "Al seguente link è possibile trovare una mappa con i luoghi dove si svolgeranno le gare e le attività dell'evento XCOOL 2025. La mappa include anche i punti di interesse come ristoranti bar consigliati, oltre ad altri servizi utili per i partecipanti:" }),
            /* @__PURE__ */ jsx("p", { children: "nelle note potete trovare maggiori informazioni per ogni segnalino!" }),
            /* @__PURE__ */ jsx("div", { className: "button-container", children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                target: "_blank",
                link: "https://maps.app.goo.gl/kZZEk3YP4zzxH19G7",
                children: "Mappa posizioni utili"
              }
            ) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "scroll-animation row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsxs("div", { className: "sticky", children: [
            /* @__PURE__ */ jsx("h1", { children: "Nuova Competizione" }),
            /* @__PURE__ */ jsx("h4", { children: "Competizione ADMO" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "In collaborazione con ",
              /* @__PURE__ */ jsx("strong", { children: "ADMO" }),
              ", Associazione Donatori Midollo Osseo, verrà istituita una coppa che premerierà la Scuola più virtuosa, ossia con maggiori iscritti al ",
              /* @__PURE__ */ jsx("strong", { children: "registro nazionale (IBMDR)" }),
              "!"
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Infatti, durante la cerimonia di inaugurazione verrà presentata l’attività di ",
              /* @__PURE__ */ jsx("strong", { children: "ADMO" }),
              " e, durante tutte le giornate delle ",
              /* @__PURE__ */ jsx("strong", { children: "XCool" }),
              ", sarà possibile tipizzarsi e così iscriversi!"
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "primary",
                showIcon: true,
                target: "_blank",
                link: "/xcool/ADMOXCOOL.pdf",
                children: "Scarica qui la locandina"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs("div", { className: "row", children: [
          /* @__PURE__ */ jsx("div", { className: "sidebar", children: /* @__PURE__ */ jsx("div", { className: "sticky", children: /* @__PURE__ */ jsx("h1", { children: "Contatti" }) }) }),
          /* @__PURE__ */ jsxs("div", { className: "side-content contatti", children: [
            /* @__PURE__ */ jsx("p", { children: "Per qualunque dubbio o domanda contattarci a:" }),
            /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto://xcool@riasissu.it", children: "xcool@riasissu.it" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto://maddalena.feltrin@riasissu.it", children: "maddalena.feltrin@riasissu.it" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto://francesco.decataldo@riasissu.it", children: "francesco.decataldo@riasissu.it" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto://niccolo.gaspari@riasissu.it", children: "niccolo.gaspari@riasissu.it" }) })
            ] }) })
          ] })
        ] }) })
      ] })
    ] });
  }
};

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Evento organizzato dalla Scuola Superiore Di Toppo Wassermann in collaborazione con RIASISSU", "headerClass": "custom-bg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> ${renderComponent($$result2, "ProtectedInfo", ProtectedInfo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ProtectedInfo", "client:component-export": "ProtectedInfo" })} </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/info.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/info.astro";
const $$url = "/xcool/info";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Info,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
