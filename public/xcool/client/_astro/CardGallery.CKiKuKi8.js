import{n as a,j as t}from"./emotion-styled.browser.esm.BDB7qZAm.js";import"./index.BZ7XLWeh.js";import{M as s}from"./index.pRwWRSYz.js";import{T as o}from"./index.CVzmzG4m.js";import{FadeIn as n}from"./FadeIn.CD5aF4yO.js";import"./styled.D87Pw30T.js";const p={src:"/xcool/_astro/altoM.BqpmfGNr.webp"},m={src:"/xcool/_astro/altoF.B6D27wJi.webp"},x={src:"/xcool/_astro/longM.Dk04vM_w.webp"},d={src:"/xcool/_astro/longF.CBGbO3Ha.webp"},h={src:"/xcool/_astro/pesoM.CsWPAp8A.avif"},f={src:"/xcool/_astro/pesoF.Ppflnup1.webp"},c={src:"/xcool/_astro/vortex.DIJ4mz3R.webp"},e={src:"/xcool/_astro/corseM.CzCLWmd9.avif"},r={src:"/xcool/_astro/corseF.BGpLdy7k.webp"},b={src:"/xcool/_astro/staffettaM.CsHdVAcN.webp"},g={src:"/xcool/_astro/staffettaF.n88u-MWn.webp"},M={src:"/xcool/_astro/staffetta.BEvMvM-v.webp"},F=[{href:"/xcool/tabelloni/atletica/alto/altoM",imgSrc:p.src,title:"Salto in Alto Maschile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/atletica/alto/altoF",imgSrc:m.src,title:"Salto in Alto Femminile",participants:"3 partecipanti   "},{href:"/xcool/tabelloni/atletica/lungoM",imgSrc:x.src,title:"Salto in Lungo Maschile",participants:"8 partecipanti   "},{href:"/xcool/tabelloni/atletica/lungoF",imgSrc:d.src,title:"Salto in Lungo Femminile",participants:"6 partecipanti   "},{href:"/xcool/tabelloni/atletica/pesoM",imgSrc:h.src,title:"Getto del Peso Maschile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/atletica/pesoF",imgSrc:f.src,title:"Getto del Peso Femminile",participants:"4 partecipanti   "},{href:"/xcool/tabelloni/atletica/vortexM",imgSrc:c.src,title:"Lancio del Vortex Maschile",participants:"12 partecipanti   "},{href:"/xcool/tabelloni/atletica/vortexF",imgSrc:c.src,title:"Lancio del Vortex Femminile",participants:"3 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/100mF_batterie",imgSrc:r.src,title:"100m Femminile - Batterie",participants:"14 partecipanti"},{href:"/xcool/tabelloni/atletica/corse/100mM_batterie",imgSrc:e.src,title:"100m Maschile - Batterie",participants:"21 partecipanti"},{href:"/xcool/tabelloni/atletica/corse/4x100mF",imgSrc:g.src,title:"4x100m Femminile",participants:"6 squadre"},{href:"/xcool/tabelloni/atletica/corse/4x100mM_batterie",imgSrc:b.src,title:"4x100m Maschile - Batterie",participants:"8 squadre"},{href:"/xcool/tabelloni/atletica/corse/4x400m",imgSrc:M.src,title:"4x400m Mista",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/400mF",imgSrc:r.src,title:"400m Femminile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/400mM",imgSrc:e.src,title:"400m Maschile",participants:"16 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/1500mM",imgSrc:e.src,title:"1500m Maschile",participants:"20 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/1500mF",imgSrc:r.src,title:"1500m Femminile",participants:"8 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/5000mM",imgSrc:e.src,title:"5000m Maschile",participants:"25 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/5000mF",imgSrc:r.src,title:"5000m Femminile",participants:"7 partecipanti   "}],S=a.div`
  padding: 40px;
  background: ${o.secondary};
`,u=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${s.max("md")} {
    grid-template-columns: 1fr;
  }
`,w=a.a`
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
`,v=a.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,_=a.div`
  padding: 16px;
  background: ${o.secondary};
`,j=a.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${o.primary};
`,y=a.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,A=()=>t.jsx(n,{children:t.jsx(S,{children:t.jsx(u,{children:F.map(i=>{const l=i.title=="Salto in Alto Maschile"?"high":"auto";return t.jsxs(w,{href:i.href,children:[t.jsx(v,{src:i.imgSrc,alt:i.title,fetchPriority:l}),t.jsxs(_,{children:[t.jsx(j,{children:i.title}),t.jsxs(y,{children:[t.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href)})})})});export{A as default};
