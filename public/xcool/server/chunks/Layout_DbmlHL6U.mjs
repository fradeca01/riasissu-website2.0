import { l as cspAlgorithmSchema, n as cspHashSchema, o as allowedDirectivesSchema, p as ASTRO_VERSION, A as AstroError, q as UnknownContentCollectionError, v as AstroUserError, e as createAstro, f as createComponent, h as addAttribute, r as renderTemplate, k as renderComponent, w as renderScript, x as renderHead, y as renderSlot } from './astro/server_DboVfyth.mjs';
import 'kleur/colors';
import { css, keyframes, Global } from '@emotion/react';
import { jsx, jsxs } from 'react/jsx-runtime';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import 'clsx';
import { version } from 'vite';
import 'common-ancestor-path';
import { syntaxHighlightDefaults, markdownConfigDefaults } from '@astrojs/markdown-remark';
import { bundledThemes } from 'shiki';
import { z, ZodError } from 'zod';
import { createRequire } from 'node:module';
import 'es-module-lexer';
import './astro-designed-error-pages_Bbhgt4S_.mjs';
import 'xxhash-wasm';
import 'github-slugger';
import './index_MaT6fT73.mjs';
import 'esbuild';
import { AstroTelemetry } from '@astrojs/telemetry';
import 'html-escaper';
import debugPackage from 'debug';
import 'js-yaml';
import 'smol-toml';
import 'tsconfck';
import 'zod-to-json-schema';
import '@rollup/pluginutils';
import 'dlv';
import 'dset';
import 'cookie';
import 'prompts';
import '@astrojs/compiler';
import react from '@vitejs/plugin-react';
import { version as version$1 } from 'react-dom';
import CompressionPlugin from 'vite-plugin-compression';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { EnumChangefreq, SitemapAndIndexStream, SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, normalize } from 'path';
import { Readable, pipeline } from 'stream';
import { promisify } from 'util';
import { mkdir } from 'fs/promises';
import replace from 'stream-replace-string';
import * as fs from 'node:fs/promises';
import { S as STATIC_HEADERS_FILE } from './shared_Dy8t_VAI.mjs';

const Breakpoints = {
  base: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  xxxl: 1920
};
const MediaQuery = {
  /**
   *
   * @param breakpoint MediaQuery.min("md")
   * @returns @media example: (min-width: 768px)
   */
  min: (breakpoint) => `@media (min-width: ${Breakpoints[breakpoint]}px)`,
  /**
   *
   * @param breakpoint MediaQuery.max("lg")
   * @returns @media example: (max-width: 991px)
   */
  max: (breakpoint) => `@media (max-width: ${Breakpoints[breakpoint]}px)`,
  /**
   *
   * @param minBreakpoint MediaQuery.between("md", "lg")
   * @returns @media example: (min-width: 768px) and (max-width: 991px)
   */
  between: (minBreakpoint, maxBreakpoint) => `@media (min-width: ${Breakpoints[minBreakpoint]}px) and (max-width: ${Breakpoints[maxBreakpoint]}px)`
};

const Colors = {
  white: "#FFFFFF",
  dark: "#101118",
  darkLighter: "#262626"
  //"#20222e",
};
const ThemeVar = css`
  :root {
    --primary: ${Colors.white};
    --secondary: ${Colors.darkLighter};
    --tertiary: ${Colors.dark};
  }
`;
const Theme = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  tertiary: "var(--tertiary)"
};

const RobotoBlack = "/xcool/_astro/Roboto-Black.tBYbbWl-.woff2";

const RobotoBlackItalic = "/xcool/_astro/Roboto-BlackItalic.CxCOE_MU.woff2";

const RobotoBold = "/xcool/_astro/Roboto-Bold.OBUL28o9.woff2";

const RobotoBoldItalic = "/xcool/_astro/Roboto-BoldItalic.Bbs8lVH2.woff2";

const RobotoItalic = "/xcool/_astro/Roboto-Italic.0KLjOP-5.woff2";

const RobotoLight = "/xcool/_astro/Roboto-Light.-TzFADkf.woff2";

const RobotoLightItalic = "/xcool/_astro/Roboto-LightItalic.DuFP9W7P.woff2";

const RobotoMedium = "/xcool/_astro/Roboto-Medium.DRylU_ql.woff2";

const RobotoMediumItalic = "/xcool/_astro/Roboto-MediumItalic.CPqftbAj.woff2";

const RobotoRegular = "/xcool/_astro/Roboto-Regular.CjbfJjO0.woff2";

const RobotoThin = "/xcool/_astro/Roboto-Thin.Df4ydPom.woff2";

const RobotoThinItalic = "/xcool/_astro/Roboto-ThinItalic.CI9JpB2v.woff2";

var Fonts = /* @__PURE__ */ ((Fonts2) => {
  Fonts2["primary"] = `"Roboto", sans-serif`;
  return Fonts2;
})(Fonts || {});
const FontFace = css`
  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 100;
    src: url(${RobotoThin}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    src: url(${RobotoLight}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    src: url(${RobotoMedium}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    src: url(${RobotoBold}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 900;
    src: url(${RobotoBlack}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  // italic
  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 100;
    src: url(${RobotoThinItalic}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    src: url(${RobotoLightItalic}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    src: url(${RobotoItalic}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 500;
    src: url(${RobotoMediumItalic}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 700;
    src: url(${RobotoBoldItalic}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 900;
    src: url(${RobotoBlackItalic}) format("woff2");
    font-display: swap;
    unicode-range:
      U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
      U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
      U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
`;

const NormalizeCSS = css`
    ${FontFace};
    ${ThemeVar};

    :root {
        color-scheme: light only;
    }

    body,
    html {
        font-family: ${Fonts.primary};
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
    }

    * {
        box-sizing: border-box;
    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;

        color: ${Theme.tertiary};
        background: ${Theme.primary};
        position: relative;

        &:before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: ${Theme.secondary};
            z-index: 20;
            transition: transform 0.5s;
            transition-delay: 0.2s;
        }

        &::-webkit-scrollbar {
            width: 17px;
            background: ${Theme.secondary};
        }

        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 1);
        }

        &::-webkit-scrollbar-thumb {
            background-color: #7c2a04;
        }

        &.hide-overflow {
            &:before {
                transform: translateY(-100%);
            }
        }
    }

    main {
        display: block;
    }

    a {
        background-color: transparent;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        text-decoration: underline dotted;
    }

    img {
        border-style: none;
        object-fit: cover;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
    }

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }

    button {
        padding: 0;
    }

    figure {
        margin: 0;
        line-height: 0;
    }

    strong {
        font-weight: 700;
    }

    .link {
        color: #FFFFFF;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            text-decoration: underline; 
        }
    }

    a {
        text-decoration: none;
        color: inherit;
    }
        
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 30px;

        &:last-child {
            margin: 0;
        }
    }

    h1 {
        font-size: 50px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 40px;
        }
    }

    h2 {
        font-size: 45px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 35px;
        }
    }

    h3 {
        font-size: 35px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 30px;
        }
    }

    h4 {
        font-size: 25px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 25px;
        }
    }

    h5 {
        font-size: 20px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 20px;
        }
    }

    h6 {
        font-size: 18px;
        line-height: 1.2;

        ${MediaQuery.max("lg")} {
            font-size: 15px;
        }
    }

    p {
        margin: 0 0 10px;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 1px;
        color: ${Theme.tertiary};

        &:last-child {
            margin: 0;
        }
    }

    .page-404 {
        background-color: ${Theme.secondary};
        min-height: 100dvh;
        // overflow: visible;
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: ${Theme.primary};

        p {
            color: ${Theme.primary};
        }
    }

    .info-page {
        background-color: ${Theme.secondary};
        min-height: 100dvh;
        color: ${Theme.primary};

        p {
            color: ${Theme.primary};
            font-size: 1    rem;
            line-height: 1.5;
            text-align: left;
    }
        }
            
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: start  ;
        // overflow: visible;
    }
`;

