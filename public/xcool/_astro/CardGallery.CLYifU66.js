import{n as r,j as o}from"./emotion-styled.browser.esm.BDB7qZAm.js";import"./index.BZ7XLWeh.js";import{M as n}from"./index.pRwWRSYz.js";import{T as e}from"./index.CVzmzG4m.js";import{FadeIn as s}from"./FadeIn.CD5aF4yO.js";import"./styled.D87Pw30T.js";const p={src:"/xcool/_astro/tennis.DIaUFq7G.webp"},t={src:"/xcool/_astro/chess.hO3H6no6.webp"},d={src:"/xcool/_astro/pingpong.D_QnpbGZ.webp"},m={src:"/xcool/_astro/padel.BLzSu1XT.webp"},x={src:"/xcool/_astro/pallavolo.CrmPCldw.webp"},c={src:"/xcool/_astro/calcio.IuwuZTP8.webp"},h={src:"/xcool/_astro/beachvolley.0hk5WDF0.webp"},b={src:"/xcool/_astro/biliardino.DqaF_tno.webp"},f={src:"/xcool/_astro/Debate.CsX0WeEx.webp"},g={src:"/xcool/_astro/basket.CmHphmvV.webp"},_={src:"/xcool/_astro/atletica.C23vrCCi.webp"},u={src:"/xcool/_astro/swim.CdPNIL_I.webp"},z={src:"/xcool/_astro/justdance.B6BHDzyb.webp"},w={src:"/xcool/_astro/mariokart.DyVVPpu1.jpg"},S={src:"/xcool/_astro/marioparty.BnzLijPQ.jpg"},j={src:"/xcool/_astro/briscola.DZZWIjO3.jpg"},y=[{href:"/xcool/tabelloni/atletica",imgSrc:_.src,title:"Atletica",description:"19 competizioni."},{href:"/xcool/tabelloni/nuoto",imgSrc:u.src,title:"Nuoto",description:"6 competizioni."},{href:"/xcool/tabelloni/xcool_tennis",imgSrc:p.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/tabelloni/xcool_quadriglia",imgSrc:t.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/tabelloni/xcool_scacchi_blitz",imgSrc:t.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_scacchi_rapid",imgSrc:t.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_pingpong",imgSrc:d.src,title:"Tennis Tavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/tabelloni/xcool_padel",imgSrc:m.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/tabelloni/xcool_pallavolo",imgSrc:x.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/tabelloni/xcool_calcio_maschile",imgSrc:c.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/tabelloni/xcool_calcio_femminile",imgSrc:c.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_beachvolley",imgSrc:h.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/tabelloni/xcool_basket",imgSrc:g.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/tabelloni/xcool_dibattito",imgSrc:f.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_biliardino",imgSrc:b.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."},{href:"/xcool/tabelloni/xcool_justdance",imgSrc:z.src,title:"Just Dance",format:"Free for All, 6 persone a round.",participants:"48 partecipanti."},{href:"/xcool/tabelloni/xcool_mariokart",imgSrc:w.src,title:"Mario Kart",format:"Free for all, round da 4 persone.",participants:"48 partecipanti"},{href:"/xcool/tabelloni/xcool_marioparty",imgSrc:S.src,title:"Mario Party",format:"Free for all, round da 4 persone.",participants:"20 partecipanti"},{href:"/xcool/tabelloni/xcool_briscola",imgSrc:j.src,title:"Briscola",format:"Gironi all'italiana (5/6 -> 1), poi eliminazione diretta.",participants:"53 partecipanti."}],v=r.div`
  padding: 40px;
  background: ${e.secondary};
`,C=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${n.max("md")} {
    grid-template-columns: 1fr;
  }
`,T=r.a`
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
`,D=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,q=r.div`
  padding: 16px;
  background: ${e.secondary};
`,k=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${e.primary};
`,a=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,L=()=>o.jsx(s,{children:o.jsx(v,{children:o.jsx(C,{children:y.map(i=>{const l=i.title=="Atletica"?"high":"auto";return o.jsxs(T,{href:i.href,children:[o.jsx(D,{src:i.imgSrc,alt:i.title,fetchPriority:l}),o.jsxs(q,{children:[o.jsx(k,{children:i.title}),i.format&&o.jsxs(a,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),i.participants&&o.jsxs(a,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]}),i.description&&o.jsxs(a,{children:[o.jsx("strong",{children:"Descrizione: "}),i.description]})]})]},i.href)})})})});export{L as default};
