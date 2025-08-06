import{n as e,j as i}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import"./index.Cj_FO6QK.js";import{M as d}from"./index.pRwWRSYz.js";import{T as t}from"./index.b-FexVqW.js";const p=[{href:"https://challonge.com/it/xcool_tennis/module",imgSrc:"/src/assets/tennis.jpg",title:"Tennis",format:"Torneo a singola eliminazione.",participants:"8 squadre"},{href:"https://challonge.com/it/xcool_quadriglia/module",imgSrc:"/src/assets/chess.jpeg",title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"https://challonge.com/it/xcool_scacchi_blitz/module",imgSrc:"/src/assets/chess.jpeg",title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"https://challonge.com/it/xcool_scacchi_rapid/module",imgSrc:"/src/assets/chess.jpeg",title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"https://challonge.com/it/xcool_pingpong/module",imgSrc:"/src/assets/pingpong.jpg",title:"Tennis Tavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"https://challonge.com/it/xcool_padel/module",imgSrc:"/src/assets/padel.jpeg",title:"Padel",format:"Eliminazione diretta.",participants:"19 squadre."},{href:"https://challonge.com/it/xcool_pallavolo/module",imgSrc:"/src/assets/pallavolo.jpg",title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/coppa_chiosco",imgSrc:"/src/assets/chiosco.jpeg",title:"Coppa Chiosco",format:"Bevi più che puoi!",participants:"11 scuole."}],o={href:"/xcool/medals",imgSrc:"/src/assets/medals.png",title:"Medagliere",description:"Visualizza la classifica delle medaglie."},h=e.div`
  padding: 40px;
  background: ${t.secondary};
`,m=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${d.max("md")} {
    grid-template-columns: 1fr;
  }
`,a=e.a`
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
`,c=e.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,l=e.div`
  padding: 16px;
  background: ${t.secondary};
`,n=e.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${t.primary};
`,s=e.div`
  margin: 10px;
  font-size: 14px;
  color: #94a3b8;
`,u=()=>i.jsxs(h,{children:[i.jsx("center",{children:i.jsxs(a,{href:o.href,children:[i.jsx(c,{src:o.imgSrc,alt:o.title}),i.jsxs(l,{children:[i.jsx(n,{children:o.title}),i.jsx(s,{children:o.description})]})]},o.href)}),i.jsx("br",{}),i.jsx("br",{}),i.jsx("center",{children:i.jsx("h2",{children:"Tornei"})}),i.jsx("br",{}),i.jsx("br",{}),i.jsx(m,{children:p.map(r=>i.jsxs(a,{href:r.href,children:[i.jsx(c,{src:r.imgSrc,alt:r.title}),i.jsxs(l,{children:[i.jsx(n,{children:r.title}),i.jsxs(s,{children:[i.jsx("strong",{children:"Formato: "}),r.format]}),i.jsxs(s,{children:[i.jsx("strong",{children:"Partecipanti: "}),r.participants]})]})]},r.href))})]});export{u as default};
