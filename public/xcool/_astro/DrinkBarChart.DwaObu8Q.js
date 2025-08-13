import{n as e,j as r}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{r as i}from"./index.Cj_FO6QK.js";import{T as s}from"./index.C4C5hPPZ.js";const x={src:"/xcool/_astro/beer.CakGktY7.png",width:512,height:512,format:"png"},l=e.div`
    margin-top: 50px;
  width: 100%;
  padding: 24px;
  background: ${s.secondary};
  border-radius: 12px;
  max-width: 960px;
  align-self: center;
`,h=e.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,m=e.div`
  flex: 0 0 80px;
  font-size: 14px;
  font-weight: 600;
  color: ${s.primary};
  margin-right: 12px;
`,u=e.div`
  flex: 1;
  background: ${s.secondary};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 20px;
`,f=e.div`
  width: ${({pct:t})=>t}%;
  background: #0000FF;
  height: 100%;
  border-radius: 12px 12px 12px 12px;
  transition: width 1s ease-out;
`,g=e.div`
  position: absolute;
  left: ${({pct:t})=>t}%;
  top: 50%;
  transform: translate(${({pct:t})=>t>90?"-100%,-50%":"4px,-50%"});
  transition: left 1s ease-out, transform 1s ease-out;
  font-size: 16px;
  font-weight: 500;
  color: ${s.primary};
  white-space: nowrap;
  
`;function v({data:t}){const[n,p]=i.useState(!1);i.useEffect(()=>{const o=window.setTimeout(()=>p(!0),50);return()=>window.clearTimeout(o)},[]);const c=Math.max(...t.map(o=>o.total),1);return r.jsx(l,{children:t.map(o=>{const d=Math.round(o.total/c*90),a=n?d:0;return r.jsxs(h,{children:[r.jsx(m,{children:o.school}),r.jsxs(u,{children:[r.jsx(f,{pct:a}),r.jsxs(g,{pct:a,children:[o.total," ",r.jsx("img",{width:"18px",src:x.src})]})]})]},o.school)})})}export{v as default};
