import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { C as ContentSection } from '../../chunks/index_DFtjxm_b.mjs';
import { T as Theme, M as MediaQuery, $ as $$Layout } from '../../chunks/Layout_DbmlHL6U.mjs';
import { F as FadeIn } from '../../chunks/FadeIn_Bcm_HfT1.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { B as Button } from '../../chunks/index_OA8fBTz-.mjs';
export { renderers } from '../../renderers.mjs';

const InputBoxStyled = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: ${Theme.primary};
  box-shadow: 0 0 10px rgb(123 123 123 / 30%);
  display: flex;
  align-items: center;
  height: 100%;
  width: 70%;
  color: ${Theme.secondary};
  border-radius: 15px;
  position: relative;

  ${(props) => props.$variant === "background-text" && InputBoxBackgroundTextVariant};
`;
const InputBoxLinkStyled = InputBoxStyled.withComponent("a");
const InputBoxBgText = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  text-transform: uppercase;
  font-size: 80px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -5px;
  z-index: 1;
  color: ${Theme.primary};
  opacity: 0.5;

  ${MediaQuery.max("xxl")} {
    font-size: 70px;
  }

  ${MediaQuery.max("xl")} {
    font-size: 50px;
    letter-spacing: -3px;
  }
`;
const InputBoxWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;
const InputBoxInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  color: ${Theme.secondary};

  &::placeholder {
    color: ${Theme.tertiary};
    opacity: 0.7;
  }
`;
const InputBoxBackgroundTextVariant = css`
  position: relative;
  overflow: hidden;
  padding: 20px;

  input {
    position: relative;
    z-index: 2;
    font-size: 18px;
  }
`;

const InputBox = ({
  value,
  onChange,
  placeholder,
  variant,
  bgText,
  type,
  boxAsLink,
  href,
  target
}) => {
  const InputBoxComponent = boxAsLink ? InputBoxLinkStyled : InputBoxStyled;
  return /* @__PURE__ */ jsxs(InputBoxComponent, { $variant: variant, href, target, children: [
    variant === "background-text" && bgText && /* @__PURE__ */ jsx(InputBoxBgText, { children: bgText }),
    /* @__PURE__ */ jsx(InputBoxWrapper, { children: /* @__PURE__ */ jsx(
      InputBoxInput,
      {
        type,
        value,
        onChange,
        placeholder
      }
    ) })
  ] });
};

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #29d;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 0.8s linear infinite;
  margin: 20px auto;
`;
const authorizedStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // overflow: hidden;
  height: 100%;
  h2,
  h3,
  h4 {
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 2;
  }

  p {
    margin-top: 20px;
  }

  ${MediaQuery.max("md")} {
    p {
      margin-top: 10px;
    }
  }
`;
styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  ${MediaQuery.max("md")} {
    flex-direction: column;
    gap: 0px;
  }
`;

const InteractiveForm = ({
  url,
  showButtons = false,
  form
}) => {
  const rUrl = form === "singleForm" ? "https://forms.office.com/e/KfpnEWdDwv" : "https://forms.office.com/e/Z5zitkZLGv";
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem(form);
    if (saved === "true") {
      setAuthorized(true);
    }
  }, [form]);
  const handleSubmit = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${url}${text}`, {
        method: "GET",
        mode: "cors",
        credentials: "omit"
      });
      if (!response.ok) {
        throw new Error("Password errata.");
      }
      const data = await response.json();
      if (data.redirectUrl) {
        setAuthorized(true);
        localStorage.setItem(form, "true");
      } else {
        setError("Errore: nessun URL ricevuto.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Errore sconosciuto";
      setError(errorMessage || "Errore di connessione.");
    } finally {
      setLoading(false);
    }
  };
  if (authorized) {
    return /* @__PURE__ */ jsxs(authorizedStyled, { children: [
      /* @__PURE__ */ jsx("p", { children: "Clicca qui per compilare il form e iscriverti:" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          link: rUrl,
          showIcon: false,
          asButton: false,
          target: "_blank",
          type: "button",
          align: "center",
          children: "Vai al form"
        }
      ),
      showButtons && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { children: "Inoltre, a disposizione i link per allegare certificato medico e modulo CUS (saranno comunque presenti anche all'interno del form stesso):" }),
        /* @__PURE__ */ jsx("p", { children: "La documentazione si trova nel link in alto a destra." }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "NOTA" }),
          ": ricordarsi di rinominare i file come segue:"
        ] }),
        /* @__PURE__ */ jsxs("ul", { children: [
          /* @__PURE__ */ jsxs("li", { children: [
            "Certificato medico:",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Nome_Cognome_Scuola_Certificato.pdf" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Modulo CUS (per chi partecipa con certificato medico):",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Nome_Cognome_Scuola_CUS.pdf" })
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            "Modulo CUS (per chi partecipa senza certificato medico):",
            " ",
            /* @__PURE__ */ jsx("strong", { children: "Nome_Cognome_Scuola_EASYCUS.pdf" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { children: "Inviare documentazione mancante a xcool@riasissu.it" })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(authorizedStyled, { children: [
    /* @__PURE__ */ jsx("h6", { children: "L'iscrizione e' riservata ai soci ed ex-soci RIASISSU. Chiedi la password al tuo rappresentante." }),
    /* @__PURE__ */ jsx("p", { children: "Inserisci la password:" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      InputBox,
      {
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: "Enter password...",
        type: "password"
      }
    ),
    error && /* @__PURE__ */ jsx("p", { style: { color: "red" }, children: error }),
    loading && /* @__PURE__ */ jsx(Spinner, {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "secondary",
        showIcon: false,
        asButton: true,
        target: "_blank",
        type: "button",
        onClick: handleSubmit,
        align: "center",
        children: loading ? "Verifica..." : "Vai al form!"
      }
    )
  ] });
};

const $$Astro = createAstro("https://riasissu.it");
async function getStaticPaths() {
  return [
    { params: { slug: "teamForm" } },
    { params: { slug: "singleForm" } }
  ];
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const formUrl = slug === "singleForm" ? "https://us-central1-riasissu-7c453.cloudfunctions.net/passwordProtectedPage?password=" : "https://us-central1-riasissu-7c453.cloudfunctions.net/passwordProtectedPageTeam?password=";
  const text = slug === "teamForm" ? "Iscrivi la tua squadra alle XCOOL" : "Iscriviti alle XCOOL, ricorda di iscrivere anche le tue squadre!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Form", "description": "Check password to access the form" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-content page-404"> ${renderComponent($$result2, "ContentSection", ContentSection, { "style": {
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
    marginTop: "70px"
    // overflow: "auto",
  } }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FadeIn", FadeIn, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@utils/animations/FadeIn.tsx", "client:component-export": "FadeIn" }, { "default": ($$result4) => renderTemplate` <h1>${text}</h1> ${renderComponent($$result4, "InteractiveForm", InteractiveForm, { "client:load": true, "url": formUrl, "showButtons": slug === "singleForm", "form": slug, "client:component-hydration": "load", "client:component-path": "@components/InteractiveForm", "client:component-export": "default" })} ` })} ` })} </main> ` })}`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/form/[slug].astro", void 0);

const $$file = "/home/runner/work/xcool-webpage/xcool-webpage/src/pages/form/[slug].astro";
const $$url = "/xcool/form/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
