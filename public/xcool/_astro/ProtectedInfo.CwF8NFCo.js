import{k as f,n as o,j as e}from"./emotion-styled.browser.esm.CkZZZ6ql.js";import{r as s}from"./index.Cj_FO6QK.js";import{I as v}from"./index.DHS_zWLM.js";import{Hero as b}from"./Hero.CAS_TXmE.js";import{C as z}from"./index.BH2u-2xE.js";import{B as r}from"./index.CqYbKP2T.js";import{FadeIn as t}from"./FadeIn.R4quaBKL.js";import{M as p}from"./index.pRwWRSYz.js";import"./index.BugKR0BO.js";import"./index.Dj1gqZJA.js";import"./index.13Nnxn1_.js";/* empty css                      */import"./styled.D-T4MXFt.js";const N=f`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,w=o.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${N} 0.8s linear infinite;
  margin: 20px auto;
`,y=o.div`                
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

        ${p.max("md")} {

        p  {
            margin-top: 10px;
            }


        }`;o.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${p.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`;const D=({})=>{const u="https://us-central1-riasissu-7c453.cloudfunctions.net/passwordProtectedPage?password=",[a,x]=s.useState(""),[l,c]=s.useState(!1),[d,n]=s.useState(null),[g,h]=s.useState(!1);s.useEffect(()=>{localStorage.getItem("authorized")==="true"&&h(!0)});const j=async()=>{if(a.trim()){c(!0),n(null);try{const i=await fetch(`${u}${a}`,{method:"GET",mode:"cors",credentials:"omit"});if(!i.ok)throw new Error("Password errata.");(await i.json()).redirectUrl?(h(!0),localStorage.setItem("authorized","true")):n("Errore: nessun URL ricevuto.")}catch(i){const m=i instanceof Error?i.message:"Errore sconosciuto";n(m||"Errore di connessione.")}finally{c(!1)}}};return g?e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
        `}),e.jsx(b,{heroType:"ParallaxImage",data:{content:{title:"Programma XCOOL 2025",paragraph:"Qua potrai trovare tutte le informazioni utili riguardanti le XCOOL 2025. Tutte le novità, gli aggiornamenti e le informazioni utili verranno pubblicate in questa pagina."}}}),e.jsxs(z,{children:[e.jsx(t,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"sidebar",children:e.jsxs("div",{className:"sticky",children:[e.jsx("h1",{children:"Le Squadre"}),e.jsx("h4",{children:"Squadre iscritte all'evento"})]})}),e.jsxs("div",{className:"side-content",children:[e.jsx("p",{children:"Al link qui sotto è possibile visualizzare l'elenco di tutte le squadre iscritte all'evento XCOOL 2025. Le squadre sono divise per sport:"}),e.jsx("div",{className:"button-container",children:e.jsx(r,{variant:"primary",showIcon:!0,target:"_blank",link:"https://docs.google.com/document/d/1BKdfkffQc8etiyxV_l39QZ6VS3RYNrPKlK8FbAHZREo/edit?usp=sharing",children:"SQUADRE ISCRITTE"})}),e.jsxs("p",{children:["Dopo la conclusione delle iscrizioni, sono state effettuate varie modifiche e aggiunte alle squadre. Per questo motivo, è possibile che alcune squadre siano differenti rispetto a quelle inizialmente iscritte. In particolare, in alcuni casi, sono state create squadre miste. Per qualsiasi dubbio o necessità, contattare il referente dello sport oppure inviare una mail a:",e.jsx("a",{href:"mailto://xcool@riasissu.it",children:"xcool@riasissu.it"}),"."]})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"sidebar",children:e.jsxs("div",{className:"sticky",children:[e.jsx("h1",{children:"I Luoghi"}),e.jsx("h4",{children:"Posizioni utili"})]})}),e.jsxs("div",{className:"side-content",children:[e.jsx("p",{children:"Al seguente link è possibile trovare una mappa con i luoghi dove si svolgeranno le gare e le attività dell'evento XCOOL 2025. La mappa include anche i punti di interesse come ristoranti bar consigliati, oltre ad altri servizi utili per i partecipanti:"}),e.jsx("p",{children:"nelle note potete trovare maggiori informazioni per ogni segnalino!"}),e.jsx("div",{className:"button-container",children:e.jsx(r,{variant:"primary",showIcon:!0,target:"_blank",link:"https://maps.app.goo.gl/kZZEk3YP4zzxH19G7",children:"Mappa posizioni utili"})})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"sidebar",children:e.jsxs("div",{className:"sticky",children:[e.jsx("h1",{children:"Gli Alloggi"}),e.jsx("h4",{children:"Distribuzione alloggi"})]})}),e.jsxs("div",{className:"side-content",children:[e.jsx("p",{children:"Nel documento sottostante è possibile visualizzare l'elenco degli alloggi e la distribuzione dei partecipanti. Gli alloggi sono stati organizzati in base alle disponibilità di strutture"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Tutti gli alloggi sono ",e.jsx("strong",{children:"prenotati per 4 notti, dal 3 al 6 settembre 2025 (notti del 3,4,5,6 settembre)"})]}),e.jsxs("li",{children:[e.jsx("strong",{children:"NON è possibile ritirarsi dall'evento"}),", in quanto la vostra presenza è stata garantita alle strutture (salvo, certamente, casi di comprovata necessità)."]}),e.jsxs("li",{children:["Tutti i prezzi sono calcolati ",e.jsx("strong",{children:"PER PERSONA A NOTTE"}),"."]}),e.jsxs("li",{children:["la Scuola Superiore di Udine ha prenotato gli alloggi nelle strutture: quanto a ",e.jsx("strong",{children:"pagamento"}),", ",e.jsx("strong",{children:"fatture"}),"e ",e.jsx("strong",{children:"rimborsi"})," vi muoverete in ",e.jsx("strong",{children:"autonomia"})," in base a come preferisce la vostra Scuola. Potrete quindi:",e.jsxs("ul",{children:[e.jsx("li",{children:"già contattare la struttura e saldare il conto (eventualmente anche 1 bonifico per Scuola)"}),e.jsx("li",{children:"saldare il conto quando soggiornerete a Udine, quindi dal 3 al 6 settembre 2025."})]})]}),e.jsxs("li",{children:["Nel contattare le strutture con colazione, avvisate NUOVAMENTE PER ",e.jsx("strong",{children:"INTOLLERANZE E/O ALLERGIE"}),"."]})]}),e.jsx("div",{className:"button-container",style:{marginBottom:"0rem"},children:e.jsx(r,{variant:"primary",showIcon:!0,target:"_blank",link:"https://docs.google.com/document/d/1QIerLjX8iBiLPjpeGLLW4YB5w5vjbWdmav9xsiccpfI/edit?usp=sharing",children:"Distribuzione alloggi"})})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"scroll-animation row",children:[e.jsx("div",{className:"sidebar",children:e.jsxs("div",{className:"sticky",children:[e.jsx("h1",{children:"Calendario"}),e.jsx("h4",{children:"Calendario dell'evento"})]})}),e.jsxs("div",{className:"side-content",children:[e.jsxs("p",{children:["L'innaugurazione dell'evento avrà luogo il ",e.jsx("strong",{children:"3 Settembre alle 17:00"})," alla ",e.jsx("strong",{children:"Loggia del Lionello"})," in centro a ",e.jsx("strong",{children:"Udine"}),"."]}),e.jsxs("p",{children:["L'evento si concluderà la notte del ",e.jsx("strong",{children:"6 Settembre"}),"."]})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"scroll-animation row",children:[e.jsx("div",{className:"sidebar",children:e.jsxs("div",{className:"sticky",children:[e.jsx("h1",{children:"Nuova Competizione"}),e.jsx("h4",{children:"Competizione ADMO"})]})}),e.jsxs("div",{className:"side-content",children:[e.jsxs("p",{children:["In collaborazione con ",e.jsx("strong",{children:"ADMO"}),", Associazione Donatori Midollo Osseo, verrà istituita una coppa che premerierà la Scuola più virtuosa, ossia con maggiori iscritti al ",e.jsx("strong",{children:"registro nazionale (IBMDR)"}),"!"]}),e.jsxs("p",{children:["Infatti, durante la cerimonia di inaugurazione verrà presentata l’attività di ",e.jsx("strong",{children:"ADMO"})," e, durante tutte le giornate delle ",e.jsx("strong",{children:"XCool"}),", sarà possibile tipizzarsi e così iscriversi!"]}),e.jsx(r,{variant:"primary",showIcon:!0,target:"_blank",link:"/xcool/ADMOXCOOL.pdf",children:"Scarica qua la locandina"})]})]})}),e.jsx(t,{children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"sidebar",children:e.jsx("div",{className:"sticky",children:e.jsx("h1",{children:"Contatti"})})}),e.jsxs("div",{className:"side-content contatti",children:[e.jsx("p",{children:"Per qualunque dubbio o domanda contattarci a:"}),e.jsx("p",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"mailto://xcool@riasissu.it",children:"xcool@riasissu.it"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto://maddalena.feltrin@riasissu.it",children:"maddalena.feltrin@riasissu.it"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto://francesco.decataldo@riasissu.it",children:"francesco.decataldo@riasissu.it"})}),e.jsx("li",{children:e.jsx("a",{href:"mailto://niccolo.gaspari@riasissu.it",children:"niccolo.gaspari@riasissu.it"})})]})})]})]})})]})]}):e.jsxs(y,{children:[e.jsx("h6",{children:"L'accesso ai dati è riservato ai partecipanti Xcool 2025. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx(v,{value:a,onChange:i=>x(i.target.value),placeholder:"Enter password...",type:"password"}),d&&e.jsx("p",{style:{color:"red"},children:d}),l&&e.jsx(w,{}),e.jsx(r,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:j,align:"center",children:l?"Verifica...":"Vai alle info!"})]})};export{D as ProtectedInfo};