const LogoStyled = styled.div`
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
        background-color: ${Theme.primary};
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
`;

const Logo$1 = new Proxy({"src":"/xcool/_astro/3Logo3.CyBHQXX_.webp","width":514,"height":224,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/3Logo3.webp";
							}
							
							return target[name];
						}
					});

new Proxy({"src":"/xcool/_astro/castello.D-kwIREF.webp","width":1200,"height":800,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/castello.webp";
							}
							
							return target[name];
						}
					});

const Piazza = new Proxy({"src":"/xcool/_astro/friuli.D0I1oeUR.webp","width":2720,"height":3094,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/runner/work/xcool-webpage/xcool-webpage/src/static/images/friuli.webp";
							}
							
							return target[name];
						}
					});

const images = {
  // preview: PreviewPng,
  heroImg: Logo$1,
  logo: Logo$1
};
const Image = ({
  alt,
  srcLocal,
  height,
  width,
  src,
  loading,
  ...rest
}) => {
  if (!srcLocal && !src) {
    throw new Error("srcLocal or src is required");
  }
  const image = srcLocal ? images[srcLocal] : { src, width, height };
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: image.src,
      alt,
      width: width ? width : image.width,
      height: height ? height : image.height,
      loading,
      ...rest
    }
  );
};

const Logo = () => {
  return /* @__PURE__ */ jsx(LogoStyled, { children: /* @__PURE__ */ jsx("a", { href: "/xcool", children: /* @__PURE__ */ jsx(Image, { srcLocal: "logo", alt: "logo" }) }) });
};

