import{n as r,j as o}from"./emotion-styled.browser.esm.BazEBxOH.js";import"./index.Cj_FO6QK.js";import{M as n}from"./index.pRwWRSYz.js";import{T as e}from"./index.xlHDj9e3.js";import{FadeIn as s}from"./FadeIn.DcbDPFXb.js";import"./styled.Ub7titi9.js";const p={src:"/xcool/_astro/atletica.BlLsr0gN.jpg"},d={src:"/xcool/_astro/tennis.DIaUFq7G.webp"},t={src:"/xcool/_astro/chess.hO3H6no6.webp"},m={src:"/xcool/_astro/pingpong.D_QnpbGZ.webp"},x={src:"/xcool/_astro/padel.BLzSu1XT.webp"},h={src:"/xcool/_astro/pallavolo.CrmPCldw.webp"},c={src:"/xcool/_astro/calcio.IuwuZTP8.webp"},b={src:"/xcool/_astro/beachvolley.0hk5WDF0.webp"},g={src:"/xcool/_astro/biliardino.DqaF_tno.webp"},f={src:"/xcool/_astro/Debate.CsX0WeEx.webp"},u={src:"/xcool/_astro/basket.CmHphmvV.webp"},_={src:"/xcool/_astro/swim.Bqh06yRb.jpg"},z=[{href:"/xcool/tabelloni/xcool_tennis",imgSrc:d.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/tabelloni/xcool_quadriglia",imgSrc:t.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/tabelloni/xcool_scacchi_blitz",imgSrc:t.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_scacchi_rapid",imgSrc:t.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_pingpong",imgSrc:m.src,title:"Tennistavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/tabelloni/xcool_padel",imgSrc:x.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/tabelloni/xcool_pallavolo",imgSrc:h.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/tabelloni/xcool_calcio_maschile",imgSrc:c.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/tabelloni/xcool_calcio_femminile",imgSrc:c.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_beachvolley",imgSrc:b.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/tabelloni/xcool_basket",imgSrc:u.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/tabelloni/xcool_dibattito",imgSrc:f.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_biliardino",imgSrc:g.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."},{href:"/xcool/tabelloni/atletica",imgSrc:p.src,title:"Atletica",description:"19 competizioni."},{href:"/xcool/tabelloni/nuoto",imgSrc:_.src,title:"Nuoto",description:"6 competizioni."}],w=r.div`
  padding: 40px;
  background: ${e.secondary};
`,S=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${n.max("md")} {
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
`,j=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,y=r.div`
  padding: 16px;
  background: ${e.secondary};
`,T=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${e.primary};
`,a=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`;r.h2`
margin-top:200px;
`;const P=()=>o.jsx(s,{children:o.jsx(w,{children:o.jsx(S,{children:z.map(i=>{const l=i.title=="Tennis"?"high":"auto";return o.jsxs(v,{href:i.href,children:[o.jsx(j,{src:i.imgSrc,alt:i.title,fetchPriority:l}),o.jsxs(y,{children:[o.jsx(T,{children:i.title}),i.format&&o.jsxs(a,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),i.participants&&o.jsxs(a,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]}),i.description&&o.jsxs(a,{children:[o.jsx("strong",{children:"Descrizione: "}),i.description]})]})]},i.href)})})})});export{P as default};
