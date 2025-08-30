import { jsx } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { F as FadeInStyled } from './Layout_DbmlHL6U.mjs';

const convertToSeconds = (delay) => {
  return Number(delay) * 1e3;
};
const FadeIn = ({ children, delay }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const timer = setTimeout(
      () => {
        el.classList.add("visible");
      },
      convertToSeconds(delay ? delay : 0)
    );
    return () => clearTimeout(timer);
  }, [delay]);
  return /* @__PURE__ */ jsx(FadeInStyled, { ref: elementRef, children });
};

export { FadeIn as F };
