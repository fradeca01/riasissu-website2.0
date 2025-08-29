import{n as o,j as t}from"./emotion-styled.browser.esm.BazEBxOH.js";import"./index.Cj_FO6QK.js";import{M as c}from"./index.pRwWRSYz.js";import{T as a}from"./index.xlHDj9e3.js";import{FadeIn as l}from"./FadeIn.DcbDPFXb.js";import"./styled.Ub7titi9.js";const r={src:"/xcool/_astro/nuotoM.DSnVxVf0.jpg"},p={src:"/xcool/_astro/nuotovF.D-I1z92s.avif"},e={src:"/xcool/_astro/dorsoM.CqI2lCZ9.jpg"},n={src:"/xcool/_astro/ranaM.CAmRwRmG.jpg"},d={src:"/xcool/_astro/staffettaN.thj_Bom0.jpg"},m=[{href:"/xcool/tabelloni/nuoto/sl50M",imgSrc:r.src,title:"50m Stile Libero Maschile",participants:"11 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl50F",imgSrc:p.src,title:"50m Stile Libero Femminile",participants:"7 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl200M",imgSrc:r.src,title:"200m Stile Libero Maschile",participants:"11 partecipanti   "},{href:"/xcool/tabelloni/nuoto/do50M",imgSrc:e.src,title:"50m Dorso Maschile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/nuoto/ra50M",imgSrc:n.src,title:"50m Rana Maschile",participants:"8 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl4x50",imgSrc:d.src,title:"Staffetta 4x50m Stile Libero",participants:"4 partecipanti"},{href:"/xcool/tabelloni/nuoto/sl200F",imgSrc:r.src,title:"200m Stile Libero Femminile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/nuoto/do50F",imgSrc:e.src,title:"50m Dorso Femminile",participants:"5 partecipanti   "},{href:"/xcool/tabelloni/nuoto/ra50F",imgSrc:n.src,title:"50m Rana Femminile",participants:"5 partecipanti   "}],x=o.div`
  padding: 40px;
  background: ${a.secondary};
`,h=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${c.max("md")} {
    grid-template-columns: 1fr;
  }
`,f=o.a`
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
`,g=o.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,b=o.div`
  padding: 16px;
  background: ${a.secondary};
`,u=o.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${a.primary};
`,S=o.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,w=()=>t.jsx(l,{children:t.jsx(x,{children:t.jsx(h,{children:m.map(i=>{const s=i.title=="Salto in Alto Maschile"?"high":"auto";return t.jsxs(f,{href:i.href,children:[t.jsx(g,{src:i.imgSrc,alt:i.title,fetchPriority:s}),t.jsxs(b,{children:[t.jsx(u,{children:i.title}),t.jsxs(S,{children:[t.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href)})})})});export{w as default};
