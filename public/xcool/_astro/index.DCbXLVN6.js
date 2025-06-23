import{c as t}from"./emotion-styled.browser.esm.XV-wAueI.js";const e={white:"#FFFFFF",dark:"#101118",darkLighter:"#20222e"};t`
    :root {
        --primary: ${e.white};
        --secondary: ${e.darkLighter};
        --tertiary: ${e.dark};
    }
`;const m={primary:"var(--primary)",secondary:"var(--secondary)",tertiary:"var(--tertiary)"},a={base:0,sm:576,md:768,lg:992,xl:1200,xxl:1440,xxxl:1920},s={min:r=>`@media (min-width: ${a[r]}px)`,max:r=>`@media (max-width: ${a[r]}px)`,between:(r,i)=>`@media (min-width: ${a[r]}px) and (max-width: ${a[i]}px)`};export{s as M,m as T};
