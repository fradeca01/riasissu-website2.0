import{n as r,j as o}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as i}from"./index.Cj_FO6QK.js";import{T as s}from"./index.b-FexVqW.js";const x=r.div`
    margin-top: 50px;
  width: 100%;
  padding: 24px;
  background: ${s.secondary};
  border-radius: 12px;
  max-width: 960px;
  align-self: center;
`,l=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,h=r.div`
  flex: 0 0 80px;
  font-size: 14px;
  font-weight: 600;
  color: ${s.primary};
  margin-right: 12px;
`,m=r.div`
  flex: 1;
  background: ${s.secondary};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 20px;
`,u=r.div`
  width: ${({pct:t})=>t}%;
  background: #0000FF;
  height: 100%;
  border-radius: 12px 12px 12px 12px;
  transition: width 1s ease-out;
`,f=r.div`
  position: absolute;
  left: ${({pct:t})=>t}%;
  top: 50%;
  transform: translate(${({pct:t})=>t>90?"-100%,-50%":"4px,-50%"});
  transition: left 1s ease-out, transform 1s ease-out;
  font-size: 16px;
  font-weight: 500;
  color: ${s.primary};
  white-space: nowrap;
  
`;function j({data:t}){const[n,p]=i.useState(!1);i.useEffect(()=>{const e=window.setTimeout(()=>p(!0),50);return()=>window.clearTimeout(e)},[]);const d=Math.max(...t.map(e=>e.total),1);return o.jsx(x,{children:t.map(e=>{const c=Math.round(e.total/d*90),a=n?c:0;return o.jsxs(l,{children:[o.jsx(h,{children:e.school}),o.jsxs(m,{children:[o.jsx(u,{pct:a}),o.jsxs(f,{pct:a,children:[e.total," ",o.jsx("img",{width:"18px",src:"/src/assets/beer.png"})]})]})]},e.school)})})}export{j as default};
