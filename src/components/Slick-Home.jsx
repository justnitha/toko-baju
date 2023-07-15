import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../plugin/css/Slick.css";

const AutoPlay = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        className={`custom-dot  ${index === activeIndex ? "active " : ""}`}
      />
    ),
    beforeChange: (current, next) => setActiveIndex(next),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="bg-1 lg:h-screen sm:h-screen md:h-screen h-[80vh] bg-cover bg-center"></div>
        <div className="bg-2 lg:h-screen sm:h-screen md:h-screen h-[80vh] bg-cover bg-center"></div>
        <div className="bg-3 lg:h-screen sm:h-screen md:h-screen h-[80vh] bg-cover bg-center"></div>
        <div className="bg-4 lg:h-screen sm:h-screen md:h-screen h-[80vh] bg-cover bg-center"></div>
      </Slider>
    </div>
  );
};
export default AutoPlay;
