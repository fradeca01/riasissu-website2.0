import{n as r,j as o}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import"./index.Cj_FO6QK.js";import{M as h}from"./index.pRwWRSYz.js";import{T as s}from"./index.b-FexVqW.js";const m={src:"/xcool/_astro/medals.CCbxvd6v.png",width:3438,height:1209,format:"png"},g={src:"/xcool/_astro/tennis.BT-QX4kk.jpg",width:1280,height:720,format:"jpg"},e={src:"/xcool/_astro/chess.B6271E8d.jpeg",width:2560,height:1920,format:"jpg"},c={src:"/xcool/_astro/pingpong.XFSuFVQ9.jpg",width:1920,height:150,format:"jpg"},x={src:"/xcool/_astro/pallavolo.9pBslFVM.jpg",width:2880,height:937,format:"jpg"},f={src:"/xcool/_astro/chiosco.Cb9PfZRN.jpeg",width:277,height:182,format:"jpg"},j=[{href:"https://challonge.com/it/xcool_tennis/module",imgSrc:g.src,title:"Tennis",format:"Torneo a singola eliminazione.",participants:"8 squadre"},{href:"https://challonge.com/it/xcool_quadriglia/module",imgSrc:e.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"https://challonge.com/it/xcool_scacchi_blitz/module",imgSrc:e.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"https://challonge.com/it/xcool_scacchi_rapid/module",imgSrc:e.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"https://challonge.com/it/xcool_pingpong/module",imgSrc:c.src,title:"Tennis Tavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"https://challonge.com/it/xcool_padel/module",imgSrc:c.src,title:"Padel",format:"Eliminazione diretta.",participants:"19 squadre."},{href:"https://challonge.com/it/xcool_pallavolo/module",imgSrc:x.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/coppa_chiosco",imgSrc:f.src,title:"Coppa Chiosco",format:"Bevi più che puoi!",participants:"11 scuole."}],t={href:"/xcool/medals",imgSrc:m.src,title:"Medagliere",description:"Visualizza la classifica delle medaglie."},u=r.div`
  padding: 40px;
  background: ${s.secondary};
`,b=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${h.max("md")} {
    grid-template-columns: 1fr;
  }
`,l=r.a`
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
`,n=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,d=r.div`
  padding: 16px;
  background: ${s.secondary};
`,p=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${s.primary};
`,a=r.div`
  margin: 10px;
  font-size: 14px;
  color: #94a3b8;
`,T=()=>o.jsxs(u,{children:[o.jsx("center",{children:o.jsxs(l,{href:t.href,children:[o.jsx(n,{src:t.imgSrc,alt:t.title}),o.jsxs(d,{children:[o.jsx(p,{children:t.title}),o.jsx(a,{children:t.description})]})]},t.href)}),o.jsx("br",{}),o.jsx("br",{}),o.jsx("center",{children:o.jsx("h2",{children:"Tornei"})}),o.jsx("br",{}),o.jsx("br",{}),o.jsx(b,{children:j.map(i=>o.jsxs(l,{href:i.href,children:[o.jsx(n,{src:i.imgSrc,alt:i.title}),o.jsxs(d,{children:[o.jsx(p,{children:i.title}),o.jsxs(a,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),o.jsxs(a,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]})]})]},i.href))})]});export{T as default};
