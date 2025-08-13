import{n as r,j as o}from"./emotion-styled.browser.esm.CkZZZ6ql.js";import"./index.Cj_FO6QK.js";import{M as l}from"./index.pRwWRSYz.js";import{T as t}from"./index.BugKR0BO.js";import{FadeIn as n}from"./FadeIn.R4quaBKL.js";import"./styled.D-T4MXFt.js";const s={src:"/xcool/_astro/tennis.DIaUFq7G.webp",width:1280,height:720,format:"webp"},a={src:"/xcool/_astro/chess.B1o40Wwb.webp",width:2560,height:1920,format:"webp"},d={src:"/xcool/_astro/pingpong.Cg5DXWSA.webp",width:1920,height:150,format:"webp"},p={src:"/xcool/_astro/padel.C1uQLC3v.webp",width:275,height:183,format:"webp"},h={src:"/xcool/_astro/pallavolo.CNrafrac.webp",width:2880,height:937,format:"webp"},m={src:"/xcool/_astro/chiosco.BGYaF1y0.webp",width:277,height:182,format:"webp"},e={src:"/xcool/_astro/calcio.DHxfOsxq.webp",width:3456,height:2304,format:"webp"},x={src:"/xcool/_astro/beachvolley.BWFigQGy.webp",width:2048,height:1536,format:"webp"},f={src:"/xcool/_astro/biliardino.Cx2FWlXO.webp",width:2272,height:1704,format:"webp"},g={src:"/xcool/_astro/Debate.DImtlX3_.webp",width:778,height:491,format:"webp"},b={src:"/xcool/_astro/basket.nn1_hBc-.webp",width:1920,height:234,format:"webp"},w=[{href:"/xcool/calendario/xcool_tennis",imgSrc:s.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/calendario/xcool_quadriglia",imgSrc:a.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/calendario/xcool_scacchi_blitz",imgSrc:a.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/calendario/xcool_scacchi_rapid",imgSrc:a.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/calendario/xcool_pingpong",imgSrc:d.src,title:"Tennistavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/calendario/xcool_padel",imgSrc:p.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/calendario/xcool_pallavolo",imgSrc:h.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/calendario/coppa_chiosco",imgSrc:m.src,title:"Coppa Chiosco",format:"Bevi più che puoi!",participants:"11 scuole."},{href:"/xcool/calendario/xcool_calcio_maschile",imgSrc:e.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/calendario/xcool_calcio_femminile",imgSrc:e.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/calendario/xcool_beachvolley",imgSrc:x.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/calendario/xcool_basket",imgSrc:b.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/calendario/xcool_dibattito",imgSrc:g.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/calendario/xcool_biliardino",imgSrc:f.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."}],_=r.div`
  padding: 40px;
  background: ${t.secondary};
`,u=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${l.max("md")} {
    grid-template-columns: 1fr;
  }
`,v=r.a`
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
`,S=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,z=r.div`
  padding: 16px;
  background: ${t.secondary};
`,C=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${t.primary};
`,c=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,D=()=>o.jsxs(n,{children:[o.jsx("center",{children:o.jsx("h2",{children:"Tabelloni e Gironi"})}),o.jsx(_,{children:o.jsx(u,{children:w.map(i=>o.jsxs(v,{href:i.href,children:[o.jsx(S,{src:i.imgSrc,alt:i.title}),o.jsxs(z,{children:[o.jsx(C,{children:i.title}),o.jsxs(c,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),o.jsxs(c,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href))})})]});export{D as default};