const FadeInStyled = styled.div`
  opacity: 0.001;
  transform: translateY(20px);
  transition:
    opacity 0.5s,
    transform 0.5s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
const FadeInKeyframes = keyframes`
    from {
        transform: translateY(50px);
        opacity: 0.01;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
`;

const HeaderStyled = styled.header`
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

  animation: ${FadeInKeyframes} 1s;
  animation-delay: 0.4s;
  transition: background 0.5s;

  &.scrolled {
    background: rgba(0, 0, 0, 0.8);
  }
`;
const ContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 40px;

  ${MediaQuery.max("lg")} {
    padding: 0 20px;
  }
`;

const NavigationStyled = styled.div`
  display: flex;
  gap: 50px;

  ${MediaQuery.max("xl")} {
    gap: 20px;
  }
`;
const NavigationListWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  ${MediaQuery.max("lg")} {
    position: fixed;
    top: 0;
    right: -100%;

    background: ${Theme.secondary};
    height: 100dvh;
    z-index: 2;
    transform: translateX(100%);
    transition:
      transform 0.3s linear,
      right 0.7s;
    padding-top: 85px;

    width: clamp(300px, 80%, 300px);

    ${({ $isOpen }) => $isOpen && css`
        right: 0;
        transform: translateX(0);
      `};
  }
`;
const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;

  ${MediaQuery.min("lg")} {
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  ${MediaQuery.max("lg")} {
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
    color: ${Theme.primary};
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
    transition:
      background-color 0.3s,
      color 0.3s;

    ${MediaQuery.max("lg")} {
      padding: 10px 20px;
    }

    &:hover {
      background-color: ${Theme.primary};
      color: ${Theme.secondary};

      text-shadow: none;
    }

    img {
      margin: 0 15px 0 0;

      max-width: 30px;
      max-height: 30px;

      ${MediaQuery.max("xl")} {
        margin: 0 10px 0 0;
      }
    }
  }
`;

const HamburgerMenuButton = styled.button`
  position: relative;
  z-index: 3;

  background: ${Theme.primary};
  border-radius: 50%;
  cursor: pointer;
  transition:
    background 0.3s,
    border-color 0.3s,
    color 0.3s;
  width: 45px;
  height: 45px;
  border-color: transparent;

  ${MediaQuery.min("lg")} {
    display: none;
  }
`;
const HamburgerMenuButtonLine = styled.span`
  background: ${Theme.secondary};
  position: absolute;
  left: 50%;
  display: block;
  transform: translate(-50%, -50%);
  transition:
    transform 0.3s,
    background 0.3s,
    top 0.3s;
  pointer-events: none;

  width: 50%;
  height: 3px;

  ${MediaQuery.max("lg")} {
    height: 2px;
  }

  ${({ $open }) => $open ? css`
          transform: translate(-50%, -50%) rotate(45deg);
          top: 50%;
        ` : css`
          top: calc(50% - 4px);
        `}

  &:not(:first-of-type) {
    ${({ $open }) => $open ? css`
            transform: translate(-49%, -50%) rotate(-45deg);
            top: 50%;
          ` : css`
            top: calc(50% + 4px);
          `}
  }
`;

const Hamburger = ({ state }) => {
  const { open, setOpen } = state;
  const handleMenu = () => {
    setOpen(!open);
  };
  const handleClickOutside = (e) => {
    const target = e.target;
    if (!target.closest("nav") && open && target.tagName !== "BUTTON") {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (!open) return;
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(
    HamburgerMenuButton,
    {
      $open: open,
      onClick: handleMenu,
      "aria-label": "Menu",
      "aria-expanded": open,
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ jsx(HamburgerMenuButtonLine, { $open: open }),
        /* @__PURE__ */ jsx(HamburgerMenuButtonLine, { $open: open })
      ]
    }
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(NavigationStyled, { children: [
    /* @__PURE__ */ jsx(NavigationListWrapper, { $isOpen: isOpen, children: /* @__PURE__ */ jsxs(NavigationList, { children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", children: "RIASISSU" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/xcool/info", children: "Info E Programma" }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/xcool/tabelloni", children: "Gironi E Tabelloni" }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      Hamburger,
      {
        state: {
          open: isOpen,
          setOpen: setIsOpen
        }
      }
    )
  ] });
};

const Header = ({ headerClass }) => {
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ jsx(HeaderStyled, { className: headerClass, children: /* @__PURE__ */ jsxs(ContainerStyled, { children: [
    /* @__PURE__ */ jsx(Logo, {}),
    /* @__PURE__ */ jsx(Navigation, {})
  ] }) });
};

const LOCAL_PROVIDER_NAME = "local";

const weightSchema = z.union([z.string(), z.number()]);
const styleSchema = z.enum(["normal", "italic", "oblique"]);
const unicodeRangeSchema = z.array(z.string()).nonempty();
const familyPropertiesSchema = z.object({
  /**
   * A [font weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:
   *
   * ```js
   * weight: "100 900"
   * ```
   */
  weight: weightSchema.optional(),
  /**
   * A [font style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).
   */
  style: styleSchema.optional(),
  /**
   * @default `"swap"`
   *
   * A [font display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display).
   */
  display: z.enum(["auto", "block", "swap", "fallback", "optional"]).optional(),
  /**
   * A [font stretch](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-stretch).
   */
  stretch: z.string().optional(),
  /**
   * Font [feature settings](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-feature-settings).
   */
  featureSettings: z.string().optional(),
  /**
   * Font [variation settings](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-variation-settings).
   */
  variationSettings: z.string().optional()
});
const fallbacksSchema = z.object({
  /**
  	 * @default `["sans-serif"]`
  	 *
  	 * An array of fonts to use when your chosen font is unavailable, or loading. Fallback fonts will be chosen in the order listed. The first available font will be used:
  	 *
  	 * ```js
  	 * fallbacks: ["CustomFont", "serif"]
  	 * ```
  	 *
  	 * To disable fallback fonts completely, configure an empty array:
  	 *
  	 * ```js
  	 * fallbacks: []
  	 * ```
  	 *
  
  	 * If the last font in the `fallbacks` array is a [generic family name](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#generic-name), Astro will attempt to generate [optimized fallbacks](https://developer.chrome.com/blog/font-fallbacks) using font metrics will be generated. To disable this optimization, set `optimizedFallbacks` to false.
  	 */
  fallbacks: z.array(z.string()).optional(),
  /**
   * @default `true`
   *
   * Whether or not to enable optimized fallback generation. You may disable this default optimization to have full control over `fallbacks`.
   */
  optimizedFallbacks: z.boolean().optional()
});
const requiredFamilyAttributesSchema = z.object({
  /**
   * The font family name, as identified by your font provider.
   */
  name: z.string(),
  /**
   * A valid [ident](https://developer.mozilla.org/en-US/docs/Web/CSS/ident) in the form of a CSS variable (i.e. starting with `--`).
   */
  cssVariable: z.string()
});
const entrypointSchema = z.union([z.string(), z.instanceof(URL)]);
const fontProviderSchema = z.object({
  /**
   * URL, path relative to the root or package import.
   */
  entrypoint: entrypointSchema,
  /**
   * Optional serializable object passed to the unifont provider.
   */
  config: z.record(z.string(), z.any()).optional()
}).strict();
const localFontFamilySchema = requiredFamilyAttributesSchema.merge(fallbacksSchema).merge(
  z.object({
    /**
     * The source of your font files. Set to `"local"` to use local font files.
     */
    provider: z.literal(LOCAL_PROVIDER_NAME),
    /**
     * Each variant represents a [`@font-face` declaration](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/).
     */
    variants: z.array(
      familyPropertiesSchema.merge(
        z.object({
          /**
           * Font [sources](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src). It can be a path relative to the root, a package import or a URL. URLs are particularly useful if you inject local fonts through an integration.
           */
          src: z.array(
            z.union([
              entrypointSchema,
              z.object({ url: entrypointSchema, tech: z.string().optional() }).strict()
            ])
          ).nonempty(),
          /**
           * A [unicode range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range).
           */
          unicodeRange: unicodeRangeSchema.optional()
          // TODO: find a way to support subsets (through fontkit?)
        }).strict()
      )
    ).nonempty()
  })
).strict();
const remoteFontFamilySchema = requiredFamilyAttributesSchema.merge(
  familyPropertiesSchema.omit({
    weight: true,
    style: true
  })
).merge(fallbacksSchema).merge(
  z.object({
    /**
     * The source of your font files. You can use a built-in provider or write your own custom provider.
     */
    provider: fontProviderSchema,
    /**
     * @default `[400]`
     *
     * An array of [font weights](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight). If the associated font is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide), you can specify a range of weights:
     *
     * ```js
     * weight: "100 900"
     * ```
     */
    weights: z.array(weightSchema).nonempty().optional(),
    /**
     * @default `["normal", "italic"]`
     *
     * An array of [font styles](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).
     */
    styles: z.array(styleSchema).nonempty().optional(),
    /**
     * @default `["cyrillic-ext", "cyrillic", "greek-ext", "greek", "vietnamese", "latin-ext", "latin"]`
     *
     * An array of [font subsets](https://knaap.dev/posts/font-subsetting/):
     */
    subsets: z.array(z.string()).nonempty().optional(),
    /**
     * A [unicode range](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/unicode-range).
     */
    unicodeRange: unicodeRangeSchema.optional()
  })
).strict();

const StringSchema = z.object({
  type: z.literal("string"),
  optional: z.boolean().optional(),
  default: z.string().optional(),
  max: z.number().optional(),
  min: z.number().min(0).optional(),
  length: z.number().optional(),
  url: z.boolean().optional(),
  includes: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional()
});
const NumberSchema = z.object({
  type: z.literal("number"),
  optional: z.boolean().optional(),
  default: z.number().optional(),
  gt: z.number().optional(),
  min: z.number().optional(),
  lt: z.number().optional(),
  max: z.number().optional(),
  int: z.boolean().optional()
});
const BooleanSchema = z.object({
  type: z.literal("boolean"),
  optional: z.boolean().optional(),
  default: z.boolean().optional()
});
const EnumSchema = z.object({
  type: z.literal("enum"),
  values: z.array(
    // We use "'" for codegen so it can't be passed here
    z.string().refine((v) => !v.includes("'"), {
      message: `The "'" character can't be used as an enum value`
    })
  ),
  optional: z.boolean().optional(),
  default: z.string().optional()
});
const EnvFieldType = z.union([
  StringSchema,
  NumberSchema,
  BooleanSchema,
  EnumSchema.superRefine((schema, ctx) => {
    if (schema.default) {
      if (!schema.values.includes(schema.default)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `The default value "${schema.default}" must be one of the specified values: ${schema.values.join(", ")}.`
        });
      }
    }
  })
]);
const PublicClientEnvFieldMetadata = z.object({
  context: z.literal("client"),
  access: z.literal("public")
});
const PublicServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("public")
});
const SecretServerEnvFieldMetadata = z.object({
  context: z.literal("server"),
  access: z.literal("secret")
});
const _EnvFieldMetadata = z.union([
  PublicClientEnvFieldMetadata,
  PublicServerEnvFieldMetadata,
  SecretServerEnvFieldMetadata
]);
const EnvFieldMetadata = z.custom().superRefine((data, ctx) => {
  const result = _EnvFieldMetadata.safeParse(data);
  if (result.success) {
    return;
  }
  for (const issue of result.error.issues) {
    if (issue.code === z.ZodIssueCode.invalid_union) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `**Invalid combination** of "access" and "context" options:
  Secret client variables are not supported. Please review the configuration of \`env.schema.${ctx.path.at(-1)}\`.
  Learn more at https://docs.astro.build/en/guides/environment-variables/#variable-types`,
        path: ["context", "access"]
      });
    } else {
      ctx.addIssue(issue);
    }
  }
});
const EnvSchemaKey = z.string().min(1).refine(([firstChar]) => isNaN(Number.parseInt(firstChar)), {
  message: "A valid variable name cannot start with a number."
}).refine((str) => /^[A-Z0-9_]+$/.test(str), {
  message: "A valid variable name can only contain uppercase letters, numbers and underscores."
});
const EnvSchema = z.record(EnvSchemaKey, z.intersection(EnvFieldMetadata, EnvFieldType));

