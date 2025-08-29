import{n as r,c as b,j as e,k as I}from"./emotion-styled.browser.esm.BazEBxOH.js";import{r as a}from"./index.Cj_FO6QK.js";import{T as c}from"./index.CQZsg08O.js";import{M as u}from"./index.pRwWRSYz.js";import{B as j}from"./index.BipW1LRa.js";const v=r.div`
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

  ${n=>n.$variant==="background-text"&&B};
`,z=v.withComponent("a"),k=r.span`
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

  ${u.max("xxl")} {
    font-size: 70px;
  }

  ${u.max("xl")} {
    font-size: 50px;
    letter-spacing: -3px;
  }
`,C=r.div`
  position: relative;
  z-index: 2;
  width: 100%;
`,$=r.input`
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
`,B=b`
  position: relative;
  overflow: hidden;
  padding: 20px;

  input {
    position: relative;
    z-index: 2;
    font-size: 18px;
  }
`,E=({value:n,onChange:m,placeholder:o,variant:l,bgText:i,type:h,boxAsLink:d,href:p,target:x})=>{const s=d?z:v;return e.jsxs(s,{$variant:l,href:p,target:x,children:[l==="background-text"&&i&&e.jsx(k,{children:i}),e.jsx(C,{children:e.jsx($,{type:h,value:n,onChange:m,placeholder:o})})]})},_=I`
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
  align-items: center;
  // overflow: hidden;
  height: 100%;
  h2,
  h3,
  h4 {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 2;
  }

  p {
    margin-top: 20px;
  }

  ${u.max("md")} {
    p {
      margin-top: 10px;
    }
  }
`;r.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  ${u.max("md")} {
    flex-direction: column;
    gap: 0px;
  }
`;const V=({url:n,showButtons:m=!1,form:o})=>{const l=o==="singleForm"?"https://forms.office.com/e/KfpnEWdDwv":"https://forms.office.com/e/Z5zitkZLGv",[i,h]=a.useState(""),[d,p]=a.useState(!1),[x,s]=a.useState(null),[S,f]=a.useState(!1);a.useEffect(()=>{localStorage.getItem(o)==="true"&&f(!0)},[o]);const w=async()=>{if(i.trim()){p(!0),s(null);try{const t=await fetch(`${n}${i}`,{method:"GET",mode:"cors",credentials:"omit"});if(!t.ok)throw new Error("Password errata.");(await t.json()).redirectUrl?(f(!0),localStorage.setItem(o,"true")):s("Errore: nessun URL ricevuto.")}catch(t){const g=t instanceof Error?t.message:"Errore sconosciuto";s(g||"Errore di connessione.")}finally{p(!1)}}};return S?e.jsxs(y,{children:[e.jsx("p",{children:"Clicca qui per compilare il form e iscriverti:"}),e.jsx(j,{variant:"secondary",link:l,showIcon:!1,asButton:!1,target:"_blank",type:"button",align:"center",children:"Vai al form"}),m&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):"}),e.jsx("p",{children:"La documentazione si trova nel link in alto a destra."}),e.jsxs("p",{children:[e.jsx("strong",{children:"NOTA"}),": ricordarsi di rinominare i file come segue:"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Certificato medico:"," ",e.jsx("strong",{children:"Nome_Cognome_Scuola_Certificato.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa con certificato medico):"," ",e.jsx("strong",{children:"Nome_Cognome_Scuola_CUS.pdf"})]}),e.jsxs("li",{children:["Modulo CUS (per chi partecipa senza certificato medico):"," ",e.jsx("strong",{children:"Nome_Cognome_Scuola_EASYCUS.pdf"})]})]}),e.jsx("h2",{children:"Inviare documentazione mancante a xcool@riasissu.it"})]})]}):e.jsxs(y,{children:[e.jsx("h6",{children:"L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante."}),e.jsx("p",{children:"Inserisci la password:"}),e.jsx("br",{}),e.jsx(E,{value:i,onChange:t=>h(t.target.value),placeholder:"Enter password...",type:"password"}),x&&e.jsx("p",{style:{color:"red"},children:x}),d&&e.jsx(U,{}),e.jsx(j,{variant:"secondary",showIcon:!1,asButton:!0,target:"_blank",type:"button",onClick:w,align:"center",children:d?"Verifica...":"Vai al form!"})]})};export{V as default};
