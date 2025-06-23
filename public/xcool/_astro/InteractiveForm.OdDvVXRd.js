import{k as v,n as a,j as e}from"./emotion-styled.browser.esm.LcliuljZ.js";import{r}from"./index.a3y3H-wG.js";import{I as w}from"./index.QED5Qooo.js";import{B as i}from"./index.czqcYsxG.js";import{M as h}from"./index.CZS-th7H.js";const k=v`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,C=a.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${k} 0.8s linear infinite;
  margin: 20px auto;
`,f=a.div`                
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

        ${h.max("md")} {

        p  {
            margin-top: 10px;
            }


        }`,E=a.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${h.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`,U=({url:u,showButtons:x=!1,form:o})=>{const g=o==="singleForm"?"https://forms.office.com/e/KfpnEWdDwv":"https://forms.office.com/e/Z5zitkZLGv",[s,j]=r.useState(""),[l,c]=r.useState(!1),[d,n]=r.useState(null),[y,p]=r.useState(!1);r.useEffect(()=>{localStorage.getItem(o)==="true"&&p(!0)},[o]);const S=async()=>{if(s.trim()){c(!0),n(null);try{const t=await fetch(`${u}${s}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");(await t.json()).redirectUrl?(p(!0),localStorage.setItem(o,"true")):n("Errore: nessun URL ricevuto.")}catch(t){const m=t instanceof Error?t.message:"Errore sconosciuto";n(m||"Errore di connessione.")}finally{c(!1)}}};return y?e.jsxs(f,{children:[e.jsx("p",{children:"Clicca qui per compilare il form e iscriverti:"}),e.jsx(i,{variant:"secondary",link:g,showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Vai al form"}),x&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):"}),e.jsx("p",{children:"La documentazione si trova nel link in alto a destra."}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTA"}),": ricordarsi di rinominare i file come segue:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Certificato medico: ",e.jsx("strong",{children:"Nome_Cognome_Scuola_Certificato.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa con certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_CUS.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa senza certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_EASYCUS.pdf"})]})]}),e.jsxs(E,{children:[e.jsx(i,{variant:"primary",link:"https://riasissu.sharepoint.com/:f:/s/xcool/Esjlsa8CwG1AveBDvfJDIJcBUhBr2yt7zlkY2JlaVk6LTw",showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Allega certificato medico            "}),e.jsx(i,{variant:"primary",link:"https://riasissu.sharepoint.com/:f:/s/xcool/Ep9ckV3FZzRMsECtEaDh2pABL2jRQPKB4xyjQldTmk8wrA",showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Allega modulo CUS"})]})]})]}):e.jsxs(f,{children:[e.jsx("h6",{children:"L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx(w,{value:s,onChange:t=>j(t.target.value),placeholder:"Enter password...",type:"password"}),d&&e.jsx("p",{style:{color:"red"},children:d}),l&&e.jsx(C,{}),e.jsx(i,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:S,align:"center",children:l?"Verifica...":"Vai al form!"})]})};export{U as default};
