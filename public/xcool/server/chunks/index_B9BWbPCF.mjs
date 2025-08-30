import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { C as Container, B as Button, I as Icon } from './index_OA8fBTz-.mjs';
import { css } from '@emotion/react';
import { T as Theme, M as MediaQuery, I as Image } from './Layout_DbmlHL6U.mjs';
import { F as FadeIn } from './FadeIn_Bcm_HfT1.mjs';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                        */
import { Parallax, Pagination, Autoplay } from 'swiper/modules';

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextImageStyled = styled.div`
  width: 100%;
  text-align: left;
  margin: 50px 0;
  align-items: center;
  background: ${Theme.primary};
`;
const TextImageContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  grid-template-columns: 1fr;
  text-align: center;
  ${MediaQuery.max("lg")} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${({ $switchPlaces }) => $switchPlaces && css`
      > div:first-of-type {
        order: 2;
      }
    `}
`;
const TextImageFigure = styled.figure`
  width: 100%;
  position: relative;
`;
const TextImage$1 = styled(Image)`
  width: 100%;
  margin-bottom: 30px;
  min-height: 450px;

  object-fit: contain;
  min-height: auto;

  ${MediaQuery.max("lg")} {
    min-height: auto;
  }
`;
const TextImageContent = styled.div`
  max-width: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  ${MediaQuery.max("lg")} {
    max-width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  h1 {
    margin-bottom: 20px;
    font-size: 80px;
    line-height: 84px;
    letter-spacing: -1px;

    ${MediaQuery.max("xl")} {
      font-size: 60px;
      line-height: 64px;
    }

    ${MediaQuery.max("sm")} {
      font-size: 50px;
      line-height: 45px;
      letter-spacing: -0.5px;
    }
  }

  p {
    ${MediaQuery.min("lg")} {
      max-width: 400px;
    }
  }
`;
const ButtonsWrapper = styled.div`
  display: flex;

  ${MediaQuery.min("lg")} {
    gap: 30px;
  }

  ${MediaQuery.max("lg")} {
    flex-direction: column;
    align-items: center;
  }
`;

const TextImage = ({
  title,
  paragraph,
  buttons,
  image,
  switchPlaces = false
}) => {
  if (!title && !paragraph && !image) {
    return null;
  }
  const displayImage = image && image.srcLocal ? /* @__PURE__ */ jsx(
    TextImage$1,
    {
      srcLocal: image.srcLocal,
      alt: image.alt,
      width: image.width,
      height: image.height
    }
  ) : image && /* @__PURE__ */ jsx(
    TextImage$1,
    {
      src: image.src,
      alt: image.alt,
      width: image.width,
      height: image.height
    }
  );
  return /* @__PURE__ */ jsx(TextImageStyled, { children: /* @__PURE__ */ jsxs(TextImageContainer, { $switchPlaces: switchPlaces, children: [
    /* @__PURE__ */ jsx(FadeIn, { delay: 0.2, children: /* @__PURE__ */ jsxs(TextImageContent, { children: [
      title && /* @__PURE__ */ jsx("h1", { dangerouslySetInnerHTML: { __html: title } }),
      paragraph && /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: paragraph } }),
      buttons && buttons.length > 0 && /* @__PURE__ */ jsx(ButtonsWrapper, { children: buttons.map((button, index) => {
        return /* @__PURE__ */ jsx(
          Button,
          {
            link: button.link,
            variant: button.variant,
            children: button.text
          },
          index
        );
      }) })
    ] }) }),
    image && /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsx(TextImageFigure, { children: displayImage }) })
  ] }) });
};

const FullPageSliderStyled = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  position: relative;

  height: 100dvh;
  min-height: 550px;

  background: ${Theme.secondary};
  position: relative;
  overflow: hidden;

  .swiper-pagination {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%) translate3d(0, 0, 0);
    display: flex;
    justify-content: flex-start;
    z-index: 1;
    width: 100%;
    height: auto;
    background: ${Theme.tertiary};
    max-width: 500px;
    height: 15px;
    text-align: center;
    transition: 300ms opacity;
    pointer-events: none;

    ${MediaQuery.max("xl")} {
      left: 20px;
      transform: translate3d(0, 0, 0);
    }

    ${MediaQuery.max("lg")} {
      max-width: 200px;
      left: 50%;
      bottom: 20px;
      transform: translateX(-50%) translate3d(0, 0, 0);
    }

    span {
      background: ${Theme.primary};
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: scale(0);
      transform-origin: left top;
    }
  }

  .swiper {
    height: 100%;
  }

  .blog-content & {
    h1 {
      font-size: 90px;
      line-height: 95px;

      ${MediaQuery.max("lg")} {
        font-size: 40px;
        line-height: 50px;
      }
    }
  }
`;
const FullPageSliderSlide = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 40px;
  display: flex;
  align-items: center;

  ${MediaQuery.max("lg")} {
    padding: 0 20px;
  }

  .swiper-slide-drag {
    transition: none; /* Add this line */
  }

  .swiper-backface-hidden .swiper-slide {
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .swiper-slide {
    height: 100%;
    overflow: hidden;
  }
`;
const FullPageSliderSlideImg = styled.figure`
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: -1px;
    background-color: transparent;
    background-image: radial-gradient(
      at center right,
      #00000038 50%,
      #000000b8 100%
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const FullPageSliderButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px; // Adjust this value to reduce spacing between buttons
  margin-top: 0px; // Optional: move buttons away from the paragraph/title

  & a {
    margin: 0 !important;
  }
`;
const FullPageSliderSlideContent = styled.div`
  position: relative;
  z-index: 2;
  margin-top: 80px;
  color: ${Theme.primary};

  h1 {
    font-size: 160px;
    line-height: 130px;
    text-transform: uppercase;
    font-weight: 900;
    margin-left: 0px;
    margin-bottom: 50px;

    ${MediaQuery.max("xl")} {
      font-size: 90px;
      line-height: 95px;
      margin-bottom: 20px;
    }

    ${MediaQuery.max("lg")} {
      font-size: 40px;
      line-height: 50px;
      margin-bottom: 20px;
      margin-left: 0;
    }
  }

  h1 + p + p {
    max-width: 700px;
    color: ${Theme.primary};
    font-size: 25px;
    line-height: 25px;
    font-weight: 300;

    ${MediaQuery.max("lg")} {
      font-size: 20px;
      line-height: 18px;
    }
  }
`;
const FullPageSliderSlideContentSubtitle = styled.p`
  text-transform: uppercase;
  font-size: 50px;
  line-height: 50px;
  font-weight: 900;
  letter-spacing: -1px;
  color: ${Theme.primary};
  margin-bottom: 40px;

  ${MediaQuery.max("xl")} {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 20px;
  }

  ${MediaQuery.max("lg")} {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;
const FullPageSliderTextToSlide = styled.span`
  position: absolute;
  right: 40px;
  bottom: 40px;
  transform: translateX(-50%);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 25px;
  color: ${Theme.primary};
  z-index: 1;

  display: flex;
  align-items: center;
  pointer-events: none;

  ${MediaQuery.max("lg")} {
    font-size: 14px;
    line-height: 18px;
    left: 50%;
    right: unset;
    bottom: 45px;
    transform: translateX(-50%);
    justify-content: center;
    width: 100%;
  }

  img {
    margin-left: 10px;
  }
`;

const SwiperStyled = styled(Swiper)`
  overflow: hidden;
  width: 100%;
`;

const SwiperSlider = ({
  children,
  options,
  modules,
  ...rest
}) => {
  if (!children) {
    return null;
  }
  const memoChildren = useMemo(
    () => React.Children.map(children, (child, index) => /* @__PURE__ */ jsx(SwiperSlide, { className: "splide__slide", children: child }, index)),
    [children]
  );
  return /* @__PURE__ */ jsx(
    SwiperStyled,
    {
      modules: modules ? modules : [],
      slidesPerView: 1,
      speed: 4e3,
      spaceBetween: 30,
      ...options,
      ...rest,
      children: memoChildren
    }
  );
};

const FullPageSlider = ({ content }) => {
  if (!content || content.length === 0) {
    return null;
  }
  const slides = content.map((slide, index) => /* @__PURE__ */ jsxs(FullPageSliderSlide, { $bgImage: slide.background, children: [
    slide.background && /* @__PURE__ */ jsx(FullPageSliderSlideImg, { "data-swiper-parallax": "70%", children: /* @__PURE__ */ jsx("img", { src: slide.background, alt: slide.title }) }),
    /* @__PURE__ */ jsx(FadeIn, { children: /* @__PURE__ */ jsxs(FullPageSliderSlideContent, { "data-swiper-parallax": "-40%", children: [
      slide.title && /* @__PURE__ */ jsx("h1", { children: slide.title }),
      slide.subtitle && /* @__PURE__ */ jsx(FullPageSliderSlideContentSubtitle, { children: slide.subtitle }),
      slide.paragraph && /* @__PURE__ */ jsx("p", { children: slide.paragraph }),
      /* @__PURE__ */ jsxs(FullPageSliderButtonsWrapper, { children: [
        slide.button && slide.button.text && slide.button.link && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "primary",
            showIcon: true,
            target: "_blank",
            link: slide.button.link,
            children: slide.button.text
          }
        ),
        slide.secondaryButton && slide.secondaryButton.text && slide.secondaryButton.link && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "primary",
            showIcon: true,
            link: slide.secondaryButton.link,
            children: slide.secondaryButton.text
          }
        ),
        slide.tertiaryButton && slide.tertiaryButton.text && slide.tertiaryButton.link && /* @__PURE__ */ jsx(
          Button,
          {
            variant: "primary",
            showIcon: true,
            target: "_blank",
            link: slide.tertiaryButton.link,
            children: slide.tertiaryButton.text
          }
        )
      ] })
    ] }) })
  ] }, index));
  return /* @__PURE__ */ jsxs(FullPageSliderStyled, { children: [
    /* @__PURE__ */ jsx(
      SwiperSlider,
      {
        modules: [Parallax, Pagination, Autoplay],
        options: {
          slidesPerView: 1,
          parallax: true,
          speed: 1e3,
          spaceBetween: 0,
          effect: "slide",
          loop: false,
          grabCursor: true,
          // Add this line
          pagination: {
            // Add this option
            el: ".swiper-pagination",
            type: "progressbar"
          },
          autoplay: {
            delay: 5e3
          }
        },
        children: slides
      }
    ),
    slides.length > 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs(FullPageSliderTextToSlide, { children: [
        "Swipe to slide",
        /* @__PURE__ */ jsx(Icon, { iconData: "arrowRight", alt: "arrow icon" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "swiper-pagination" })
    ] }) : /* @__PURE__ */ jsx(FullPageSliderTextToSlide, {})
  ] });
};

