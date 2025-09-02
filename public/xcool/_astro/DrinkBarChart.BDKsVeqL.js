import{n as e,j as r}from"./emotion-styled.browser.esm.BDB7qZAm.js";import{r as n}from"./index.BZ7XLWeh.js";import{T as a}from"./index.CVzmzG4m.js";const x=e.div`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px;
  background: ${a.secondary};
  border-radius: 12px;
  max-width: 960px;
  align-self: center;
`,m=e.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`,h=e.div`
  flex: 0 0 80px;
  font-size: 14px;
  font-weight: 600;
  color: ${a.primary};
  margin-right: 12px;
`,f=e.div`
  flex: 1;
  background: ${a.secondary};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  height: 20px;
`,u=e.div`
  width: ${({pct:t})=>t}%;
  background: #0000ff;
  height: 100%;
  border-radius: 12px 12px 12px 12px;
  transition: width 1s ease-out;
`,g=e.div`
  position: absolute;
  left: ${({pct:t})=>t}%;
  top: 50%;
  transform: translate(${({pct:t})=>t>90?"-100%,-50%":"4px,-50%"});
  transition:
    left 1s ease-out,
    transform 1s ease-out;
  font-size: 16px;
  font-weight: 500;
  color: ${a.primary};
  white-space: nowrap;
`,w=e.img`
  transform: translateY(2px);
`;function y({data:t,icon:i}){const[p,c]=n.useState(!1);n.useEffect(()=>{const o=window.setTimeout(()=>c(!0),50);return()=>window.clearTimeout(o)},[]);const d=Math.max(...t.map(o=>o.total),1);return r.jsx(x,{children:t.map(o=>{const l=Math.round(o.total/d*90),s=p?l:0;return r.jsxs(m,{children:[r.jsx(h,{children:o.school}),r.jsxs(f,{children:[r.jsx(u,{pct:s}),r.jsxs(g,{pct:s,children:[o.total," ",r.jsx(w,{width:"18px",src:i.src})]})]})]},o.school)})})}export{y as default};