const ASTRO_CONFIG_DEFAULTS = {
  root: ".",
  srcDir: "./src",
  publicDir: "./public",
  outDir: "./dist",
  cacheDir: "./node_modules/.astro",
  base: "/",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    client: "./client/",
    server: "./server/",
    assets: "_astro",
    serverEntry: "entry.mjs",
    redirects: true,
    inlineStylesheets: "auto",
    concurrency: 1
  },
  image: {
    endpoint: { entrypoint: void 0, route: "/_image" },
    service: { entrypoint: "astro/assets/services/sharp", config: {} },
    responsiveStyles: false
  },
  devToolbar: {
    enabled: true
  },
  compressHTML: true,
  server: {
    host: false,
    port: 4321,
    open: false,
    allowedHosts: []
  },
  integrations: [],
  markdown: markdownConfigDefaults,
  vite: {},
  legacy: {
    collections: false
  },
  redirects: {},
  security: {
    checkOrigin: true
  },
  env: {
    schema: {},
    validateSecrets: false
  },
  experimental: {
    clientPrerender: false,
    contentIntellisense: false,
    headingIdCompat: false,
    preserveScriptOrder: false,
    liveContentCollections: false,
    csp: false,
    staticImportMetaEnv: false,
    chromeDevtoolsWorkspace: false
  }
};
const highlighterTypesSchema = z.union([z.literal("shiki"), z.literal("prism")]).default(syntaxHighlightDefaults.type);
z.object({
  root: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.root).transform((val) => new URL(val)),
  srcDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.srcDir).transform((val) => new URL(val)),
  publicDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.publicDir).transform((val) => new URL(val)),
  outDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.outDir).transform((val) => new URL(val)),
  cacheDir: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.cacheDir).transform((val) => new URL(val)),
  site: z.string().url().optional(),
  compressHTML: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.compressHTML),
  base: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.base),
  trailingSlash: z.union([z.literal("always"), z.literal("never"), z.literal("ignore")]).optional().default(ASTRO_CONFIG_DEFAULTS.trailingSlash),
  output: z.union([z.literal("static"), z.literal("server")]).optional().default("static"),
  scopedStyleStrategy: z.union([z.literal("where"), z.literal("class"), z.literal("attribute")]).optional().default("attribute"),
  adapter: z.object({ name: z.string(), hooks: z.object({}).passthrough().default({}) }).optional(),
  integrations: z.preprocess(
    // preprocess
    (val) => Array.isArray(val) ? val.flat(Infinity).filter(Boolean) : val,
    // validate
    z.array(z.object({ name: z.string(), hooks: z.object({}).passthrough().default({}) })).default(ASTRO_CONFIG_DEFAULTS.integrations)
  ),
  build: z.object({
    format: z.union([z.literal("file"), z.literal("directory"), z.literal("preserve")]).optional().default(ASTRO_CONFIG_DEFAULTS.build.format),
    client: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.client).transform((val) => new URL(val)),
    server: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.server).transform((val) => new URL(val)),
    assets: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.assets),
    assetsPrefix: z.string().optional().or(z.object({ fallback: z.string() }).and(z.record(z.string())).optional()),
    serverEntry: z.string().optional().default(ASTRO_CONFIG_DEFAULTS.build.serverEntry),
    redirects: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.build.redirects),
    inlineStylesheets: z.enum(["always", "auto", "never"]).optional().default(ASTRO_CONFIG_DEFAULTS.build.inlineStylesheets),
    concurrency: z.number().min(1).optional().default(ASTRO_CONFIG_DEFAULTS.build.concurrency)
  }).default({}),
  server: z.preprocess(
    // preprocess
    // NOTE: Uses the "error" command here because this is overwritten by the
    // individualized schema parser with the correct command.
    (val) => typeof val === "function" ? val({ command: "error" }) : val,
    // validate
    z.object({
      open: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.open),
      host: z.union([z.string(), z.boolean()]).optional().default(ASTRO_CONFIG_DEFAULTS.server.host),
      port: z.number().optional().default(ASTRO_CONFIG_DEFAULTS.server.port),
      headers: z.custom().optional(),
      allowedHosts: z.union([z.array(z.string()), z.literal(true)]).optional().default(ASTRO_CONFIG_DEFAULTS.server.allowedHosts)
    }).default({})
  ),
  redirects: z.record(
    z.string(),
    z.union([
      z.string(),
      z.object({
        status: z.union([
          z.literal(300),
          z.literal(301),
          z.literal(302),
          z.literal(303),
          z.literal(304),
          z.literal(307),
          z.literal(308)
        ]),
        destination: z.string()
      })
    ])
  ).default(ASTRO_CONFIG_DEFAULTS.redirects),
  prefetch: z.union([
    z.boolean(),
    z.object({
      prefetchAll: z.boolean().optional(),
      defaultStrategy: z.enum(["tap", "hover", "viewport", "load"]).optional()
    })
  ]).optional(),
  image: z.object({
    endpoint: z.object({
      route: z.literal("/_image").or(z.string()).default(ASTRO_CONFIG_DEFAULTS.image.endpoint.route),
      entrypoint: z.string().optional()
    }).default(ASTRO_CONFIG_DEFAULTS.image.endpoint),
    service: z.object({
      entrypoint: z.union([z.literal("astro/assets/services/sharp"), z.string()]).default(ASTRO_CONFIG_DEFAULTS.image.service.entrypoint),
      config: z.record(z.any()).default({})
    }).default(ASTRO_CONFIG_DEFAULTS.image.service),
    domains: z.array(z.string()).default([]),
    remotePatterns: z.array(
      z.object({
        protocol: z.string().optional(),
        hostname: z.string().optional(),
        port: z.string().optional(),
        pathname: z.string().optional()
      })
    ).default([]),
    layout: z.enum(["constrained", "fixed", "full-width", "none"]).optional(),
    objectFit: z.string().optional(),
    objectPosition: z.string().optional(),
    breakpoints: z.array(z.number()).optional(),
    responsiveStyles: z.boolean().default(ASTRO_CONFIG_DEFAULTS.image.responsiveStyles)
  }).default(ASTRO_CONFIG_DEFAULTS.image),
  devToolbar: z.object({
    enabled: z.boolean().default(ASTRO_CONFIG_DEFAULTS.devToolbar.enabled)
  }).default(ASTRO_CONFIG_DEFAULTS.devToolbar),
  markdown: z.object({
    syntaxHighlight: z.union([
      z.object({
        type: highlighterTypesSchema,
        excludeLangs: z.array(z.string()).optional().default(syntaxHighlightDefaults.excludeLangs)
      }).default(syntaxHighlightDefaults),
      highlighterTypesSchema,
      z.literal(false)
    ]).default(ASTRO_CONFIG_DEFAULTS.markdown.syntaxHighlight),
    shikiConfig: z.object({
      langs: z.custom().array().transform((langs) => {
        for (const lang of langs) {
          if (typeof lang === "object") {
            if (lang.id) {
              lang.name = lang.id;
            }
            if (lang.grammar) {
              Object.assign(lang, lang.grammar);
            }
          }
        }
        return langs;
      }).default([]),
      langAlias: z.record(z.string(), z.string()).optional().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.langAlias),
      theme: z.enum(Object.keys(bundledThemes)).or(z.custom()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.theme),
      themes: z.record(
        z.enum(Object.keys(bundledThemes)).or(z.custom())
      ).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.themes),
      defaultColor: z.union([z.literal("light"), z.literal("dark"), z.string(), z.literal(false)]).optional(),
      wrap: z.boolean().or(z.null()).default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.wrap),
      transformers: z.custom().array().default(ASTRO_CONFIG_DEFAULTS.markdown.shikiConfig.transformers)
    }).default({}),
    remarkPlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.remarkPlugins),
    rehypePlugins: z.union([
      z.string(),
      z.tuple([z.string(), z.any()]),
      z.custom((data) => typeof data === "function"),
      z.tuple([z.custom((data) => typeof data === "function"), z.any()])
    ]).array().default(ASTRO_CONFIG_DEFAULTS.markdown.rehypePlugins),
    remarkRehype: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.markdown.remarkRehype),
    gfm: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.gfm),
    smartypants: z.boolean().default(ASTRO_CONFIG_DEFAULTS.markdown.smartypants)
  }).default({}),
  vite: z.custom((data) => data instanceof Object && !Array.isArray(data)).default(ASTRO_CONFIG_DEFAULTS.vite),
  i18n: z.optional(
    z.object({
      defaultLocale: z.string(),
      locales: z.array(
        z.union([
          z.string(),
          z.object({
            path: z.string(),
            codes: z.string().array().nonempty()
          })
        ])
      ),
      domains: z.record(
        z.string(),
        z.string().url(
          "The domain value must be a valid URL, and it has to start with 'https' or 'http'."
        )
      ).optional(),
      fallback: z.record(z.string(), z.string()).optional(),
      routing: z.literal("manual").or(
        z.object({
          prefixDefaultLocale: z.boolean().optional().default(false),
          // TODO: Astro 6.0 change to false
          redirectToDefaultLocale: z.boolean().optional().default(true),
          fallbackType: z.enum(["redirect", "rewrite"]).optional().default("redirect")
        })
      ).optional().default({})
    }).optional()
  ),
  security: z.object({
    checkOrigin: z.boolean().default(ASTRO_CONFIG_DEFAULTS.security.checkOrigin)
  }).optional().default(ASTRO_CONFIG_DEFAULTS.security),
  env: z.object({
    schema: EnvSchema.optional().default(ASTRO_CONFIG_DEFAULTS.env.schema),
    validateSecrets: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.env.validateSecrets)
  }).strict().optional().default(ASTRO_CONFIG_DEFAULTS.env),
  session: z.object({
    driver: z.string().optional(),
    options: z.record(z.any()).optional(),
    cookie: z.object({
      name: z.string().optional(),
      domain: z.string().optional(),
      path: z.string().optional(),
      maxAge: z.number().optional(),
      sameSite: z.union([z.enum(["strict", "lax", "none"]), z.boolean()]).optional(),
      secure: z.boolean().optional()
    }).or(z.string()).transform((val) => {
      if (typeof val === "string") {
        return { name: val };
      }
      return val;
    }).optional(),
    ttl: z.number().optional()
  }).optional(),
  experimental: z.object({
    clientPrerender: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.clientPrerender),
    contentIntellisense: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.contentIntellisense),
    headingIdCompat: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.headingIdCompat),
    preserveScriptOrder: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.preserveScriptOrder),
    fonts: z.array(z.union([localFontFamilySchema, remoteFontFamilySchema])).optional(),
    liveContentCollections: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.liveContentCollections),
    csp: z.union([
      z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.csp),
      z.object({
        algorithm: cspAlgorithmSchema,
        directives: z.array(allowedDirectivesSchema).optional(),
        styleDirective: z.object({
          resources: z.array(z.string()).optional(),
          hashes: z.array(cspHashSchema).optional()
        }).optional(),
        scriptDirective: z.object({
          resources: z.array(z.string()).optional(),
          hashes: z.array(cspHashSchema).optional(),
          strictDynamic: z.boolean().optional()
        }).optional()
      })
    ]).optional().default(ASTRO_CONFIG_DEFAULTS.experimental.csp),
    staticImportMetaEnv: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.staticImportMetaEnv),
    chromeDevtoolsWorkspace: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.experimental.chromeDevtoolsWorkspace)
  }).strict(
    `Invalid or outdated experimental feature.
Check for incorrect spelling or outdated Astro version.
See https://docs.astro.build/en/reference/experimental-flags/ for a list of all current experiments.`
  ).default({}),
  legacy: z.object({
    collections: z.boolean().optional().default(ASTRO_CONFIG_DEFAULTS.legacy.collections)
  }).default({})
});

