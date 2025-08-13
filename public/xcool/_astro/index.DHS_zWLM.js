import{n,c as h,j as o}from"./emotion-styled.browser.esm.CkZZZ6ql.js";import{r as g}from"./index.Cj_FO6QK.js";import{T as t}from"./index.BugKR0BO.js";import{M as p}from"./index.pRwWRSYz.js";const a=n.div`
    padding: 20px;
    border-radius: 10px;
    background: ${t.primary};
    box-shadow: 0 0 10px rgb(123 123 123 / 30%);
    display: flex;
    align-items: center;
    height: 100%;
    width: 70%;
    color: ${t.secondary};
    border-radius: 15px;
    position: relative;

    ${e=>e.$variant==="background-text"&&$};
`,f=a.withComponent("a"),y=n.span`
    position: absolute;
    top: 0;
    right: 0;
    text-transform: uppercase;
    font-size: 80px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: -5px;
    z-index: 1;
    color: ${t.primary};
    opacity: 0.5;

    ${p.max("xxl")} {
        font-size: 70px;
    }

    ${p.max("xl")} {
        font-size: 50px;
        letter-spacing: -3px;
    }
`,B=n.div`
    position: relative;
    z-index: 2;
    width: 100%;
`,I=n.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    background: transparent;
    color: ${t.secondary};

    &::placeholder {
        color: ${t.tertiary};
        opacity: 0.7;
    }
`,$=h`
    position: relative;
    overflow: hidden;
    padding: 20px;

    input {
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
`,j=({value:e,onChange:s,placeholder:x,variant:i,bgText:r,type:d,boxAsLink:c,href:l,target:u})=>{const m=c?f:a;return g.useState(""),o.jsxs(m,{$variant:i,href:l,target:u,children:[i==="background-text"&&r&&o.jsx(y,{children:r}),o.jsx(B,{children:o.jsx(I,{type:d,value:e,onChange:s,placeholder:x})})]})};export{j as I};
