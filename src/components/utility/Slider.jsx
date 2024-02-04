"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Card, CustomButtonGroupAsArrows } from "@/components";
import { CaruselImages } from "@/app/internalData";

const Slider = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay
        autoPlaySpeed={2500}
        centerMode
        className=""
        containerClass="container-padding-bottom"
        customButtonGroup={<CustomButtonGroupAsArrows />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {CaruselImages.map((image) => {
          return <Card image={image} />;
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
