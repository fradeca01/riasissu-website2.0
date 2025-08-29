import{n as s,j as r}from"./emotion-styled.browser.esm.BazEBxOH.js";import{r as m,R as b}from"./index.Cj_FO6QK.js";import{T as d}from"./index.CQZsg08O.js";const y={src:"/xcool/_astro/down.ZYNO2wrg.png"},w={src:"/xcool/_astro/next.Dxpry1eZ.png"},v=s.div`
  overflow-x: auto;
  overflow-y: auto;
  margin: 40px 0;
  align-self: center;
`,C=s.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: sans-serif;
  background: ${d.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,l=s.th`
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
`,T=s.tr`
  cursor: pointer;
  &:nth-of-type(odd) {
    background: #4a4f69ff;
  }
`,n=s.td`
  padding: 12px 16px;
  vertical-align: middle;
  text-align: center;
`;s.img`
  width: 32px;
  height: 20px;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 8px;
`;const i=s(n)`
  /*display: flex;*/
  align-items: center;
  padding: 0 100px;
`,x=s.span`
  font-weight: 600;
  color: ${({color:c})=>c};
  min-width: 32px;
  display: inline-block;
  text-align: center;
`,k=s.tr`
  background: ${d.primary}CC;
  font-size: 12px;
  color: #94a3b8;
  &:nth-of-type(odd) {
    background: #252837ff;
  }
`;function $({data:c}){const[p,h]=m.useState(null),g=[...c].sort((e,o)=>o.gold!==e.gold?o.gold-e.gold:o.silver!==e.silver?o.silver-e.silver:o.bronze-e.bronze),j=e=>h(o=>o===e?null:e);return r.jsx(v,{children:r.jsxs(C,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(l,{children:"#"}),r.jsx(l,{children:"Scuola"}),r.jsx(l,{children:"🥇"}),r.jsx(l,{children:"🥈"}),r.jsx(l,{children:"🥉"}),r.jsx(l,{children:"Totale"})]})}),r.jsx("tbody",{children:g.map((e,o)=>{const f=e.gold+e.silver+e.bronze,a=p===e.school;return r.jsxs(b.Fragment,{children:[r.jsxs(T,{onClick:()=>j(e.school),children:[r.jsx(n,{children:o+1}),r.jsxs(i,{children:[e.school,a&&r.jsx("img",{width:"20px",src:y.src}),!a&&r.jsx("img",{width:"15px",src:w.src})]}),r.jsx(n,{children:r.jsx(x,{color:"#FFD700",children:e.gold})}),r.jsx(n,{children:r.jsx(x,{color:"#C0C0C0",children:e.silver})}),r.jsx(n,{children:r.jsx(x,{color:"#CD7F32",children:e.bronze})}),r.jsx(i,{children:f})]}),a&&e.details.map(t=>{const u=t.gold+t.silver+t.bronze;return!0&&r.jsxs(k,{children:[r.jsx(n,{}),r.jsx(i,{children:t.sport}),r.jsx(n,{children:t.gold}),r.jsx(n,{children:t.silver}),r.jsx(n,{children:t.bronze}),r.jsx(i,{children:u})]},t.sport)})]},e.school)})})]})})}export{$ as default};
