import React, { useState } from "react";
import Slider from "react-slick";
import { Cloth2 } from "../js/Detail-Cloth";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal2 = ({ isOpen, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);

  const handleZoomTogglee = () => {
    if (isZoomed) {
      setScale(1);
    } else {
      setScale(scale + 1);
    }
    setIsZoomed(!isZoomed);
  };
  // Fungsi untuk menutup popup
  const handleClose = () => {
    onClose();
  };

  const CustomPrevArrow = (props) => (
    <button
      className="absolute top-[22rem] left-5 cursor-pointer z-10 text-white "
      onClick={props.onClick}
    >
      <i class="fa-solid fa-arrow-left fa-lg"></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className="absolute right-5 bottom-[25.5rem] text-white"
      onClick={props.onClick}
    >
      <i class="fa-solid fa-arrow-right fa-lg"></i>
    </button>
  );
  const settings = {
    dots: false,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div>
      {isOpen && (
        // untuk background
        <div className="absolute w-[100%] bg-black opacity-80 top-0 h-[267vh] z-30">
          {" "}
        </div>
      )}
      {isOpen && (
        <div className=" w-[100%] top-0 z-50 fixed">
          <Slider {...settings}>
            {Cloth2.map((item) => (
              <div>
                <div className="flex text-white items-center justify-between px-10 py-2">
                  <p>{item.number}/3</p>
                  <i
                    class="fa-solid fa-xmark fa-2x cursor-pointer"
                    onClick={handleClose}
                  ></i>
                </div>
                <div className="hidden lg:block h-[42.8rem]">
                  <img
                    src={item.image}
                    alt="image"
                    onClick={handleZoomTogglee}
                    className="w-[50%] h-full  bg-white mx-auto cursor-pointer"
                    style={{ transform: `scale(${scale})` }}
                  />
                  {isZoomed ? (
                    <button className="" onClick={handleZoomTogglee}>
                      Zoom Out
                    </button>
                  ) : (
                    <button className="" onClick={handleZoomTogglee}>
                      Zoom In
                    </button>
                  )}
                </div>
                {/* appppp */}
                <div className="lg:hidden h-[42.8rem]">
                  <img
                    src={item.image}
                    alt="image"
                    onClick={handleZoomTogglee}
                    className="w-full mt-32 sm:mt-0 md:mt-0 sm:h-full  bg-white mx-auto cursor-pointer"
                  />
                </div>
                <div className="bg-black text-white text-center opacity-50  py-3">
                  <p className="  ">{item.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};
export default Modal2;
