import{n as r,j as o}from"./emotion-styled.browser.esm.BDB7qZAm.js";import"./index.BZ7XLWeh.js";import{M as h}from"./index.pRwWRSYz.js";import{T as c}from"./index.CVzmzG4m.js";import{FadeIn as b}from"./FadeIn.CD5aF4yO.js";import"./styled.D87Pw30T.js";const f={src:"/xcool/_astro/medals.UJ-vpkB_.webp"},g={src:"/xcool/_astro/tennis.DIaUFq7G.webp"},a={src:"/xcool/_astro/chess.hO3H6no6.webp"},_={src:"/xcool/_astro/pingpong.D_QnpbGZ.webp"},u={src:"/xcool/_astro/padel.BLzSu1XT.webp"},S={src:"/xcool/_astro/pallavolo.CrmPCldw.webp"},l={src:"/xcool/_astro/calcio.IuwuZTP8.webp"},w={src:"/xcool/_astro/beachvolley.0hk5WDF0.webp"},z={src:"/xcool/_astro/biliardino.DqaF_tno.webp"},j={src:"/xcool/_astro/Debate.CsX0WeEx.webp"},v={src:"/xcool/_astro/basket.CmHphmvV.webp"},C={src:"/xcool/_astro/atletica.C23vrCCi.webp"},y={src:"/xcool/_astro/swim.CdPNIL_I.webp"},T={src:"/xcool/_astro/justdance.B6BHDzyb.webp"},k={src:"/xcool/_astro/mariokart.YrdBK1qS.webp"},D={src:"/xcool/_astro/marioparty.BPJbhXpY.webp"},q={src:"/xcool/_astro/briscola.BQKL5LjD.webp"},B={src:"/xcool/_astro/admo.Dg-vRq-x.webp"},s={src:"/xcool/_astro/pokemon.C6l62zTj.jpg"},G=[{href:"/xcool/tabelloni/atletica",imgSrc:C.src,title:"Atletica",description:"19 competizioni."},{href:"/xcool/tabelloni/nuoto",imgSrc:y.src,title:"Nuoto",description:"6 competizioni."},{href:"/xcool/tabelloni/xcool_tennis",imgSrc:g.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/tabelloni/xcool_quadriglia",imgSrc:a.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/tabelloni/xcool_scacchi_blitz",imgSrc:a.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_scacchi_rapid",imgSrc:a.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_scacchi_classic",imgSrc:a.src,title:"Scacchi - Classic",format:"Torneo svizzero.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_pingpong",imgSrc:_.src,title:"Tennis Tavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/tabelloni/xcool_padel",imgSrc:u.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/tabelloni/xcool_pallavolo",imgSrc:S.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/tabelloni/xcool_calcio_maschile",imgSrc:l.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/tabelloni/xcool_calcio_femminile",imgSrc:l.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_beachvolley",imgSrc:w.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/tabelloni/xcool_basket",imgSrc:v.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/tabelloni/xcool_dibattito",imgSrc:j.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_biliardino",imgSrc:z.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."},{href:"/xcool/tabelloni/xcool_justdance",imgSrc:T.src,title:"Just Dance",format:"Free for All, 6 persone a round.",participants:"48 partecipanti."},{href:"/xcool/tabelloni/xcool_mariokart",imgSrc:k.src,title:"Mario Kart",format:"Free for all, round da 4 persone.",participants:"48 partecipanti"},{href:"/xcool/tabelloni/xcool_marioparty",imgSrc:D.src,title:"Mario Party",format:"Free for all, round da 4 persone.",participants:"20 partecipanti"},{href:"/xcool/tabelloni/xcool_briscola",imgSrc:q.src,title:"Briscola",format:"Gironi all'italiana (5/6 -> 1), poi eliminazione diretta.",participants:"53 partecipanti."},{href:"/xcool/tabelloni/coppa_admo",imgSrc:B.src,title:"Coppa ADMO",format:"Regolamento sul sito RIASISSU.",participants:"11 scuole."},{href:"/xcool/tabelloni/xcool_pokemon12",imgSrc:s.src,title:"Pokémon VGC12",format:"",participants:"12 partecipanti."},{href:"/xcool/tabelloni/xcool_pokemon25",imgSrc:s.src,title:"Pokémon VGC25",format:"",participants:"12 partecipanti."}],t={href:"/xcool/tabelloni/medals",imgSrc:f.src,title:"Medagliere"},P=r.div`
  padding: 40px;
  background: ${c.secondary};
`,F=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${h.max("md")} {
    grid-template-columns: 1fr;
  }
`,n=r.a`
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
`,p=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,m=r.div`
  padding: 16px;
  background: ${c.secondary};
`,d=r.h3`
  margin: 0 0 8px;
  font-size: 20px;
  line-height: 1.2;
  color: ${c.primary};
`,e=r.div`
  margin: 2px;
  font-size: 14px;
  color: #cbcacd;
`,I=r.div`
  margin-bottom: 48px;
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
`,$=()=>o.jsx(b,{children:o.jsxs(P,{children:[o.jsx(I,{children:o.jsxs(n,{href:t.href,children:[o.jsx(p,{src:t.imgSrc,alt:t.title,fetchPriority:"high"}),o.jsx(m,{children:o.jsx(d,{children:t.title})})]},t.href)}),o.jsx(F,{children:G.map(i=>{const x=i.title=="Atletica"?"high":"auto";return o.jsxs(n,{href:i.href,children:[o.jsx(p,{src:i.imgSrc,alt:i.title,fetchPriority:x}),o.jsxs(m,{children:[o.jsx(d,{children:i.title}),i.format&&o.jsxs(e,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),i.participants&&o.jsxs(e,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]}),i.description&&o.jsxs(e,{children:[o.jsx("strong",{children:"Descrizione: "}),i.description]})]})]},i.href)})})]})});export{$ as default};
