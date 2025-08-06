import{n as t,j as r}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as b,R as m}from"./index.Cj_FO6QK.js";import{T as d}from"./index.b-FexVqW.js";const y=t.div`
  overflow-x: auto;
  overflow-y: auto;
  margin: 40px 0;
  align-self: center;
`,v=t.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: sans-serif;
  background: ${d.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,l=t.th`
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${d.secondary};
  color: ${d.primary};
  &:first-of-type {
    border-top-left-radius: 12px;
  }
  &:last-of-type {
    border-top-right-radius: 12px;
  }
`,w=t.tr`
cursor: pointer;
  &:nth-of-type(odd) {
    background: #4a4f69ff;
  }
`,n=t.td`
  padding: 12px 16px;
  vertical-align: middle;
  text-align: center;
`;t.img`
  width: 32px;
  height: 20px;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 8px;
`;const i=t(n)`
  /*display: flex;*/
  align-items: center;
  padding: 0 100px;
`,a=t.span`
  font-weight: 600;
  color: ${({color:c})=>c};
  min-width: 32px;
  display: inline-block;
  text-align: center;
`,C=t.tr`
  background: ${d.primary}CC;
  font-size: 12px;
  color: #94a3b8;
  &:nth-of-type(odd) {
    background: #252837ff;
  }
`;function E({data:c}){const[x,p]=b.useState(null),h=[...c].sort((e,o)=>o.gold!==e.gold?o.gold-e.gold:o.silver!==e.silver?o.silver-e.silver:o.bronze-e.bronze),g=e=>p(o=>o===e?null:e);return r.jsx(y,{children:r.jsxs(v,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(l,{children:"#"}),r.jsx(l,{children:"Scuola"}),r.jsx(l,{children:"🥇"}),r.jsx(l,{children:"🥈"}),r.jsx(l,{children:"🥉"}),r.jsx(l,{children:"Totale"})]})}),r.jsx("tbody",{children:h.map((e,o)=>{const j=e.gold+e.silver+e.bronze,f=x===e.school;return r.jsxs(m.Fragment,{children:[r.jsxs(w,{onClick:()=>g(e.school),children:[r.jsx(n,{children:o+1}),r.jsx(i,{children:e.school}),r.jsx(n,{children:r.jsx(a,{color:"#FFD700",children:e.gold})}),r.jsx(n,{children:r.jsx(a,{color:"#C0C0C0",children:e.silver})}),r.jsx(n,{children:r.jsx(a,{color:"#CD7F32",children:e.bronze})}),r.jsx(i,{children:j})]}),f&&e.details.map(s=>{const u=s.gold+s.silver+s.bronze;return!0&&r.jsxs(C,{children:[r.jsx(n,{}),r.jsx(i,{children:s.sport}),r.jsx(n,{children:s.gold}),r.jsx(n,{children:s.silver}),r.jsx(n,{children:s.bronze}),r.jsx(i,{children:u})]},s.sport)})]},e.school)})})]})})}export{E as default};