z.custom().superRefine((config, ctx) => {
  if (config.build.assetsPrefix && typeof config.build.assetsPrefix !== "string" && !config.build.assetsPrefix.fallback) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The `fallback` is mandatory when defining the option as an object.",
      path: ["build", "assetsPrefix"]
    });
  }
  for (let i = 0; i < config.image.remotePatterns.length; i++) {
    const { hostname, pathname } = config.image.remotePatterns[i];
    if (hostname && hostname.includes("*") && !(hostname.startsWith("*.") || hostname.startsWith("**."))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "wildcards can only be placed at the beginning of the hostname",
        path: ["image", "remotePatterns", i, "hostname"]
      });
    }
    if (pathname && pathname.includes("*") && !(pathname.endsWith("/*") || pathname.endsWith("/**"))) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "wildcards can only be placed at the end of a pathname",
        path: ["image", "remotePatterns", i, "pathname"]
      });
    }
  }
  if (config.outDir.toString().startsWith(config.publicDir.toString())) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "The value of `outDir` must not point to a path within the folder set as `publicDir`, this will cause an infinite loop",
      path: ["outDir"]
    });
  }
  if (config.i18n) {
    const { defaultLocale, locales: _locales, fallback, domains } = config.i18n;
    const locales = _locales.map((locale) => {
      if (typeof locale === "string") {
        return locale;
      } else {
        return locale.path;
      }
    });
    if (!locales.includes(defaultLocale)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `The default locale \`${defaultLocale}\` is not present in the \`i18n.locales\` array.`,
        path: ["i18n", "locales"]
      });
    }
    if (fallback) {
      for (const [fallbackFrom, fallbackTo] of Object.entries(fallback)) {
        if (!locales.includes(fallbackFrom)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The locale \`${fallbackFrom}\` key in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "fallbacks"]
          });
        }
        if (fallbackFrom === defaultLocale) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `You can't use the default locale as a key. The default locale can only be used as value.`,
            path: ["i18n", "fallbacks"]
          });
        }
        if (!locales.includes(fallbackTo)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The locale \`${fallbackTo}\` value in the \`i18n.fallback\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "fallbacks"]
          });
        }
      }
    }
    if (domains) {
      const entries = Object.entries(domains);
      const hasDomains = domains ? Object.keys(domains).length > 0 : false;
      if (entries.length > 0 && !hasDomains) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `When specifying some domains, the property \`i18n.routing.strategy\` must be set to \`"domains"\`.`,
          path: ["i18n", "routing", "strategy"]
        });
      }
      if (hasDomains) {
        if (!config.site) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The option `site` isn't set. When using the 'domains' strategy for `i18n`, `site` is required to create absolute URLs for locales that aren't mapped to a domain.",
            path: ["site"]
          });
        }
        if (config.output !== "server") {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Domain support is only available when `output` is `"server"`.',
            path: ["output"]
          });
        }
      }
      for (const [domainKey, domainValue] of entries) {
        if (!locales.includes(domainKey)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `The locale \`${domainKey}\` key in the \`i18n.domains\` record doesn't exist in the \`i18n.locales\` array.`,
            path: ["i18n", "domains"]
          });
        }
        if (!domainValue.startsWith("https") && !domainValue.startsWith("http")) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The domain value must be a valid URL, and it has to start with 'https' or 'http'.",
            path: ["i18n", "domains"]
          });
        } else {
          try {
            const domainUrl = new URL(domainValue);
            if (domainUrl.pathname !== "/") {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: `The URL \`${domainValue}\` must contain only the origin. A subsequent pathname isn't allowed here. Remove \`${domainUrl.pathname}\`.`,
                path: ["i18n", "domains"]
              });
            }
          } catch {
          }
        }
      }
    }
  }
  if (config.experimental.fonts && config.experimental.fonts.length > 0) {
    for (let i = 0; i < config.experimental.fonts.length; i++) {
      const { cssVariable } = config.experimental.fonts[i];
      if (!cssVariable.startsWith("--") || cssVariable.includes(" ") || cssVariable.includes(":")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `**cssVariable** property "${cssVariable}" contains invalid characters for CSS variable generation. It must start with -- and be a valid indent: https://developer.mozilla.org/en-US/docs/Web/CSS/ident.`,
          path: ["fonts", i, "cssVariable"]
        });
      }
    }
  }
});

