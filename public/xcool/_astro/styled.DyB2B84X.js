import{n as o,c as i}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import{T as t}from"./index.C4C5hPPZ.js";import{M as e}from"./index.pRwWRSYz.js";const r=o.div`
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

    ${n=>n.$variant==="background-text"&&a};
`,x=r.withComponent("a"),c=o.span`
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

    ${e.max("xxl")} {
        font-size: 70px;
    }

    ${e.max("xl")} {
        font-size: 50px;
        letter-spacing: -3px;
    }
`,l=o.div`
    position: relative;
    z-index: 2;
    width: 100%;
`,u=o.input`
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
`,a=i`
    position: relative;
    overflow: hidden;
    padding: 20px;

    input {
        position: relative;
        z-index: 2;
        font-size: 18px;
    }
`;export{c as I,l as a,u as b,x as c,r as d};
