import{n as r,j as o}from"./emotion-styled.browser.esm.BDB7qZAm.js";import"./index.BZ7XLWeh.js";import{M as x}from"./index.pRwWRSYz.js";import{T as c}from"./index.CVzmzG4m.js";import{FadeIn as h}from"./FadeIn.CD5aF4yO.js";import"./styled.D87Pw30T.js";const b={src:"/xcool/_astro/medals.UJ-vpkB_.webp"},f={src:"/xcool/_astro/tennis.DIaUFq7G.webp"},a={src:"/xcool/_astro/chess.hO3H6no6.webp"},g={src:"/xcool/_astro/pingpong.D_QnpbGZ.webp"},_={src:"/xcool/_astro/padel.BLzSu1XT.webp"},u={src:"/xcool/_astro/pallavolo.CrmPCldw.webp"},l={src:"/xcool/_astro/calcio.IuwuZTP8.webp"},S={src:"/xcool/_astro/beachvolley.0hk5WDF0.webp"},w={src:"/xcool/_astro/biliardino.DqaF_tno.webp"},z={src:"/xcool/_astro/Debate.CsX0WeEx.webp"},v={src:"/xcool/_astro/basket.CmHphmvV.webp"},j={src:"/xcool/_astro/atletica.C23vrCCi.webp"},y={src:"/xcool/_astro/swim.CdPNIL_I.webp"},C={src:"/xcool/_astro/justdance.B6BHDzyb.webp"},T={src:"/xcool/_astro/mariokart.YrdBK1qS.webp"},D={src:"/xcool/_astro/marioparty.BPJbhXpY.webp"},q={src:"/xcool/_astro/briscola.BQKL5LjD.webp"},B={src:"/xcool/_astro/admo.Dg-vRq-x.webp"},k=[{href:"/xcool/tabelloni/atletica",imgSrc:j.src,title:"Atletica",description:"19 competizioni."},{href:"/xcool/tabelloni/nuoto",imgSrc:y.src,title:"Nuoto",description:"6 competizioni."},{href:"/xcool/tabelloni/xcool_tennis",imgSrc:f.src,title:"Tennis",format:"Torneo a eliminazione diretta.",participants:"8 squadre"},{href:"/xcool/tabelloni/xcool_quadriglia",imgSrc:a.src,title:"Scacchi - Quadriglia",format:"Torneo svizzero a 6 round.",participants:"7 squadre"},{href:"/xcool/tabelloni/xcool_scacchi_blitz",imgSrc:a.src,title:"Scacchi - Rapid",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_scacchi_rapid",imgSrc:a.src,title:"Scacchi - Blitz",format:"Torneo svizzero a 6 round.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_scacchi_classic",imgSrc:a.src,title:"Scacchi - Classic",format:"Torneo svizzero.",participants:"TBD"},{href:"/xcool/tabelloni/xcool_pingpong",imgSrc:g.src,title:"Tennis Tavolo",format:"Gironi (6 -> 1), poi eliminazione diretta.",participants:"48 giocatori."},{href:"/xcool/tabelloni/xcool_padel",imgSrc:_.src,title:"Padel",format:"Torneo a eliminazione diretta.",participants:"19 squadre."},{href:"/xcool/tabelloni/xcool_pallavolo",imgSrc:u.src,title:"Pallavolo",format:"Gironi (4 -> 2), poi eliminazione diretta.",participants:"13 squadre."},{href:"/xcool/tabelloni/xcool_calcio_maschile",imgSrc:l.src,title:"Calcio a 5 Maschile",format:"Gironi (5 -> 4), poi eliminazione diretta.",participants:"10 squadre."},{href:"/xcool/tabelloni/xcool_calcio_femminile",imgSrc:l.src,title:"Calcio a 5 Femminile",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_beachvolley",imgSrc:S.src,title:"Beach Volley",format:"Gironi (3 -> 1), poi eliminazione diretta.",participants:"36 squadre."},{href:"/xcool/tabelloni/xcool_basket",imgSrc:v.src,title:"Basket",format:"Gironi (3 -> 2), poi eliminazione diretta.",participants:"6 squadre."},{href:"/xcool/tabelloni/xcool_dibattito",imgSrc:z.src,title:"Dibattito Competitivo",format:"Torneo all'italiana.",participants:"3 squadre."},{href:"/xcool/tabelloni/xcool_biliardino",imgSrc:w.src,title:"Biliardino",format:"Gironi (4->1), poi eliminazione diretta.",participants:"48 squadre."},{href:"/xcool/tabelloni/xcool_justdance",imgSrc:C.src,title:"Just Dance",format:"Free for All, 6 persone a round.",participants:"48 partecipanti."},{href:"/xcool/tabelloni/xcool_mariokart",imgSrc:T.src,title:"Mario Kart",format:"Free for all, round da 4 persone.",participants:"48 partecipanti"},{href:"/xcool/tabelloni/xcool_marioparty",imgSrc:D.src,title:"Mario Party",format:"Free for all, round da 4 persone.",participants:"20 partecipanti"},{href:"/xcool/tabelloni/xcool_briscola",imgSrc:q.src,title:"Briscola",format:"Gironi all'italiana (5/6 -> 1), poi eliminazione diretta.",participants:"53 partecipanti."},{href:"/xcool/tabelloni/coppa_admo",imgSrc:B.src,title:"Coppa ADMO",format:"Regolamento sul sito RIASISSU.",participants:"11 scuole."}],t={href:"tabelloni/medals",imgSrc:b.src,title:"Medagliere"},G=r.div`
  padding: 40px;
  background: ${c.secondary};
`,P=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;

  ${x.max("md")} {
    grid-template-columns: 1fr;
  }
`,s=r.a`
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
`,n=r.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`,p=r.div`
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
`,F=r.div`
  margin-bottom: 48px;
  max-width: 810px;
  margin-left: auto;
  margin-right: auto;
`,$=()=>o.jsx(h,{children:o.jsxs(G,{children:[o.jsx(F,{children:o.jsxs(s,{href:t.href,children:[o.jsx(n,{src:t.imgSrc,alt:t.title,fetchPriority:"high"}),o.jsx(p,{children:o.jsx(d,{children:t.title})})]},t.href)}),o.jsx(P,{children:k.map(i=>{const m=i.title=="Atletica"?"high":"auto";return o.jsxs(s,{href:i.href,children:[o.jsx(n,{src:i.imgSrc,alt:i.title,fetchPriority:m}),o.jsxs(p,{children:[o.jsx(d,{children:i.title}),i.format&&o.jsxs(e,{children:[o.jsx("strong",{children:"Formato: "}),i.format]}),i.participants&&o.jsxs(e,{children:[o.jsx("strong",{children:"Partecipanti: "}),i.participants]}),i.description&&o.jsxs(e,{children:[o.jsx("strong",{children:"Descrizione: "}),i.description]})]})]},i.href)})})]})});export{$ as default};