const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

typeof process !== "undefined" && process.platform === "win32";

const entryTypeSchema = z.object({
  id: z.string({
    invalid_type_error: "Content entry `id` must be a string"
    // Default to empty string so we can validate properly in the loader
  })
}).passthrough();
z.union([
  z.array(entryTypeSchema),
  z.record(
    z.string(),
    z.object({
      id: z.string({
        invalid_type_error: "Content entry `id` must be a string"
      }).optional()
    }).passthrough()
  )
]);
const collectionConfigParser = z.union([
  z.object({
    type: z.literal("content").optional().default("content"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal("data"),
    schema: z.any().optional()
  }),
  z.object({
    type: z.literal(CONTENT_LAYER_TYPE),
    schema: z.any().optional(),
    loader: z.union([
      z.function(),
      z.object({
        name: z.string(),
        load: z.function(
          z.tuple(
            [
              z.object({
                collection: z.string(),
                store: z.any(),
                meta: z.any(),
                logger: z.any(),
                config: z.any(),
                entryTypes: z.any(),
                parseData: z.any(),
                renderMarkdown: z.any(),
                generateDigest: z.function(z.tuple([z.any()], z.string())),
                watcher: z.any().optional(),
                refreshContextData: z.record(z.unknown()).optional()
              })
            ],
            z.unknown()
          )
        ),
        schema: z.any().optional(),
        render: z.function(z.tuple([z.any()], z.unknown())).optional()
      })
    ]),
    /** deprecated */
    _legacy: z.boolean().optional()
  }),
  z.object({
    type: z.literal(LIVE_CONTENT_TYPE).optional().default(LIVE_CONTENT_TYPE),
    schema: z.any().optional(),
    loader: z.function()
  })
]);
z.object({
  collections: z.record(collectionConfigParser)
});

new AstroTelemetry({
  astroVersion: ASTRO_VERSION,
  viteVersion: version
});

const debuggers = {};
function debug(type, ...messages) {
  const namespace = `astro:${type}`;
  debuggers[namespace] = debuggers[namespace] || debugPackage(namespace);
  return debuggers[namespace](...messages);
}
globalThis._astroGlobalDebug = debug;

new AstroError({
  ...UnknownContentCollectionError,
  message: `Unexpected error while parsing content entry IDs and slugs.`
});

createRequire(import.meta.url);

function defineConfig(config) {
  return config;
}

const FAST_REFRESH_PREAMBLE = react.preambleCode;
function getRenderer() {
  return {
    name: "@astrojs/react",
    clientEntrypoint: version$1.startsWith("18.") ? "@astrojs/react/client.js" : "@astrojs/react/client-v17.js",
    serverEntrypoint: version$1.startsWith("18.") ? "@astrojs/react/server.js" : "@astrojs/react/server-v17.js"
  };
}
function optionsPlugin(experimentalReactChildren) {
  const virtualModule = "astro:react:opts";
  const virtualModuleId = "\0" + virtualModule;
  return {
    name: "@astrojs/react:opts",
    resolveId(id) {
      if (id === virtualModule) {
        return virtualModuleId;
      }
    },
    load(id) {
      if (id === virtualModuleId) {
        return {
          code: `export default {
						experimentalReactChildren: ${JSON.stringify(experimentalReactChildren)}
					}`
        };
      }
    }
  };
}
function getViteConfiguration({
  include,
  exclude,
  babel,
  experimentalReactChildren
} = {}) {
  return {
    optimizeDeps: {
      include: [
        version$1.startsWith("18.") ? "@astrojs/react/client.js" : "@astrojs/react/client-v17.js",
        "react",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "react-dom"
      ],
      exclude: [
        version$1.startsWith("18.") ? "@astrojs/react/server.js" : "@astrojs/react/server-v17.js"
      ]
    },
    plugins: [react({ include, exclude, babel }), optionsPlugin(!!experimentalReactChildren)],
    resolve: {
      dedupe: ["react", "react-dom", "react-dom/server"]
    },
    ssr: {
      external: version$1.startsWith("18.") ? ["react-dom/server", "react-dom/client"] : ["react-dom/server.js", "react-dom/client.js"],
      noExternal: [
        // These are all needed to get mui to work.
        "@mui/material",
        "@mui/base",
        "@babel/runtime",
        "use-immer",
        "@material-tailwind/react"
      ]
    }
  };
}
function src_default$1({
  include,
  exclude,
  babel,
  experimentalReactChildren
} = {}) {
  return {
    name: "@astrojs/react",
    hooks: {
      "astro:config:setup": ({ command, addRenderer, updateConfig, injectScript }) => {
        addRenderer(getRenderer());
        updateConfig({
          vite: getViteConfiguration({ include, exclude, babel, experimentalReactChildren })
        });
        if (command === "dev") {
          const preamble = FAST_REFRESH_PREAMBLE.replace(`__BASE__`, "/");
          injectScript("before-hydration", preamble);
        }
      }
    }
  };
}

function parseI18nUrl(url, defaultLocale, locales, base) {
  if (!url.startsWith(base)) {
    return void 0;
  }
  let s = url.slice(base.length);
  if (!s || s === "/") {
    return { locale: defaultLocale, path: "/" };
  }
  if (s[0] !== "/") {
    s = "/" + s;
  }
  const locale = s.split("/")[1];
  if (locale in locales) {
    let path = s.slice(1 + locale.length);
    if (!path) {
      path = "/";
    }
    return { locale, path };
  }
  return { locale: defaultLocale, path: s };
}

function generateSitemap(pages, finalSiteUrl, opts) {
  const { changefreq, priority, lastmod: lastmodSrc, i18n } = opts ?? {};
  const urls = [...pages];
  urls.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
  const lastmod = lastmodSrc?.toISOString();
  const { defaultLocale, locales } = i18n ?? {};
  let getI18nLinks;
  if (defaultLocale && locales) {
    getI18nLinks = createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl);
  }
  const urlData = urls.map((url, i) => ({
    url,
    links: getI18nLinks?.(i),
    lastmod,
    priority,
    changefreq
  }));
  return urlData;
}
function createGetI18nLinks(urls, defaultLocale, locales, finalSiteUrl) {
  const parsedI18nUrls = urls.map((url) => parseI18nUrl(url, defaultLocale, locales, finalSiteUrl));
  const i18nPathToLinksCache = /* @__PURE__ */ new Map();
  return (urlIndex) => {
    const i18nUrl = parsedI18nUrls[urlIndex];
    if (!i18nUrl) {
      return void 0;
    }
    const cached = i18nPathToLinksCache.get(i18nUrl.path);
    if (cached) {
      return cached;
    }
    const links = [];
    for (let i = 0; i < parsedI18nUrls.length; i++) {
      const parsed = parsedI18nUrls[i];
      if (parsed?.path === i18nUrl.path) {
        links.push({
          url: urls[i],
          lang: locales[parsed.locale]
        });
      }
    }
    if (links.length <= 1) {
      return void 0;
    }
    i18nPathToLinksCache.set(i18nUrl.path, links);
    return links;
  };
}

