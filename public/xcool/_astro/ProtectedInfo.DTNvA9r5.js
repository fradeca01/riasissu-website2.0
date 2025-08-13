import{n as r,j as i,k as l}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as s}from"./index.Cj_FO6QK.js";import"./styled.DyB2B84X.js";import{C as c,H as d}from"./Hero.DgsS8uIm.js";import{M as o}from"./index.pRwWRSYz.js";import{B as e}from"./index.3_3JwDa_.js";import{FadeIn as t}from"./FadeIn.B7yE1otk.js";import"./index.C4C5hPPZ.js";import"./index.D4A3strI.js";/* empty css                      */import"./styled.SpwDvkbu.js";const m=r.section`
    padding: 100px 0;


    ${o.max("lg")} {
        padding: 60px 0;
    }
`,h=r.div`
    text-align: center;

    h2,
    h3,
    h4,
    h5 {
        margin-bottom: 10px;
        font-weight: 200;
    }

    figure {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        &,
        img {
            border-radius: 10px;

            width: 100%;
            height: auto;
            object-fit: cover;
            max-width: 970px;
            margin: 0 auto;
        }
    }
`,p=({children:a,...n})=>a?i.jsx(m,{...n,children:i.jsx(c,{children:i.jsx(h,{children:a})})}):null,x=l`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;r.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${x} 0.8s linear infinite;
  margin: 20px auto;
`;r.div`                
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        // overflow: hidden;
        height: 100%;
        h2, h3, h4 {
            margin-bottom: 10px;
            font-size: 20px;
            line-height: 2;
        }

        p {
            margin-top: 20px;
            }

        ${o.max("md")} {

        p  {
            margin-top: 10px;
            }


        }`;r.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${o.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`;const I=({})=>{s.useState(""),s.useState(!1),s.useState(null);const[a,n]=s.useState(!1);return s.useEffect(()=>{localStorage.getItem("authorized")==="true"&&n(!0)}),i.jsxs(i.Fragment,{children:[i.jsx("style",{children:`
    .button-container {
        margin-bottom: 3rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .row {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 1.5rem;

        margin: 100px auto;

        /* padding: 0 50px; */

        @media (min-width: 768px) {
            grid-template-columns: repeat(8, minmax(0, 1fr));
            padding: 0 50px;
        }
        @media (min-width: 1024px) {
            grid-template-columns: repeat(12, minmax(0, 1fr));
        }
    }

    .sidebar {
        grid-column: span 4 / span 4;

        @media (min-width: 1024px) {
            grid-column: span 3 / span 3;
        }
    }

    .side-content {
        grid-column: span 4 / span 4;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;

        @media (min-width: 1024px) {
            grid-column: span 9 / span 9;
        }
    }

    .sticky {
        width: 100%;
    }

    h4 {
        margin-bottom: 0px;
        font-size: 1.5rem;
    }

    @media (min-width: 1024px) {
        .sticky {
            position: sticky;
            top: 10rem;

            h1,
            h2,
            h3,
            h4 {
                text-align: left;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }

    h1 {
        color: white;
        text-align: center;
        font-size: 2rem;
        margin-bottom: 0.3rem;
    }

    li {
        text-align: left;
    }

    @media (min-width: 768px) {
        .contatti li {
            font-size: 1.2rem;
        }
    }
    /* .contatti li {
        font-size: 1.2rem;
    } */

    li a,
    p a {
        color: #abdbe3;
    }
        `}),i.jsx(d,{heroType:"ParallaxImage",data:{content:{title:"Programma XCOOL 2025",paragraph:"Qui potrai trovare tutte le informazioni utili riguardanti le XCOOL 2025. Tutte le novità, gli aggiornamenti e le informazioni utili verranno pubblicate in questa pagina."}}}),i.jsxs(p,{children:[i.jsx(t,{children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"sidebar",children:i.jsxs("div",{className:"sticky",children:[i.jsx("h1",{children:"Programma"}),i.jsx("h4",{children:"Calendario provvisorio"})]})}),i.jsxs("div",{className:"side-content",children:[i.jsxs("p",{children:["Al link qui sotto è possibile scaricare il programma delle ",i.jsx("strong",{children:"XCool 2025"})," in formato ",i.jsx("strong",{children:"PDF"}),":"]}),i.jsx("div",{className:"button-container",children:i.jsx(e,{variant:"primary",showIcon:!0,target:"_blank",link:"https://riasissu.sharepoint.com/:x:/s/xcool/EYcvQSNEmINFq-Uz3TQxflcBSZnTaGScmzb7ObFlYli0lQ",children:"Programma PDF"})}),i.jsxs("p",{children:["e il link al file ",i.jsx("strong",{children:"EXCEL"})," aggiornato con le ultime modifiche:"]}),i.jsx("div",{className:"button-container",children:i.jsx(e,{variant:"primary",showIcon:!0,target:"_blank",link:"https://riasissu.sharepoint.com/:x:/s/xcool/EYcvQSNEmINFq-Uz3TQxflcBSZnTaGScmzb7ObFlYli0lQ",children:"Calendario Excel"})}),i.jsx("p",{children:"Il programma è provvisorio e potrebbe subire modifiche. Si consiglia di verificare i propri impegni e di segnalare eventuali criticità."})]})]})}),i.jsx(t,{children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"sidebar",children:i.jsxs("div",{className:"sticky",children:[i.jsx("h1",{children:"Gironi e Tornei"}),i.jsx("h4",{children:"Tabelloni con i risultati"})]})}),i.jsxs("div",{className:"side-content",children:[i.jsxs("p",{children:["Al link trovate, divisi per sport, tutti",i.jsxs("ul",{children:[i.jsx("li",{children:"i gironi"}),i.jsx("li",{children:"i risultati dei tornei: cercheremo di tenere aggiornati i risultati il più possibile!"})]})]}),i.jsx("div",{className:"button-container",children:i.jsx(e,{variant:"primary",showIcon:!0,link:"/xcool/tabelloni",children:"TABELLONI"})})]})]})}),i.jsx(t,{children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"sidebar",children:i.jsxs("div",{className:"sticky",children:[i.jsx("h1",{children:"Le Squadre"}),i.jsx("h4",{children:"Squadre iscritte all'evento"})]})}),i.jsxs("div",{className:"side-content",children:[i.jsx("p",{children:"Al link qui sotto è possibile visualizzare l'elenco di tutte le squadre iscritte all'evento XCOOL 2025. Le squadre sono divise per sport:"}),i.jsx("div",{className:"button-container",children:i.jsx(e,{variant:"primary",showIcon:!0,target:"_blank",link:"https://docs.google.com/document/d/1BKdfkffQc8etiyxV_l39QZ6VS3RYNrPKlK8FbAHZREo/edit?usp=sharing",children:"SQUADRE ISCRITTE"})}),i.jsxs("p",{children:["Dopo la conclusione delle iscrizioni, sono state effettuate varie modifiche e aggiunte alle squadre. Per questo motivo, è possibile che alcune squadre siano differenti rispetto a quelle inizialmente iscritte. In particolare, in alcuni casi, sono state create squadre miste. Per qualsiasi dubbio o necessità, contattare il referente dello sport oppure inviare una mail a:",i.jsx("a",{href:"mailto://xcool@riasissu.it",children:"xcool@riasissu.it"}),"."]})]})]})}),i.jsx(t,{children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"sidebar",children:i.jsxs("div",{className:"sticky",children:[i.jsx("h1",{children:"I Luoghi"}),i.jsx("h4",{children:"Posizioni utili"})]})}),i.jsxs("div",{className:"side-content",children:[i.jsx("p",{children:"Al seguente link è possibile trovare una mappa con i luoghi dove si svolgeranno le gare e le attività dell'evento XCOOL 2025. La mappa include anche i punti di interesse come ristoranti bar consigliati, oltre ad altri servizi utili per i partecipanti:"}),i.jsx("p",{children:"nelle note potete trovare maggiori informazioni per ogni segnalino!"}),i.jsx("div",{className:"button-container",children:i.jsx(e,{variant:"primary",showIcon:!0,target:"_blank",link:"https://maps.app.goo.gl/kZZEk3YP4zzxH19G7",children:"Mappa posizioni utili"})})]})]})}),i.jsx(t,{children:i.jsxs("div",{className:"scroll-animation row",children:[i.jsx("div",{className:"sidebar",children:i.jsxs("div",{className:"sticky",children:[i.jsx("h1",{children:"Nuova Competizione"}),i.jsx("h4",{children:"Competizione ADMO"})]})}),i.jsxs("div",{className:"side-content",children:[i.jsxs("p",{children:["In collaborazione con ",i.jsx("strong",{children:"ADMO"}),", Associazione Donatori Midollo Osseo, verrà istituita una coppa che premerierà la Scuola più virtuosa, ossia con maggiori iscritti al ",i.jsx("strong",{children:"registro nazionale (IBMDR)"}),"!"]}),i.jsxs("p",{children:["Infatti, durante la cerimonia di inaugurazione verrà presentata l’attività di ",i.jsx("strong",{children:"ADMO"})," e, durante tutte le giornate delle ",i.jsx("strong",{children:"XCool"}),", sarà possibile tipizzarsi e così iscriversi!"]}),i.jsx(e,{variant:"primary",showIcon:!0,target:"_blank",link:"/xcool/ADMOXCOOL.pdf",children:"Scarica qui la locandina"})]})]})}),i.jsx(t,{children:i.jsxs("div",{className:"row",children:[i.jsx("div",{className:"sidebar",children:i.jsx("div",{className:"sticky",children:i.jsx("h1",{children:"Contatti"})})}),i.jsxs("div",{className:"side-content contatti",children:[i.jsx("p",{children:"Per qualunque dubbio o domanda contattarci a:"}),i.jsx("p",{children:i.jsxs("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"mailto://xcool@riasissu.it",children:"xcool@riasissu.it"})}),i.jsx("li",{children:i.jsx("a",{href:"mailto://maddalena.feltrin@riasissu.it",children:"maddalena.feltrin@riasissu.it"})}),i.jsx("li",{children:i.jsx("a",{href:"mailto://francesco.decataldo@riasissu.it",children:"francesco.decataldo@riasissu.it"})}),i.jsx("li",{children:i.jsx("a",{href:"mailto://niccolo.gaspari@riasissu.it",children:"niccolo.gaspari@riasissu.it"})})]})})]})]})})]})]})};export{I as ProtectedInfo};
