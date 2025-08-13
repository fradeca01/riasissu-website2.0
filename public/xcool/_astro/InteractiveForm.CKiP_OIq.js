import{j as e,k as I,n as x}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as i}from"./index.Cj_FO6QK.js";import{I as v,a as w,b as C,c as E,d as k}from"./styled.DyB2B84X.js";import{B as h}from"./index.3_3JwDa_.js";import{M as j}from"./index.pRwWRSYz.js";import"./index.C4C5hPPZ.js";const B=({value:d,onChange:p,placeholder:r,variant:s,bgText:o,type:u,boxAsLink:a,href:c,target:l})=>{const n=a?E:k;return i.useState(""),e.jsxs(n,{$variant:s,href:c,target:l,children:[s==="background-text"&&o&&e.jsx(v,{children:o}),e.jsx(w,{children:e.jsx(C,{type:u,value:d,onChange:p,placeholder:r})})]})},b=I`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,_=x.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${b} 0.8s linear infinite;
  margin: 20px auto;
`,g=x.div`                
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
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

        ${j.max("md")} {

        p  {
            margin-top: 10px;
            }


        }`;x.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${j.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`;const N=({url:d,showButtons:p=!1,form:r})=>{const s=r==="singleForm"?"https://forms.office.com/e/KfpnEWdDwv":"https://forms.office.com/e/Z5zitkZLGv",[o,u]=i.useState(""),[a,c]=i.useState(!1),[l,n]=i.useState(null),[S,m]=i.useState(!1);i.useEffect(()=>{localStorage.getItem(r)==="true"&&m(!0)},[r]);const y=async()=>{if(o.trim()){c(!0),n(null);try{const t=await fetch(`${d}${o}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");(await t.json()).redirectUrl?(m(!0),localStorage.setItem(r,"true")):n("Errore: nessun URL ricevuto.")}catch(t){const f=t instanceof Error?t.message:"Errore sconosciuto";n(f||"Errore di connessione.")}finally{c(!1)}}};return S?e.jsxs(g,{children:[e.jsx("p",{children:"Clicca qui per compilare il form e iscriverti:"}),e.jsx(h,{variant:"secondary",link:s,showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Vai al form"}),p&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):"}),e.jsx("p",{children:"La documentazione si trova nel link in alto a destra."}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTA"}),": ricordarsi di rinominare i file come segue:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Certificato medico: ",e.jsx("strong",{children:"Nome_Cognome_Scuola_Certificato.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa con certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_CUS.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa senza certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_EASYCUS.pdf"})]})]}),e.jsx("h2",{children:"Inviare documentazione mancante a xcool@riasissu.it"})]})]}):e.jsxs(g,{children:[e.jsx("h6",{children:"L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx(B,{value:o,onChange:t=>u(t.target.value),placeholder:"Enter password...",type:"password"}),l&&e.jsx("p",{style:{color:"red"},children:l}),a&&e.jsx(_,{}),e.jsx(h,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:y,align:"center",children:a?"Verifica...":"Vai al form!"})]})};export{N as default};