const SITEMAP_CONFIG_DEFAULTS = {
  entryLimit: 45e3
};

const localeKeySchema = z.string().min(1);
const SitemapOptionsSchema = z.object({
  filter: z.function().args(z.string()).returns(z.boolean()).optional(),
  customPages: z.string().url().array().optional(),
  canonicalURL: z.string().url().optional(),
  i18n: z.object({
    defaultLocale: localeKeySchema,
    locales: z.record(
      localeKeySchema,
      z.string().min(2).regex(/^[a-zA-Z\-]+$/gm, {
        message: "Only English alphabet symbols and hyphen allowed"
      })
    )
  }).refine((val) => !val || val.locales[val.defaultLocale], {
    message: "`defaultLocale` must exist in `locales` keys"
  }).optional(),
  entryLimit: z.number().nonnegative().optional().default(SITEMAP_CONFIG_DEFAULTS.entryLimit),
  serialize: z.function().args(z.any()).returns(z.any()).optional(),
  changefreq: z.nativeEnum(EnumChangefreq).optional(),
  lastmod: z.date().optional(),
  priority: z.number().min(0).max(1).optional()
}).strict().default(SITEMAP_CONFIG_DEFAULTS);

const validateOptions = (site, opts) => {
  const result = SitemapOptionsSchema.parse(opts);
  z.object({
    site: z.string().optional(),
    // Astro takes care of `site`: how to validate, transform and refine
    canonicalURL: z.string().optional()
    // `canonicalURL` is already validated in prev step
  }).refine((options) => options.site || options.canonicalURL, {
    message: "Required `site` astro.config option or `canonicalURL` integration option"
  }).parse({
    site,
    canonicalURL: result.canonicalURL
  });
  return result;
};

async function writeSitemap({
  hostname,
  sitemapHostname = hostname,
  sourceData,
  destinationDir,
  limit = 5e4,
  publicBasePath = "./"
}, astroConfig) {
  await mkdir(destinationDir, { recursive: true });
  const sitemapAndIndexStream = new SitemapAndIndexStream({
    limit,
    getSitemapStream: (i) => {
      const sitemapStream = new SitemapStream({
        hostname
      });
      const path = `./sitemap-${i}.xml`;
      const writePath = resolve(destinationDir, path);
      if (!publicBasePath.endsWith("/")) {
        publicBasePath += "/";
      }
      const publicPath = normalize(publicBasePath + path);
      let stream;
      if (astroConfig.trailingSlash === "never" || astroConfig.build.format === "file") {
        const host = hostname.endsWith("/") ? hostname.slice(0, -1) : hostname;
        const searchStr = `<loc>${host}/</loc>`;
        const replaceStr = `<loc>${host}</loc>`;
        stream = sitemapStream.pipe(replace(searchStr, replaceStr)).pipe(createWriteStream(writePath));
      } else {
        stream = sitemapStream.pipe(createWriteStream(writePath));
      }
      return [new URL(publicPath, sitemapHostname).toString(), sitemapStream, stream];
    }
  });
  let src = Readable.from(sourceData);
  const indexPath = resolve(destinationDir, `./sitemap-index.xml`);
  return promisify(pipeline)(src, sitemapAndIndexStream, createWriteStream(indexPath));
}

