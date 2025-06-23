import{n as r,j as e}from"./emotion-styled.browser.esm.Cp3V0ryI.js";import{r as n}from"./index.Cj_FO6QK.js";import{T as c}from"./index.Dfdqbzw-.js";import{c as b,k}from"./emotion-react.browser.esm.C0dTczGO.js";import{M as h}from"./index.pRwWRSYz.js";import{B as u}from"./index.CKn_guGL.js";const v=r.div`
    padding: 20px;
    border-radius: 10px;
    background: ${c.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: flex;
    align-items: center;
    height: 100%;
    width: 70%;
    color: ${c.secondary};
    border-radius: 15px;
    position: relative;

    ${s=>s.$variant==="background-text"&&E};
`,B=v.withComponent("a"),I=r.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;
    font-size: 80px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -5px;
    z-index: 1;
    color: ${c.primary};
    opacity: 0.5;

    ${h.max("xxl")} {
        font-size: 70px;
    }

    ${h.max("xl")} {
        font-size: 50px;
        letter-spacing: -3px;
    }
`,z=r.div`
    position: relative;
    z-index: 2;
    width: 100%;
`,C=r.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background: transparent;
    color: ${c.secondary};

    &::placeholder {
        color: ${c.tertiary};
        opacity: 0.7;
    }
`,E=b`
    position: relative;
    overflow: hidden;
    padding: 20px;

    input {
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
`,$=({value:s,onChange:m,placeholder:o,variant:l,bgText:i,type:f,boxAsLink:d,href:p,target:x})=>{const a=d?B:v;return n.useState(""),e.jsxs(a,{$variant:l,href:p,target:x,children:[l==="background-text"&&i&&e.jsx(I,{children:i}),e.jsx(z,{children:e.jsx(C,{type:f,value:s,onChange:m,placeholder:o})})]})},_=k`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,U=r.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${_} 0.8s linear infinite;
  margin: 20px auto;
`,y=r.div`                
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


        }`,A=r.div`
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        gap:50px;

        ${h.max("md")} {
            flex-direction: column;
            gap: 0px;
        }`,F=({url:s,showButtons:m=!1,form:o})=>{const l=o==="singleForm"?"https://forms.office.com/e/KfpnEWdDwv":"https://forms.office.com/e/Z5zitkZLGv",[i,f]=n.useState(""),[d,p]=n.useState(!1),[x,a]=n.useState(null),[w,g]=n.useState(!1);n.useEffect(()=>{localStorage.getItem(o)==="true"&&g(!0)},[o]);const S=async()=>{if(i.trim()){p(!0),a(null);try{const t=await fetch(`${s}${i}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");(await t.json()).redirectUrl?(g(!0),localStorage.setItem(o,"true")):a("Errore: nessun URL ricevuto.")}catch(t){const j=t instanceof Error?t.message:"Errore sconosciuto";a(j||"Errore di connessione.")}finally{p(!1)}}};return w?e.jsxs(y,{children:[e.jsx("p",{children:"Clicca qui per compilare il form e iscriverti:"}),e.jsx(u,{variant:"secondary",link:l,showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Vai al form"}),m&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):"}),e.jsx("p",{children:"La documentazione si trova nel link in alto a destra."}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTA"}),": ricordarsi di rinominare i file come segue:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Certificato medico: ",e.jsx("strong",{children:"Nome_Cognome_Scuola_Certificato.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa con certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_CUS.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa senza certificato medico): ",e.jsx("strong",{children:"Nome_Cognome_Scuola_EASYCUS.pdf"})]})]}),e.jsxs(A,{children:[e.jsx(u,{variant:"primary",link:"https://riasissu.sharepoint.com/:f:/s/xcool/Esjlsa8CwG1AveBDvfJDIJcBUhBr2yt7zlkY2JlaVk6LTw",showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Allega certificato medico            "}),e.jsx(u,{variant:"primary",link:"https://riasissu.sharepoint.com/:f:/s/xcool/Ep9ckV3FZzRMsECtEaDh2pABL2jRQPKB4xyjQldTmk8wrA",showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Allega modulo CUS"})]})]})]}):e.jsxs(y,{children:[e.jsx("h6",{children:"L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx($,{value:i,onChange:t=>f(t.target.value),placeholder:"Enter password...",type:"password"}),x&&e.jsx("p",{style:{color:"red"},children:x}),d&&e.jsx(U,{}),e.jsx(u,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:S,align:"center",children:d?"Verifica...":"Vai al form!"})]})};export{F as default};
