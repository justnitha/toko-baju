import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../plugin/font-awesome/css/all.css";
import { Cloth } from "./js/Cloth";

const Releted = () => {
  const [hoveredItem, setHoveredItem] = useState(false);
  const [likedItems, setLikedItems] = useState([]);

  const handleLike = (itemId) => {
    console.log(`Liked item with ID: ${itemId}`);
    if (likedItems.includes(itemId)) {
      // Item already liked, remove from likedItems
      setLikedItems(likedItems.filter((item) => item !== itemId));
    } else {
      // Item not yet liked, add to likedItems
      setLikedItems([...likedItems, itemId]);
    }
  };
  const CustomPrevArrow = (props) => (
    <button
      className={`absolute top-[5rem] md:top-[10rem] left-2 cursor-pointer z-10 `}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-left fa-xl"></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className={`absolute right-2 top-[5rem] md:top-[10rem] `}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-right fa-xl"></i>
    </button>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <Slider {...settings} className="lg:w-[80%] w-[100%] px-5 mx-auto">
        {Cloth.map((item) => (
          <div
            key={item.id}
            className=" relative cloth-item hidden lg:block lg:before:bottom-[6rem] lg:before:bg-black  item2 cursor-pointer img-hover-zoom "
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(false)}
          >
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className=" cursor-pointer  "
            />
            <p className="text-center text-xs text-[#535353]">KIDS T-SHIRT</p>
            <p className="text-sm text-center text-[#adadad]">{item.name}</p>
            <p className="text-center text-sm font-bold">Rp. {item.price}</p>
            <div className="text-center border-2 border-black w-[80%]  mx-auto mt-2 hover:bg-black hover:text-white">
              <a
                href={`#${item.link}`}
                className=" uppercase px-4 py-1 text-xs  font-semibold"
              >
                select option
              </a>
            </div>
            {hoveredItem === item.id && (
              <div>
                <button
                  className={`absolute lg:top-10 top-5 right-0 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-full border-slate-200  text-slate-200 px-2 py-1  like-button ${
                    likedItems.includes(item.id)
                      ? "bg-red-900 border-red-900 "
                      : "text-slate-200 hover:bg-red-900 hover:border-red-900 hover:text-white"
                  }`}
                  onClick={() => handleLike(item.id)}
                >
                  <i class="fa-solid fa-heart"></i>
                </button>
                <div>
                  <button
                    className="absolute hidden lg:block bottom-[7.4rem] lg:bottom-[6.2rem] w-full text-white uppercase"
                    // onClick={() => handleOpenModal(item.id)}
                  >
                    quick view
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Releted;
