import{n,j as r}from"./emotion-styled.browser.esm.BDB7qZAm.js";import{r as f,R as m}from"./index.BZ7XLWeh.js";import{T as d}from"./index.CVzmzG4m.js";const y={src:"/xcool/_astro/down.ZYNO2wrg.png"},w={src:"/xcool/_astro/next.Dxpry1eZ.png"},v=n.div`
  overflow-x: auto;
  overflow-y: auto;
  margin: 40px 0;
  align-self: center;
`,C=n.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: sans-serif;
  background: ${d.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,l=n.th`
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
`,T=n.tr`
  cursor: pointer;
  &:nth-of-type(odd) {
    background: #626262;
  }
`,t=n.td`
  padding: 12px 16px;
  vertical-align: middle;
  text-align: center;
`;n.img`
  width: 32px;
  height: 20px;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 8px;
`;const i=n(t)`
  /*display: flex;*/
  align-items: center;
  width: 300px;
`,x=n.span`
  font-weight: 600;
  color: ${({color:c})=>c};
  min-width: 32px;
  display: inline-block;
  text-align: center;
`,k=n.tr`
  background: ${d.primary}CC;
  font-size: 12px;
  color: #b6b6b6;
  &:nth-of-type(odd) {
    background: #474747;
  }
`;function $({data:c}){const[p,h]=f.useState(null),g=[...c].sort((e,o)=>o.gold!==e.gold?o.gold-e.gold:o.silver!==e.silver?o.silver-e.silver:o.bronze-e.bronze),j=e=>h(o=>o===e?null:e);return r.jsx(v,{children:r.jsxs(C,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx(l,{children:"#"}),r.jsx(l,{children:"Scuola"}),r.jsx(l,{children:"🥇"}),r.jsx(l,{children:"🥈"}),r.jsx(l,{children:"🥉"}),r.jsx(l,{children:"Totale"})]})}),r.jsx("tbody",{children:g.map((e,o)=>{const u=Math.round(100*(e.gold+e.silver+e.bronze))/100,a=p===e.school;return r.jsxs(m.Fragment,{children:[r.jsxs(T,{onClick:()=>j(e.school),children:[r.jsx(t,{children:o+1}),r.jsxs(i,{children:[e.school,a&&r.jsx("img",{width:"20px",src:y.src}),!a&&r.jsx("img",{width:"15px",src:w.src})]}),r.jsx(t,{children:r.jsx(x,{color:"#FFD700",children:e.gold})}),r.jsx(t,{children:r.jsx(x,{color:"#C0C0C0",children:e.silver})}),r.jsx(t,{children:r.jsx(x,{color:"#CD7F32",children:e.bronze})}),r.jsx(i,{children:u})]}),a&&e.details.map(s=>{const b=Math.round(100*(s.gold+s.silver+s.bronze))/100;return!0&&r.jsxs(k,{children:[r.jsx(t,{}),r.jsx(i,{children:s.sport}),r.jsx(t,{children:s.gold}),r.jsx(t,{children:s.silver}),r.jsx(t,{children:s.bronze}),r.jsx(i,{children:b})]},s.sport)})]},e.school)})})]})})}export{$ as default};
