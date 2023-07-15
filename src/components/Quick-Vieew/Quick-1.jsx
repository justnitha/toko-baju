import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Cloth } from "../js/Cloth";
import "../../plugin/css/Slick.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../Loader";

const QuixZoom = ({ isOpen, onClose, selectedItemId }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [Tambah, SetTambah] = useState(1);
  const [Sisa, SetSisa] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (selectedOption === "XS") {
      // console.log("habis");
      SetSisa("4 in stock");
    } else if (selectedOption === "S") {
      SetSisa("4 in stock");
    } else if (selectedOption === "M") {
      SetSisa("3 in stock");
    } else if (selectedOption === "L") {
      SetSisa("5 in stock");
    } else if (selectedOption === "XL") {
      SetSisa("6 in stock");
    } else {
      SetSisa();
    }
  }, [selectedOption]);

  function handleKurang() {
    if (Tambah > 1) {
      SetTambah((plus) => plus - 1);
    }
  }
  function handleTambah() {
    if (Tambah > 0) {
      SetTambah((plus) => plus + 1);
    }
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Fungsi untuk menutup modal
  const handleClose = () => {
    onClose();
  };

  const handleCart = () =>{
    console.log("add to cart")
  }

  const CustomPrevArrow = (props) => (
    <button
      className={`absolute top-[12.5rem] left-5 cursor-pointer z-10 text-black ${Sisa ? '' : ''}`}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-left fa-xl"></i>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      className={`absolute right-5 bottom-[13.5rem] text-black ${Sisa  ? '' : '' }`}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-right fa-xl"></i>
    </button>
  );
  const settings = {
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots-quick">{dots}</ul>
      </div>
    ),
    customPaging: (index) => (
      <div
        className={`custom-dot-quick  ${index === activeIndex ? "active " : ""}`}
      />
    ),
    beforeChange: (current, next) => setActiveIndex(next),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      {isOpen && (
        // untuk background
        <div className="absolute w-[100%] bg-black opacity-80 top-0 h-[390vh] z-30">
          <i class="fa-solid fa-xmark cursor-pointer text-white fixed right-2 p-2 fa-2x" onClick={handleClose}></i>
        </div>
      )}
      {isOpen && (
        <div className="top-[10rem] z-50 fixed">
          {Cloth.map((item) => {
            if (item.id === selectedItemId) {
              return (
                <div key={item.id}>
                  <div className={`grid grid-cols-2 gap-5 bg-white w-[65%] h-[29rem] mx-auto`}>
                    {isLoading ? (
                      <div>dfdfsd</div>
                    ) : (
                      <div>
                      <Loading/>
                      <Slider {...settings}>
                      <img src={item.img1} alt={item.img1} />
                      <img src={item.img2} alt={item.img2} />
                      <img src={item.img3} alt={item.img3} />
                    </Slider>
                      </div>
                    )}
                    {/* rincian */}
                    <div className="bg-white pt-10">
                      <div className="text-2xl -tracking-wide italic uppercase font-bold">
                        <h1>T-Shirt Kids NK Logo Pin Black</h1>
                        <div className="h-[10] border-2 border-gray-300 w-10 my-4"></div>
                        <h2 className="font-bold flex gap-2 text-2xl not-italic">
                          <span className="text-lg">RP</span>
                          150.000
                        </h2>
                      </div>
                      <div className="flex items-center gap-7 mt-5 ">
                        <label htmlFor="size">size</label>
                        <div className="custom-select text-sm">
                          <select
                            value={selectedOption}
                            onChange={handleOptionChange}
                            id="size"
                            name="size"
                            className="shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-"
                          >
                            <option value="0" name="0">
                              Chose an Option
                            </option>
                            <option value="XS" name="XS">
                              XS
                            </option>
                            <option value="S" name="S">
                              S
                            </option>
                            <option value="M" name="M">
                              M
                            </option>
                            <option value="L" name="L">
                              L
                            </option>
                            <option value="XL" name="XL">
                              XL
                            </option>
                          </select>
                          <div className="select-arrow"></div>
                        </div>
                      </div>
                      {Sisa && (
                        <div
                          className={`text-green-400 mt-1  ${
                            Sisa ? "animate-slide-down" : ""
                          }`}
                        >
                          <p className="w-[357px]">
                            -------------------------------------------------------
                          </p>
                          <p>{Sisa}</p>
                        </div>
                      )}
                      <div
                        className={`flex mt-5 gap-8 ${
                          Sisa ? "animate-slide-down mt-1" : "animate-slide-up"
                        }`}
                      >
                        <div className="flex items-start">
                          <i
                            class="fa-solid fa-minus border px-2 py-[1rem] fa-xs bg-[#f9f9f9] hover:bg-gray-300 border-gray-300 cursor-pointer"
                            onClick={handleKurang}
                          ></i>
                          <p className="px-4 py-[0.3rem] text-center border border-gray-300">
                            {Tambah}
                          </p>
                          <i
                            class="fa-solid fa-plus border px-2 py-[1rem] fa-xs bg-[#f9f9f9] hover:bg-gray-300 border-gray-300 cursor-pointer"
                            onClick={handleTambah}
                          ></i>
                        </div>
                        <button  onClick={handleCart} className="uppercase bg-[#cecece] hover:bg-[#b9b9b9] text-lg px-4 font-bold text-white">
                          add to cart
                        </button>
                      </div>
                      <div className="w-[350px] mt-5">
                        <h2 className="text-[#cecece]">Add to wishlist</h2>
                        <hr />
                        <p className="py-2">SKU: S123 KIDS CROSSFONT WHITE</p>
                        <hr />
                        <p>
                          Category:{" "}
                          <span className="text-[#cecece]">KIDS T-SHIRT</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default QuixZoom;
