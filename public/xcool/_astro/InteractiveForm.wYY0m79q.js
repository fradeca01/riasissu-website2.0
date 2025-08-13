import{j as e,k as v,n as x}from"./emotion-styled.browser.esm.CkZZZ6ql.js";import{r as s}from"./index.Cj_FO6QK.js";import{I as w,a as I,b as k,c as B,d as C}from"./styled.BIr8CTQt.js";import{B as d}from"./index.CqYbKP2T.js";import{M as j}from"./index.pRwWRSYz.js";import"./index.BugKR0BO.js";const E=({value:p,onChange:u,placeholder:r,variant:i,bgText:o,type:m,boxAsLink:a,href:l,target:c})=>{const n=a?B:C;return s.useState(""),e.jsxs(n,{$variant:i,href:l,target:c,children:[i==="background-text"&&o&&e.jsx(w,{children:o}),e.jsx(I,{children:e.jsx(k,{type:m,value:p,onChange:u,placeholder:r})})]})},b=v`
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


        }`,z=x.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${j.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`,R=({url:p,showButtons:u=!1,form:r})=>{const i=r==="singleForm"?"https://forms.office.com/e/KfpnEWdDwv":"https://forms.office.com/e/Z5zitkZLGv",[o,m]=s.useState(""),[a,l]=s.useState(!1),[c,n]=s.useState(null),[S,f]=s.useState(!1);s.useEffect(()=>{localStorage.getItem(r)==="true"&&f(!0)},[r]);const y=async()=>{if(o.trim()){l(!0),n(null);try{const t=await fetch(`${p}${o}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");(await t.json()).redirectUrl?(f(!0),localStorage.setItem(r,"true")):n("Errore: nessun URL ricevuto.")}catch(t){const h=t instanceof Error?t.message:"Errore sconosciuto";n(h||"Errore di connessione.")}finally{l(!1)}}};return S?e.jsxs(g,{children:[e.jsx("p",{children:"Clicca qui per compilare il form e iscriverti:"}),e.jsx(d,{variant:"secondary",link:i,showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Vai al form"}),u&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):"}),e.jsx("p",{children:"La documentazione si trova nel link in alto a destra."}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTA"}),": ricordarsi di rinominare i file come segue:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Certificato medico: ",e.jsx("strong",{children:"Nome_Cognome_Scuola_Certificato.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa con certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_CUS.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa senza certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_EASYCUS.pdf"})]})]}),e.jsxs(z,{children:[e.jsx(d,{variant:"primary",link:"https://riasissu.sharepoint.com/:f:/s/xcool/Esjlsa8CwG1AveBDvfJDIJcBUhBr2yt7zlkY2JlaVk6LTw",showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Allega certificato medico            "}),e.jsx(d,{variant:"primary",link:"https://riasissu.sharepoint.com/:f:/s/xcool/Ep9ckV3FZzRMsECtEaDh2pABL2jRQPKB4xyjQldTmk8wrA",showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Allega modulo CUS"})]})]})]}):e.jsxs(g,{children:[e.jsx("h6",{children:"L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx(E,{value:o,onChange:t=>m(t.target.value),placeholder:"Enter password...",type:"password"}),c&&e.jsx("p",{style:{color:"red"},children:c}),a&&e.jsx(_,{}),e.jsx(d,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:y,align:"center",children:a?"Verifica...":"Vai al form!"})]})};export{R as default};
