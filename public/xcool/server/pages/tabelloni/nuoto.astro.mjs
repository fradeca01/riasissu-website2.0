import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import styled from '@emotion/styled';
import { T as Theme, M as MediaQuery, $ as $$Layout } from '../../chunks/Layout_DbmlHL6U.mjs';
import { F as FadeIn } from '../../chunks/FadeIn_Bcm_HfT1.mjs';
export { renderers } from '../../renderers.mjs';

const slM = new Proxy({"src":"/xcool/_astro/nuotoM.BeKPL5a6.webp","width":1200,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/nuotoM.webp";
							}
							
							return target[name];
						}
					});

const slF = new Proxy({"src":"/xcool/_astro/nuotovF.D-I1z92s.avif","width":1200,"height":630,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/nuotovF.avif";
							}
							
							return target[name];
						}
					});

const doM = new Proxy({"src":"/xcool/_astro/dorsoM.DNIpEPjv.webp","width":1024,"height":682,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/dorsoM.webp";
							}
							
							return target[name];
						}
					});

const raM = new Proxy({"src":"/xcool/_astro/ranaM.DyZX_FtP.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/ranaM.webp";
							}
							
							return target[name];
						}
					});

const doF = new Proxy({"src":"/xcool/_astro/dorsoF.DHYNXG5E.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/dorsoF.webp";
							}
							
							return target[name];
						}
					});

const raF = new Proxy({"src":"/xcool/_astro/rana.CLRcCd0B.webp","width":1280,"height":720,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/rana.webp";
							}
							
							return target[name];
						}
					});

const staffetta = new Proxy({"src":"/xcool/_astro/staffettaN.DjT6Epcy.webp","width":700,"height":469,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/staffettaN.webp";
							}
							
							return target[name];
						}
					});

const cards = [
  {
    href: "/xcool/tabelloni/nuoto/sl50M",
    imgSrc: slM.src,
    title: "50m Stile Libero Maschile",
    participants: "11 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/sl50F",
    imgSrc: slF.src,
    title: "50m Stile Libero Femminile",
    participants: "7 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/sl200M",
    imgSrc: slM.src,
    title: "200m Stile Libero Maschile",
    participants: "11 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/do50M",
    imgSrc: doM.src,
    title: "50m Dorso Maschile",
    participants: "5 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/ra50M",
    imgSrc: raM.src,
    title: "50m Rana Maschile",
    participants: "8 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/sl4x50",
    imgSrc: staffetta.src,
    title: "Staffetta 4x50m Stile Libero",
    participants: "4 partecipanti"
  },
  {
    href: "/xcool/tabelloni/nuoto/sl200F",
    imgSrc: slF.src,
    title: "200m Stile Libero Femminile",
    participants: "5 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/do50F",
    imgSrc: doF.src,
    title: "50m Dorso Femminile",
    participants: "5 partecipanti   "
  },
  {
    href: "/xcool/tabelloni/nuoto/ra50F",
    imgSrc: raF.src,
    title: "50m Rana Femminile",
    participants: "5 partecipanti   "
  }
];

const PageWrapper = styled.div`
  padding: 40px;
  background: ${Theme.secondary};
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${MediaQuery.max("md")} {
    grid-template-columns: 1fr;
  }
`;
const CardLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  max-width: 875px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  border-color: #94a3b87d;
  border-style: solid;
  border-width: 0.5px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;
const CardContent = styled.div`
  padding: 16px;
  background: ${Theme.secondary};
`;
const CardTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${Theme.primary};
`;
const CardDescription = styled.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`;
const CardGallery = () => /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(PageWrapper, { children: /* @__PURE__ */ jsx(Grid, { children: cards.map((c) => {
  const priority = c.title == "Salto in Alto Maschile" ? "high" : "auto";
  return /* @__PURE__ */ jsxs(CardLink, { href: c.href, children: [
    /* @__PURE__ */ jsx(
      CardImage,
      {
        src: c.imgSrc,
        alt: c.title,
        fetchPriority: priority
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: c.title }),
      /* @__PURE__ */ jsxs(CardDescription, { children: [
        /* @__PURE__ */ jsx("strong", { children: "Partecipanti: " }),
        c.participants
      ] })
    ] })
  ] }, c.href);
}) }) }) });

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "XCOOL 2025", "description": "Evento organizzato dalla Scuola Superiore Di Toppo Wassermann in collaborazione con RIASISSU", "headerClass": "custom-bg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content info-page page-404"> <center> <h1 class="page-title" style="margin-top: 200px;">Nuoto</h1> </center> ${renderComponent($$result2, "CardGallery", CardGallery, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/SwimmingModules/CardGallery", "client:component-export": "default" })} </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/nuoto/index.astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/tabelloni/nuoto/index.astro";
const $$url = "/xcool/tabelloni/nuoto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
