import{n as l,j as e}from"./emotion-styled.browser.esm.BDB7qZAm.js";import{r as v,R as C}from"./index.BZ7XLWeh.js";import{T as g}from"./index.CVzmzG4m.js";const z={src:"/xcool/_astro/down.ZYNO2wrg.png"},T={src:"/xcool/_astro/next.Dxpry1eZ.png"},k=l.div`
  overflow-x: auto;
  overflow-y: auto;
  margin: 40px 0;
  align-self: center;
`,M=l.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-family: sans-serif;
  background: ${g.secondary};
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`,i=l.th`
  padding: 16px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  background: ${g.secondary};
  color: ${g.primary};
  &:first-of-type {
    border-top-left-radius: 12px;
  }
  &:last-of-type {
    border-top-right-radius: 12px;
  }
`,S=l.tr`
  cursor: pointer;
  &:nth-of-type(odd) {
    background: #626262;
  }
`,n=l.td`
  padding: 12px 16px;
  vertical-align: middle;
  text-align: center;
`;l.img`
  width: 32px;
  height: 20px;
  object-fit: cover;
  border-radius: 2px;
  margin-right: 8px;
`;const u=l(n)`
  /*display: flex;*/
  align-items: center;
  width: 300px;
`,b=l.span`
  font-weight: 600;
  color: ${({color:j})=>j};
  min-width: 32px;
  display: inline-block;
  text-align: center;
`,E=l.tr`
  background: ${g.primary}CC;
  font-size: 12px;
  color: #b6b6b6;
  &:nth-of-type(odd) {
    background: #474747;
  }
`;function F({data:j}){const[f,m]=v.useState(null),y=[...j].sort((t,d)=>{const a=t.details.reduce((r,s)=>r+s.gold,0),x=t.details.reduce((r,s)=>r+s.silver,0),h=t.details.reduce((r,s)=>r+s.bronze,0),p=d.details.reduce((r,s)=>r+s.gold,0),c=d.details.reduce((r,s)=>r+s.silver,0),o=d.details.reduce((r,s)=>r+s.bronze,0);return p!==a?p-a:c!==x?c-x:o-h}),w=t=>m(d=>d===t?null:t);return e.jsx(k,{children:e.jsxs(M,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(i,{children:"#"}),e.jsx(i,{children:"Scuola"}),e.jsx(i,{children:"🥇"}),e.jsx(i,{children:"🥈"}),e.jsx(i,{children:"🥉"}),e.jsx(i,{children:"Totale"})]})}),e.jsx("tbody",{children:y.map((t,d)=>{const a=Math.round(100*t.details.reduce((o,r)=>o+r.gold,0))/100,x=Math.round(100*t.details.reduce((o,r)=>o+r.silver,0))/100,h=Math.round(100*t.details.reduce((o,r)=>o+r.bronze,0))/100,p=Math.round(100*(a+x+h))/100,c=f===t.school;return e.jsxs(C.Fragment,{children:[e.jsxs(S,{onClick:()=>w(t.school),children:[e.jsx(n,{children:d+1}),e.jsxs(u,{children:[t.school,c&&e.jsx("img",{width:"20px",src:z.src}),!c&&e.jsx("img",{width:"15px",src:T.src})]}),e.jsx(n,{children:e.jsx(b,{color:"#FFD700",children:a})}),e.jsx(n,{children:e.jsx(b,{color:"#C0C0C0",children:x})}),e.jsx(n,{children:e.jsx(b,{color:"#CD7F32",children:h})}),e.jsx(u,{children:p})]}),c&&t.details.map(o=>{const r=Math.round(100*(o.gold+o.silver+o.bronze))/100;return r!==0&&e.jsxs(E,{children:[e.jsx(n,{}),e.jsx(u,{children:o.sport}),e.jsx(n,{children:o.gold}),e.jsx(n,{children:o.silver}),e.jsx(n,{children:o.bronze}),e.jsx(u,{children:r})]},o.sport)})]},t.school)})})]})})}export{F as default};
