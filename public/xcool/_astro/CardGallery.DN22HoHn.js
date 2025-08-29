import{n as o,j as t}from"./emotion-styled.browser.esm.BazEBxOH.js";import"./index.Cj_FO6QK.js";import{M as s}from"./index.pRwWRSYz.js";import{T as i}from"./index.xlHDj9e3.js";import{FadeIn as n}from"./FadeIn.DcbDPFXb.js";import"./styled.Ub7titi9.js";const a={src:"/xcool/_astro/nuotoM.DSnVxVf0.jpg"},c={src:"/xcool/_astro/nuotovF.D-I1z92s.avif"},l={src:"/xcool/_astro/dorsoM.CqI2lCZ9.jpg"},p={src:"/xcool/_astro/ranaM.CAmRwRmG.jpg"},d={src:"/xcool/_astro/staffettaN.thj_Bom0.jpg"},x=[{href:"/xcool/tabelloni/nuoto/sl50M",imgSrc:a.src,title:"50m Stile Libero Maschile",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl50F",imgSrc:c.src,title:"50m Stile Libero Femminile",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl200M",imgSrc:a.src,title:"200m Stile Libero Maschile",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/nuoto/do50M",imgSrc:l.src,title:"50m Dorso Maschile",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/nuoto/ra50M",imgSrc:p.src,title:"50m Rana Maschile",participants:"9 partecipanti   "},{href:"/xcool/tabelloni/nuoto/sl4x50",imgSrc:d.src,title:"Staffetta 4x50m Stile Libero",participants:"9 partecipanti"}],m=o.div`
  padding: 40px;
  background: ${i.secondary};
`,h=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${s.max("md")} {
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
  background: ${i.secondary};
`,u=o.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${i.primary};
`,j=o.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,_=()=>t.jsx(n,{children:t.jsx(m,{children:t.jsx(h,{children:x.map(r=>{const e=r.title=="Salto in Alto Maschile"?"high":"auto";return t.jsxs(f,{href:r.href,children:[t.jsx(g,{src:r.imgSrc,alt:r.title,fetchPriority:e}),t.jsxs(b,{children:[t.jsx(u,{children:r.title}),t.jsxs(j,{children:[t.jsx("strong",{children:"Partecipanti: "}),r.participants]})]})]},r.href)})})})});export{_ as default};
