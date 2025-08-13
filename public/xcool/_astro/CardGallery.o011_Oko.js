import{n as r,j as o}from"./emotion-styled.browser.esm.CkZZZ6ql.js";import"./index.Cj_FO6QK.js";import{M as n}from"./index.pRwWRSYz.js";import{T as t}from"./index.BugKR0BO.js";import{FadeIn as l}from"./FadeIn.R4quaBKL.js";import"./styled.D-T4MXFt.js";const s={src:"/xcool/_astro/tennis.BT-QX4kk.jpg",width:1280,height:720,format:"jpg"},a={src:"/xcool/_astro/chess.B6271E8d.jpeg",width:2560,height:1920,format:"jpg"},d={src:"/xcool/_astro/pingpong.XFSuFVQ9.jpg",width:1920,height:150,format:"jpg"},p={src:"/xcool/_astro/padel.DRd1Op4z.jpeg",width:275,height:183,format:"jpg"},h={src:"/xcool/_astro/pallavolo.9pBslFVM.jpg",width:2880,height:937,format:"jpg"},m={src:"/xcool/_astro/chiosco.Cb9PfZRN.jpeg",width:277,height:182,format:"jpg"},e={src:"/xcool/_astro/calcio.DkTwQN8z.jpg",width:3456,height:2304,format:"jpg",orientation:1},x={src:"/xcool/_astro/beachvolley.DWX1p-RP.jpeg",width:2048,height:1536,format:"jpg",orientation:1},g={src:"/xcool/_astro/biliardino.CfsPCTyA.jpg",width:2272,height:1704,format:"jpg",orientation:1},f={src:"/xcool/_astro/Debate.EnEm-ukX.jpg",width:778,height:491,format:"jpg",orientation:1},j={src:"/xcool/_astro/basket.az4rYyH-.jpg",width:1920,height:234,format:"jpg"},b=[{href:"/xcool/calendario/xcool_tennis",imgSrc:s.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/calendario/xcool_quadriglia",imgSrc:a.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/calendario/xcool_scacchi_blitz",imgSrc:a.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/calendario/xcool_scacchi_rapid",imgSrc:a.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/calendario/xcool_pingpong",imgSrc:d.src,title:"Tennistavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/calendario/xcool_padel",imgSrc:p.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/calendario/xcool_pallavolo",imgSrc:h.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/calendario/coppa_chiosco",imgSrc:m.src,title:"Coppa Chiosco",format:"Bevi più che puoi!",participants:"11 scuole."},{href:"/xcool/calendario/xcool_calcio_maschile",imgSrc:e.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/calendario/xcool_calcio_femminile",imgSrc:e.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/calendario/xcool_beachvolley",imgSrc:x.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/calendario/xcool_basket",imgSrc:j.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/calendario/xcool_dibattito",imgSrc:f.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/calendario/xcool_biliardino",imgSrc:g.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."}],_=r.div`
  padding: 40px;
  background: ${t.secondary};
`,u=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${n.max("md")} {
    grid-template-columns: 1fr;
  }
`,z=r.a`
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
`,v=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,w=r.div`
  padding: 16px;
  background: ${t.secondary};
`,S=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${t.primary};
`,c=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,G=()=>o.jsxs(l,{children:[o.jsx("center",{children:o.jsx("h2",{children:"Tabelloni e Gironi"})}),o.jsx(_,{children:o.jsx(u,{children:b.map(i=>o.jsxs(z,{href:i.href,children:[o.jsx(v,{src:i.imgSrc,alt:i.title}),o.jsxs(w,{children:[o.jsx(S,{children:i.title}),o.jsxs(c,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),o.jsxs(c,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href))})})]});export{G as default};
