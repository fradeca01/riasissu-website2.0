import{j as e,k as I,n as m}from"./emotion-styled.browser.esm.BazEBxOH.js";import{r as n}from"./index.Cj_FO6QK.js";import{I as v,a as w,b as C,c as E,d as k}from"./styled.DFdm9DVt.js";import{B as g}from"./index.B-8IYzES.js";import{M as S}from"./index.pRwWRSYz.js";import"./index.xlHDj9e3.js";const B=({value:d,onChange:p,placeholder:r,variant:s,bgText:o,type:x,boxAsLink:a,href:c,target:l})=>{const i=a?v:w,[f,u]=n.useState("");return e.jsxs(i,{$variant:s,href:c,target:l,children:[s==="background-text"&&o&&e.jsx(C,{children:o}),e.jsx(E,{children:e.jsx(k,{type:x,value:d,onChange:p,placeholder:r})})]})},b=I`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,_=m.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${b} 0.8s linear infinite;
  margin: 20px auto;
`,j=m.div`                
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

        ${S.max("md")} {

        p  {
            margin-top: 10px;
            }


        }`;m.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${S.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`;const N=({url:d,showButtons:p=!1,form:r})=>{const s=r==="singleForm"?"https://forms.office.com/e/KfpnEWdDwv":"https://forms.office.com/e/Z5zitkZLGv",[o,x]=n.useState(""),[a,c]=n.useState(!1),[l,i]=n.useState(null),[f,u]=n.useState(!1);n.useEffect(()=>{localStorage.getItem(r)==="true"&&u(!0)},[r]);const y=async()=>{if(o.trim()){c(!0),i(null);try{const t=await fetch(`${d}${o}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");(await t.json()).redirectUrl?(u(!0),localStorage.setItem(r,"true")):i("Errore: nessun URL ricevuto.")}catch(t){const h=t instanceof Error?t.message:"Errore sconosciuto";i(h||"Errore di connessione.")}finally{c(!1)}}};return f?e.jsxs(j,{children:[e.jsx("p",{children:"Clicca qui per compilare il form e iscriverti:"}),e.jsx(g,{variant:"secondary",link:s,showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Vai al form"}),p&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):"}),e.jsx("p",{children:"La documentazione si trova nel link in alto a destra."}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTA"}),": ricordarsi di rinominare i file come segue:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Certificato medico: ",e.jsx("strong",{children:"Nome_Cognome_Scuola_Certificato.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa con certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_CUS.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa senza certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_EASYCUS.pdf"})]})]}),e.jsx("h2",{children:"Inviare documentazione mancante a xcool@riasissu.it"})]})]}):e.jsxs(j,{children:[e.jsx("h6",{children:"L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx(B,{value:o,onChange:t=>x(t.target.value),placeholder:"Enter password...",type:"password"}),l&&e.jsx("p",{style:{color:"red"},children:l}),a&&e.jsx(_,{}),e.jsx(g,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:y,align:"center",children:a?"Verifica...":"Vai al form!"})]})};export{N as default};