const ParallaxImageStyled = styled.div`
  width: 100%;
  min-height: 300px;
  // margin: 0 auto;
  padding: 80px 50px;
  padding-top: 150px;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;
const ParallaxImageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 90px;
    line-height: 90px;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 20px;
    color: ${Theme.primary};

    ${MediaQuery.max("lg")} {
      font-size: 30px;
      line-height: 50px;
    }
  }

  p {
    font-size: 25px;
    color: ${Theme.primary};
    // max-width: 600px;
    margin: 0 20px;
    text-align: center;

    ${MediaQuery.max("lg")} {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const ParallaxImage = ({ image, content }) => {
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx(ParallaxImageStyled, { $bgImage: image, children: content.title && content.paragraph && /* @__PURE__ */ jsxs(ParallaxImageContent, { children: [
    content.title && /* @__PURE__ */ jsx("h1", { children: content.title }),
    content.paragraph && /* @__PURE__ */ jsx("p", { children: content.paragraph })
  ] }) });
};

const Hero = ({ heroType, data, ...rest }) => {
  if (!data) {
    return null;
  }
  let HeroTypeOutput;
  switch (heroType) {
    case "textImage":
      HeroTypeOutput = /* @__PURE__ */ jsx(TextImage, { ...data, ...rest });
      break;
    case "fullPageSlider":
      HeroTypeOutput = /* @__PURE__ */ jsx(
        FullPageSlider,
        {
          content: data,
          ...rest
        }
      );
      break;
    case "ParallaxImage":
      HeroTypeOutput = /* @__PURE__ */ jsx(ParallaxImage, { ...data, ...rest });
  }
  const isFullWidth = heroType === "fullPageSlider" || heroType === "ParallaxImage";
  return /* @__PURE__ */ jsx(HeroWrapper, { $isFullWidth: isFullWidth, children: HeroTypeOutput });
};

export { Hero as H };
