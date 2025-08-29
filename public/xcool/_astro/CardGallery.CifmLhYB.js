import{n as a,j as t}from"./emotion-styled.browser.esm.BazEBxOH.js";import"./index.Cj_FO6QK.js";import{M as s}from"./index.pRwWRSYz.js";import{T as o}from"./index.xlHDj9e3.js";import{FadeIn as n}from"./FadeIn.DcbDPFXb.js";import"./styled.Ub7titi9.js";const p={src:"/xcool/_astro/highjump.CqkVAsbo.jpeg"},m={src:"/xcool/_astro/highjumpF.BrRtwlhe.jpeg"},x={src:"/xcool/_astro/longM.BTM_n9Hz.jpeg"},h={src:"/xcool/_astro/longF.CvHGZARG.jpg"},d={src:"/xcool/_astro/pesoM.CsWPAp8A.avif"},g={src:"/xcool/_astro/pesoF.-0m5ebZV.jpeg"},c={src:"/xcool/_astro/vortex.DIJ4mz3R.webp"},e={src:"/xcool/_astro/corseM.CzCLWmd9.avif"},r={src:"/xcool/_astro/corseF.hA7dFChO.jpg"},f={src:"/xcool/_astro/staffettaM.C7xHEUSH.jpg"},b={src:"/xcool/_astro/staffettaF.Bap_50rD.jpg"},M={src:"/xcool/_astro/staffetta.EuIMb1a_.jpg"},F=[{href:"/xcool/tabelloni/atletica/alto/altoM",imgSrc:p.src,title:"Salto in Alto Maschile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/atletica/alto/altoF",imgSrc:m.src,title:"Salto in Alto Femminile",participants:"4 partecipanti   "},{href:"/xcool/tabelloni/atletica/lungoM",imgSrc:x.src,title:"Salto in Lungo Maschile",participants:"8 partecipanti   "},{href:"/xcool/tabelloni/atletica/lungoF",imgSrc:h.src,title:"Salto in Lungo Femminile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/atletica/pesoM",imgSrc:d.src,title:"Getto del Peso Maschile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/atletica/pesoF",imgSrc:g.src,title:"Getto del Peso Femminile",participants:"4 partecipanti   "},{href:"/xcool/tabelloni/atletica/vortexM",imgSrc:c.src,title:"Lancio del Vortex Maschile",participants:"13 partecipanti   "},{href:"/xcool/tabelloni/atletica/vortexF",imgSrc:c.src,title:"Lancio del Vortex Femminile",participants:"3 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/100mF_batterie",imgSrc:r.src,title:"100m Femminile - Batterie",participants:"14 partecipanti"},{href:"/xcool/tabelloni/atletica/corse/100mM_batterie",imgSrc:e.src,title:"100m Maschile - Batterie",participants:"23 partecipanti"},{href:"/xcool/tabelloni/atletica/corse/4x100mF",imgSrc:b.src,title:"4x100m Femminile",participants:"6 squadre"},{href:"/xcool/tabelloni/atletica/corse/4x100mM_batterie",imgSrc:f.src,title:"4x100m Maschile - Batterie",participants:"8 squadre"},{href:"/xcool/tabelloni/atletica/corse/4x400m",imgSrc:M.src,title:"4x400m Mista",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/400mF",imgSrc:r.src,title:"400m Femminile",participants:"6 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/400mM",imgSrc:e.src,title:"400m Maschile",participants:"15 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/1500mM",imgSrc:e.src,title:"1500m Maschile",participants:"20 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/1500mF",imgSrc:r.src,title:"1500m Femminile",participants:"8 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/5000mM",imgSrc:e.src,title:"5000m Maschile",participants:"24 partecipanti   "},{href:"/xcool/tabelloni/atletica/corse/5000mF",imgSrc:r.src,title:"5000m Femminile",participants:"7 partecipanti   "}],S=a.div`
  padding: 40px;
  background: ${o.secondary};
`,j=a.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${s.max("md")} {
    grid-template-columns: 1fr;
  }
`,u=a.a`
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 12px;
  overflow: hidden;
  max-width: 875px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  border-color: #94a3b87d;
  border-style: solid;
  border-width: 0.5px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
  }
`,_=a.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,v=a.div`
  padding: 16px;
  background: ${o.secondary};
`,C=a.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${o.primary};
`,y=a.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,k=()=>t.jsx(n,{children:t.jsx(S,{children:t.jsx(j,{children:F.map(i=>{const l=i.title=="Salto in Alto Maschile"?"high":"auto";return t.jsxs(u,{href:i.href,children:[t.jsx(_,{src:i.imgSrc,alt:i.title,fetchPriority:l}),t.jsxs(v,{children:[t.jsx(C,{children:i.title}),t.jsxs(y,{children:[t.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href)})})})});export{k as default};
