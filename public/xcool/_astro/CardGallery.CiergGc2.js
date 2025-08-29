import{n as r,j as t}from"./emotion-styled.browser.esm.BazEBxOH.js";import"./index.Cj_FO6QK.js";import{M as c}from"./index.pRwWRSYz.js";import{T as i}from"./index.CQZsg08O.js";import{FadeIn as n}from"./FadeIn.-4wmsK1k.js";import"./styled.jyRyv5E4.js";const a={src:"/xcool/_astro/nuotoM.BeKPL5a6.webp"},e={src:"/xcool/_astro/nuotovF.D-I1z92s.avif"},l={src:"/xcool/_astro/dorsoM.DNIpEPjv.webp"},p={src:"/xcool/_astro/ranaM.DyZX_FtP.webp"},d={src:"/xcool/_astro/dorsoF.DHYNXG5E.webp"},m={src:"/xcool/_astro/rana.CLRcCd0B.webp"},x={src:"/xcool/_astro/staffettaN.DjT6Epcy.webp"},h=[{href:"/xcool/tabelloni/nuoto/sl50M",imgSrc:a.src,title:"50m Stile Libero Maschile",participants:"11 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl50F",imgSrc:e.src,title:"50m Stile Libero Femminile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl200M",imgSrc:a.src,title:"200m Stile Libero Maschile",participants:"11 partecipanti   "},{href:"/xcool/tabelloni/nuoto/do50M",imgSrc:l.src,title:"50m Dorso Maschile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/nuoto/ra50M",imgSrc:p.src,title:"50m Rana Maschile",participants:"8 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl4x50",imgSrc:x.src,title:"Staffetta 4x50m Stile Libero",participants:"4 partecipanti"},{href:"/xcool/tabelloni/nuoto/sl200F",imgSrc:e.src,title:"200m Stile Libero Femminile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/nuoto/do50F",imgSrc:d.src,title:"50m Dorso Femminile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/nuoto/ra50F",imgSrc:m.src,title:"50m Rana Femminile",participants:"5 partecipanti   "}],b=r.div`
  padding: 40px;
  background: ${i.secondary};
`,f=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${c.max("md")} {
    grid-template-columns: 1fr;
  }
`,g=r.a`
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
`,u=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,S=r.div`
  padding: 16px;
  background: ${i.secondary};
`,M=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${i.primary};
`,F=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,L=()=>t.jsx(n,{children:t.jsx(b,{children:t.jsx(f,{children:h.map(o=>{const s=o.title=="Salto in Alto Maschile"?"high":"auto";return t.jsxs(g,{href:o.href,children:[t.jsx(u,{src:o.imgSrc,alt:o.title,fetchPriority:s}),t.jsxs(S,{children:[t.jsx(M,{children:o.title}),t.jsxs(F,{children:[t.jsx("strong",{children:"Partecipanti: "}),o.participants]})]})]},o.href)})})})});export{L as default};