function formatConfigErrorMessage(err) {
  const errorList = err.issues.map((issue) => ` ${issue.path.join(".")}  ${issue.message + "."}`);
  return errorList.join("\n");
}
const PKG_NAME = "@astrojs/sitemap";
const OUTFILE = "sitemap-index.xml";
const STATUS_CODE_PAGES = /* @__PURE__ */ new Set(["404", "500"]);
function isStatusCodePage(pathname) {
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  const end = pathname.split("/").pop() ?? "";
  return STATUS_CODE_PAGES.has(end);
}
const createPlugin = (options) => {
  let config;
  return {
    name: PKG_NAME,
    hooks: {
      "astro:config:done": async ({ config: cfg }) => {
        config = cfg;
      },
      "astro:build:done": async ({ dir, routes, pages, logger }) => {
        try {
          if (!config.site) {
            logger.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          const opts = validateOptions(config.site, options);
          const { filter, customPages, serialize, entryLimit } = opts;
          let finalSiteUrl;
          if (config.site) {
            finalSiteUrl = new URL(config.base, config.site);
          } else {
            console.warn(
              "The Sitemap integration requires the `site` astro.config option. Skipping."
            );
            return;
          }
          let pageUrls = pages.filter((p) => !isStatusCodePage(p.pathname)).map((p) => {
            if (p.pathname !== "" && !finalSiteUrl.pathname.endsWith("/"))
              finalSiteUrl.pathname += "/";
            if (p.pathname.startsWith("/"))
              p.pathname = p.pathname.slice(1);
            const fullPath = finalSiteUrl.pathname + p.pathname;
            return new URL(fullPath, finalSiteUrl).href;
          });
          let routeUrls = routes.reduce((urls, r) => {
            if (r.type !== "page")
              return urls;
            if (r.pathname) {
              if (isStatusCodePage(r.pathname ?? r.route))
                return urls;
              let fullPath = finalSiteUrl.pathname;
              if (fullPath.endsWith("/"))
                fullPath += r.generate(r.pathname).substring(1);
              else
                fullPath += r.generate(r.pathname);
              let newUrl = new URL(fullPath, finalSiteUrl).href;
              if (config.trailingSlash === "never") {
                urls.push(newUrl);
              } else if (config.build.format === "directory" && !newUrl.endsWith("/")) {
                urls.push(newUrl + "/");
              } else {
                urls.push(newUrl);
              }
            }
            return urls;
          }, []);
          pageUrls = Array.from(/* @__PURE__ */ new Set([...pageUrls, ...routeUrls, ...customPages ?? []]));
          try {
            if (filter) {
              pageUrls = pageUrls.filter(filter);
            }
          } catch (err) {
            logger.error(`Error filtering pages
${err.toString()}`);
            return;
          }
          if (pageUrls.length === 0) {
            logger.warn(`No pages found!
\`${OUTFILE}\` not created.`);
            return;
          }
          let urlData = generateSitemap(pageUrls, finalSiteUrl.href, opts);
          if (serialize) {
            try {
              const serializedUrls = [];
              for (const item of urlData) {
                const serialized = await Promise.resolve(serialize(item));
                if (serialized) {
                  serializedUrls.push(serialized);
                }
              }
              if (serializedUrls.length === 0) {
                logger.warn("No pages found!");
                return;
              }
              urlData = serializedUrls;
            } catch (err) {
              logger.error(`Error serializing pages
${err.toString()}`);
              return;
            }
          }
          const destDir = fileURLToPath(dir);
          await writeSitemap(
            {
              hostname: finalSiteUrl.href,
              destinationDir: destDir,
              publicBasePath: config.base,
              sourceData: urlData,
              limit: entryLimit
            },
            config
          );
          logger.info(`\`${OUTFILE}\` created at \`${path.relative(process.cwd(), destDir)}\``);
        } catch (err) {
          if (err instanceof ZodError) {
            logger.warn(formatConfigErrorMessage(err));
          } else {
            throw err;
          }
        }
      }
    }
  };
};
var src_default = createPlugin;

async function writeJson(path, data) {
  await fs.writeFile(path, JSON.stringify(data, null, "	"), { encoding: "utf-8" });
}

function getAdapter(options) {
  return {
    name: "@astrojs/node",
    serverEntrypoint: "@astrojs/node/server.js",
    previewEntrypoint: "@astrojs/node/preview.js",
    exports: ["handler", "startServer", "options"],
    args: options,
    adapterFeatures: {
      buildOutput: "server",
      edgeMiddleware: false,
      experimentalStaticHeaders: options.experimentalStaticHeaders
    },
    supportedAstroFeatures: {
      hybridOutput: "stable",
      staticOutput: "stable",
      serverOutput: "stable",
      sharpImageService: "stable",
      i18nDomains: "experimental",
      envGetSecret: "stable"
    }
  };
}
const protocols = ["http:", "https:"];
function createIntegration(userOptions) {
  if (!userOptions?.mode) {
    throw new AstroUserError(`Setting the 'mode' option is required.`);
  }
  const { experimentalErrorPageHost } = userOptions;
  if (experimentalErrorPageHost && (!URL.canParse(experimentalErrorPageHost) || !protocols.includes(new URL(experimentalErrorPageHost).protocol))) {
    throw new AstroUserError(
      `Invalid experimentalErrorPageHost: ${experimentalErrorPageHost}. It should be a valid URL.`
    );
  }
  let _options;
  let _config = void 0;
  let _routeToHeaders = void 0;
  return {
    name: "@astrojs/node",
    hooks: {
      "astro:config:setup": async ({ updateConfig, config, logger }) => {
        let session = config.session;
        _config = config;
        if (!session?.driver) {
          logger.info("Enabling sessions with filesystem storage");
          session = {
            ...session,
            driver: "fs-lite",
            options: {
              base: fileURLToPath(new URL("sessions", config.cacheDir))
            }
          };
        }
        updateConfig({
          image: {
            endpoint: {
              route: config.image.endpoint.route ?? "_image",
              entrypoint: config.image.endpoint.entrypoint ?? "astro/assets/endpoint/node"
            }
          },
          session,
          vite: {
            ssr: {
              noExternal: ["@astrojs/node"]
            }
          }
        });
      },
      "astro:build:generated": ({ experimentalRouteToHeaders }) => {
        _routeToHeaders = experimentalRouteToHeaders;
      },
      "astro:config:done": ({ setAdapter, config }) => {
        _options = {
          ...userOptions,
          client: config.build.client?.toString(),
          server: config.build.server?.toString(),
          host: config.server.host,
          port: config.server.port,
          assets: config.build.assets,
          experimentalStaticHeaders: userOptions.experimentalStaticHeaders ?? false,
          experimentalErrorPageHost
        };
        setAdapter(getAdapter(_options));
      },
      "astro:build:done": async () => {
        if (!_config) {
          return;
        }
        if (_routeToHeaders && _routeToHeaders.size > 0) {
          const headersFileUrl = new URL(STATIC_HEADERS_FILE, _config.outDir);
          const headersValue = [];
          for (const [pathname, { headers }] of _routeToHeaders.entries()) {
            if (_config.experimental.csp) {
              const csp = headers.get("Content-Security-Policy");
              if (csp) {
                headersValue.push({
                  pathname,
                  headers: [
                    {
                      key: "Content-Security-Policy",
                      value: csp
                    }
                  ]
                });
              }
            }
          }
          await writeJson(headersFileUrl, headersValue);
        }
      }
    }
  };
}

const siteUrl = "https://riasissu.it";

const date = new Date().toISOString();
// https://astro.build/config
defineConfig({
  base: "/xcool",
  site: siteUrl,
  trailingSlash: "never",

  integrations: [
    src_default$1(),
    src_default({
      serialize(item) {
        // Default values for pages
        item.priority = siteUrl + "/" === item.url ? 1.0 : 0.9;
        item.changefreq = "weekly";
        item.lastmod = date;

        // if you want to exclude a page from the sitemap, do it here
        // if (/exclude-from-sitemap/.test(item.url)) {
        //     return undefined;
        // }

        // if any page needs a different priority, changefreq, or lastmod, uncomment the following lines and adjust as needed
        // if (/test-sitemap/.test(item.url)) {
        //     item.changefreq = "daily";
        //     item.lastmod = date;
        //     item.priority = 0.9;
        // }

        // if you want to change priority of all subpages like "/posts/*", you can use:
        // if (/\/posts\//.test(item.url)) {
        //     item.priority = 0.7;
        // }
        return item;
      },
    }),
  ],

  // renderers: ["@astrojs/renderer-react"],
  output: "server",

  vite: {
    plugins: [CompressionPlugin()],
  },

  build: {
    minify: true,
  },

  adapter: createIntegration({
    mode: "standalone",
  }),
});

const $$Astro$1 = createAstro("https://riasissu.it");
const $$MetaConfig = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MetaConfig;
  const { title, description } = Astro2.props;
  const metaData = {
    keywords: "astro.build, astro, static site, react, webiste templates, website creation, react templates, next.js templates, astro templates, custom website, custom website templates",
    default: {
      url: siteUrl,
      type: "website",
      title,
      description
      // image: preview,
    }
  };
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- icons --><link rel="icon" type="image/x-icon" href="/xcool/favicon.ico"><link rel="apple-touch-icon" sizes="48x48" href="/xcool/favicon.ico"><!-- Other meta important things --><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="color-scheme" content="light only"><meta name="keywords"${addAttribute(metaData.keywords, "content")}><meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"><!-- default ones --><meta property="url"${addAttribute(metaData.default.url, "content")}><meta property="type"${addAttribute(metaData.default.type, "content")}><meta property="title"${addAttribute(metaData.default.title, "content")}><meta property="description"${addAttribute(metaData.default.description, "content")}><!-- <meta property="image" content={metaData.default.image as string} /> --><!-- open graph ones --><meta property="og:url"${addAttribute(metaData.default.url, "content")}><meta property="og:type"${addAttribute(metaData.default.type, "content")}><meta property="og:title"${addAttribute(metaData.default.title, "content")}><meta property="og:description"${addAttribute(metaData.default.description, "content")}><!-- <meta property="og:image" content={metaData.default.image as string} /> -->`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/layouts/MetaConfig.astro", void 0);

const $$Astro = createAstro("https://riasissu.it");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, overwritePreview, headerClass = "" } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><!-- <MetaConfig
            title={title}
            description={description}
            preview={overwritePreview ? overwritePreview : PreviewPng.src}
        /> -->${renderComponent($$result, "MetaConfig", $$MetaConfig, { "title": title, "description": description })}<title>${title}</title>${renderComponent($$result, "Global", Global, { "styles": NormalizeCSS })}${renderScript($$result, "/home/runner/work/xcool-webpage/xcool-webpage/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderComponent($$result, "Header", Header, { "headerClass": headerClass, "client:load": true, "client:component-hydration": "load", "client:component-path": "@modules/Header", "client:component-export": "Header" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/runner/work/xcool-webpage/xcool-webpage/src/layouts/Layout.astro", void 0);

export { $$Layout as $, FadeInStyled as F, Image as I, MediaQuery as M, Piazza as P, Theme as T };
