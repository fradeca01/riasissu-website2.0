import{n as r,j as e}from"./emotion-styled.browser.esm.Cp3V0ryI.js";import{T as i}from"./index.Dfdqbzw-.js";import{I as m}from"./index.CWdvO4Wo.js";import{M as o}from"./index.pRwWRSYz.js";import{F as h}from"./styled.pnuu89z-.js";import{c as s}from"./emotion-react.browser.esm.C0dTczGO.js";import{r as l}from"./index.Cj_FO6QK.js";const f=r.div`
    position: relative;
    z-index: 3;

    a {
        font-size: 35px;
        line-height: 30px;
        font-weight: 700;
        display: inline-flex;
        position: relative;

        span {
            &:after {
                content: "";
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 25%;
                height: 3px;
                background-color: ${i.primary};
                z-index: 1;
                transition: width 0.2s linear;
            }
        }

        &:hover span:after {
            width: 100%;
        }

        img {
            height: 100px;
            width: 252px;
            object-fit: contain;
        }
    }
`,u=()=>e.jsx(f,{children:e.jsx("a",{href:"/xcool",children:e.jsx(m,{srcLocal:"logo",alt:"logo"})})}),y=r.header`
    width: 100%;

    padding: 20px 0;

    display: flex;

    justify-content: space-between;
    align-items: center;

    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    
    animation: ${h} 1s;
    animation-delay: 0.4s;  
    transition: background 0.5s;

    &.scrolled {
        background: rgba(0, 0, 0, 0.8);
    }
`,b=r.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 40px;

    ${o.max("lg")} {
        padding: 0 20px;
    }
`,j=r.div`
    display: flex;
    gap: 50px;

    ${o.max("xl")} {
        gap: 20px;
    }
`,w=r.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ${o.max("lg")} {
        position: fixed;
        top: 0;
        right: -100%;

        background: ${i.secondary};
        height: 100dvh;
        z-index: 2;
        transform: translateX(100%);
        transition: transform 0.3s linear, right 0.7s;
        padding-top: 85px;

        width: clamp(300px, 80%, 300px);

        ${({$isOpen:n})=>n&&s`
                right: 0;
                transform: translateX(0);
            `};
    }
`,v=r.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;

    ${o.min("lg")} {
        gap: 20px;
        align-items: center;
        justify-content: center;
    }

    ${o.max("lg")} {
        gap: 10px;
        padding: 20px 10px 53px;
        overflow: auto;
        width: 100%;
        height: 100%;

        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    > li a {
        text-decoration: none;
        color: ${i.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 25px;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
        padding: 10px;
        border-radius: 5px;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;

        ${o.max("lg")} {
            padding: 10px 20px;
        }

        &:hover {
            background-color: ${i.primary};
            color: ${i.secondary};

            text-shadow: none;
        }

        img {
            margin: 0 15px 0 0;

            max-width: 30px;
            max-height: 30px;

            ${o.max("xl")} {
                margin: 0 10px 0 0;
            }
        }
    }
`,$=r.button`
    position: relative;
    z-index: 3;

    background: ${i.primary};
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s, color 0.3s;
    width: 45px;
    height: 45px;
    border-color: transparent;

    ${o.min("lg")} {
        display: none;
    }
`,c=r.span`
    background: ${i.secondary};
    position: absolute;
    left: 50%;
    display: block;
    transform: translate(-50%, -50%);
    transition: transform 0.3s, background 0.3s, top 0.3s;
    pointer-events: none;

    width: 50%;
    height: 3px;

    ${o.max("lg")} {
        height: 2px;
    }

    ${({$open:n})=>n?s`
                  transform: translate(-50%, -50%) rotate(45deg);
                  top: 50%;
              `:s`
                  top: calc(50% - 4px);
              `}

    &:not(:first-of-type) {
        ${({$open:n})=>n?s`
                      transform: translate(-49%, -50%) rotate(-45deg);
                      top: 50%;
                  `:s`
                      top: calc(50% + 4px);
                  `}
    }
`,k=({state:n})=>{const{open:t,setOpen:a}=n,x=()=>{a(!t)},p=g=>{const d=g.target;!d.closest("nav")&&t&&d.tagName!=="BUTTON"&&a(!1)};return l.useEffect(()=>{if(t)return document.addEventListener("click",p),()=>{document.removeEventListener("click",p)}},[t]),e.jsxs($,{$open:t,onClick:x,"aria-label":"Menu","aria-expanded":t,role:"button",tabIndex:0,children:[e.jsx(c,{$open:t}),e.jsx(c,{$open:t})]})},S=()=>{const[n,t]=l.useState(!1);return e.jsxs(j,{children:[e.jsx(w,{$isOpen:n,children:e.jsxs(v,{children:[e.jsx("li",{children:e.jsx("a",{href:"/",children:"RIASISSU"})}),e.jsx("li",{children:e.jsx("a",{href:"https://riasissu.sharepoint.com/:f:/s/xcool/EjpN4ptPglBOlpGKaguPnH8BcqPSj9pzg6nPWqCdoPsSIA?e=aqwU3a",target:"_blank",children:"Documentazione"})})]})}),e.jsx(k,{state:{open:n,setOpen:t}})]})},M=({headerClass:n})=>(l.useEffect(()=>{const t=document.querySelector("header"),a=()=>{window.scrollY>0?t?.classList.add("scrolled"):t?.classList.remove("scrolled")};return window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}},[]),e.jsx(y,{className:n,children:e.jsxs(b,{children:[e.jsx(u,{}),e.jsx(S,{})]})}));export{M as Header};
