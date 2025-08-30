import { jsx } from 'react/jsx-runtime';
import { C as Container } from './index_OA8fBTz-.mjs';
import styled from '@emotion/styled';
import { M as MediaQuery } from './Layout_DbmlHL6U.mjs';
import 'react';

const ContentSectionStyled = styled.section`
  padding: 100px 0;

  ${MediaQuery.max("lg")} {
    padding: 60px 0;
  }
`;
const ContentSectionWrapper = styled.div`
  text-align: center;

  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 10px;
    font-weight: 200;
  }

  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    &,
    img {
      border-radius: 10px;

      width: 100%;
      height: auto;
      object-fit: cover;
      max-width: 970px;
      margin: 0 auto;
    }
  }
`;

const ContentSection = ({
  children,
  ...rest
}) => {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ jsx(ContentSectionStyled, { ...rest, children: /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(ContentSectionWrapper, { children }) }) });
};

export { ContentSection as C };
