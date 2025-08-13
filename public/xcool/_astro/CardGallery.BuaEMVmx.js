import{n as r,j as o}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import"./index.Cj_FO6QK.js";import{M as n}from"./index.pRwWRSYz.js";import{T as t}from"./index.C4C5hPPZ.js";import{FadeIn as s}from"./FadeIn.B7yE1otk.js";import"./styled.SpwDvkbu.js";const d={src:"/xcool/_astro/tennis.DIaUFq7G.webp",width:1280,height:720,format:"webp"},a={src:"/xcool/_astro/chess.hO3H6no6.webp",width:400,height:300,format:"webp"},p={src:"/xcool/_astro/pingpong.D_QnpbGZ.webp",width:449,height:300,format:"webp"},h={src:"/xcool/_astro/padel.BLzSu1XT.webp",width:749,height:500,format:"webp"},m={src:"/xcool/_astro/pallavolo.CrmPCldw.webp",width:922,height:300,format:"webp"},x={src:"/xcool/_astro/chiosco.DUkaSAW5.webp",width:612,height:408,format:"webp"},e={src:"/xcool/_astro/calcio.IuwuZTP8.webp",width:450,height:300,format:"webp"},f={src:"/xcool/_astro/beachvolley.0hk5WDF0.webp",width:400,height:300,format:"webp"},g={src:"/xcool/_astro/biliardino.DqaF_tno.webp",width:400,height:300,format:"webp"},b={src:"/xcool/_astro/Debate.CsX0WeEx.webp",width:475,height:300,format:"webp"},w={src:"/xcool/_astro/basket.CmHphmvV.webp",width:2462,height:300,format:"webp"},u=[{href:"/xcool/calendario/xcool_tennis",imgSrc:d.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/calendario/xcool_quadriglia",imgSrc:a.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/calendario/xcool_scacchi_blitz",imgSrc:a.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/calendario/xcool_scacchi_rapid",imgSrc:a.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/calendario/xcool_pingpong",imgSrc:p.src,title:"Tennistavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/calendario/xcool_padel",imgSrc:h.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/calendario/xcool_pallavolo",imgSrc:m.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/calendario/coppa_chiosco",imgSrc:x.src,title:"Coppa Chiosco",format:"Bevi più che puoi!",participants:"11 scuole."},{href:"/xcool/calendario/xcool_calcio_maschile",imgSrc:e.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/calendario/xcool_calcio_femminile",imgSrc:e.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/calendario/xcool_beachvolley",imgSrc:f.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/calendario/xcool_basket",imgSrc:w.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/calendario/xcool_dibattito",imgSrc:b.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/calendario/xcool_biliardino",imgSrc:g.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."}],_=r.div`
  padding: 40px;
  background: ${t.secondary};
`,v=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${n.max("md")} {
    grid-template-columns: 1fr;
  }
`,S=r.a`
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
`,z=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,T=r.div`
  padding: 16px;
  background: ${t.secondary};
`,j=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${t.primary};
`,c=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,B=()=>o.jsxs(s,{children:[o.jsx("center",{children:o.jsx("h2",{children:"Tabelloni e Gironi"})}),o.jsx(_,{children:o.jsx(v,{children:u.map(i=>{const l=i.title=="Tennis"?"high":"auto";return o.jsxs(S,{href:i.href,children:[o.jsx(z,{src:i.imgSrc,alt:i.title,fetchPriority:l}),o.jsxs(T,{children:[o.jsx(j,{children:i.title}),o.jsxs(c,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),o.jsxs(c,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href)})})})]});export{B as default};
