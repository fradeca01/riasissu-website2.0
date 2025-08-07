import{j as r,n as e,c}from"./emotion-styled.browser.esm.BVmeO7Kq.js";import"./index.Cj_FO6QK.js";import{T as o}from"./index.b-FexVqW.js";import{M as x}from"./index.pRwWRSYz.js";const w={src:"/xcool/_astro/icon-arrow-down.BDCzw7Ed.svg",width:30,height:30,format:"svg"},f={src:"/xcool/_astro/icon-arrow-circle.DUoOPlmj.svg",width:50,height:50,format:"svg"},v={src:"/xcool/_astro/icon-arrow-right.DqPTpFau.svg",width:20,height:20,format:"svg"},u={src:"/xcool/_astro/icon-facebook.CiZt8951.svg",width:15,height:32,format:"svg"},y={src:"/xcool/_astro/icon-instagram.BWvvhaKh.svg",width:50,height:50,format:"svg"},b={src:"/xcool/_astro/icon-twitter.-eebusCm.svg",width:50,height:50,format:"svg"},$={src:"/xcool/_astro/icon-linkedin.Cr8d3BTd.svg",width:50,height:50,format:"svg"},k={src:"/xcool/_astro/icon-github.DH9R7T2y.svg",width:50,height:50,format:"svg"},I={arrowDown:w,arrowCircle:f,arrowRight:v,facebook:u,instagram:y,twitter:b,linkedin:$,github:k},C=({alt:t,iconData:n,...a})=>{const i=I[n];return r.jsx("img",{src:i.src,alt:t,width:i.width,height:i.height,"data-icon":"true",...a})},j=e.div`
    display: flex;
    justify-content: ${({$align:t})=>t||"flex-start"};
    margin-top: 20px;
`,h=e.a`
    text-transform: uppercase;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    position: relative;
    z-index: 2;

    ${({$variant:t})=>t==="primary"&&B};
    ${({$variant:t})=>t==="secondary"&&D};
`,_=h.withComponent("button"),B=c`
    display: inline-flex;
    align-items: center;
    font-size: 25px;
    line-height: 30px;
    padding: 10px;
    margin-top: 40px;
    transition: color 0.5s;
    transition-delay: 0.2s;

    ${x.max("lg")} {
        font-size: 20px;
        line-height: 18px;
        margin-top: 20px;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0%;
        background: ${o.primary};
        z-index: -1;
        transition: width 0.5s;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: ${o.primary};
        transition: width 0.5s;
    }

    &:hover {
        color: ${o.secondary};

        &:before {
            width: 100%;
        }

        &:after {
            width: 0%;
        }

        img {
            margin-right: 30px;
            opacity: 1;
        }
    }

    img {
        transition-delay: 0.2s;
        filter: invert(1);
        opacity: 0;
        margin-right: -20px;
        transition: all 0.5s;
    }
`,D=c`
    padding: 12px 40px;
    min-width: 150px;
    border: 1.5px solid ${o.tertiary};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    border-radius: 50px;
    background: ${o.tertiary};
    color: ${o.primary};

    &:hover {
        background: transparent;
        color: ${o.secondary};
    }
`,E=({link:t,target:n,children:a,align:i,showIcon:g=!1,variant:d="primary",asButton:s,type:z,onClick:p,...l})=>{const m=s?_:h;return r.jsx(j,{$align:i,children:r.jsxs(m,{href:s?void 0:t,target:n,onClick:s?p:void 0,...l,$variant:d,children:[g&&r.jsx(C,{iconData:"arrowRight",alt:"arrow icon"}),a]})})};export{E as B,C as I};
