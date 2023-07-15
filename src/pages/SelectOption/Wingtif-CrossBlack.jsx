import NavbarBagi from "../../components/Navbar-Bagi";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Modal8 from "../../components/Pop-Zoom/PopUp8";
import Releted from "../../components/RelatedProduct";
import Footer from "../../components/Footer";
import Scroll from "../../components/ScroolWA";
import { Cloth8 } from "../../components/js/Detail-Cloth";
import "../../plugin/css/Cloth.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../plugin/font-awesome/css/all.css";

const WingtipCrossBlack = () => {
  const [Title, SetTitle] = useState("T-Shirt Kids Cross Font Black -");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [Tambah, SetTambah] = useState(1);
  const [Sisa, SetSisa] = useState("");

  useEffect(() => {
    document.title = Title;
  }, [Title]);

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
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  function handleMouseMove(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const zoomX = (mouseX / width) * 100;
    const zoomY = (mouseY / height) * 100;

    setZoomPosition({ x: zoomX, y: zoomY });
  }

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };
  const CustomPrevArrow = (props) => (
    <button
      className={`absolute top-[17rem] left-2 cursor-pointer z-10 ${
        isModalOpen ? "hidden" : ""
      } `}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-left fa-xl"></i>
    </button>
  );
  const CustomNextArrow = (props) => (
    <button
      className={`absolute right-2 bottom-[16.5rem] ${
        isModalOpen ? "hidden" : ""
      }`}
      onClick={props.onClick}
    >
      <i class="fa-solid fa-chevron-right fa-xl"></i>
    </button>
  );
  const settings = {
    appendDots: (dots) => (
      <div>
        <ul className="custom-dotss pe-[6rem]">{dots}</ul>
      </div>
    ),
    customPaging: function (i) {
      return (
        <div
          className={`w-[110px] me-10${
            i === activeIndex
              ? "opacity-100  border border-gray-200 "
              : " hover:border hover:border-gray-200"
          }`}
        >
          <img
            src={require(`../../plugin/img/ccloth/cloth-8-${i + 1}.png`)}
            className={i === activeIndex ? "" : "opacity-20"}
          />
        </div>
      );
    },
    dots: true,
    beforeChange: (current, next) => setActiveIndex(next),
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <div className={`${isModalOpen ? "" : ""}`}>
      <NavbarBagi />
      <div className="grid grid-cols-2 gap-3 w-[80%] mx-auto mt-28 z-50">
        <Slider {...settings}>
          {Cloth8.map((item, index) => (
            <div
              key={index}
              className={`zoom-container ${
                index === activeIndex ? "active" : ""
              }`}
              onMouseMove={index === activeIndex ? handleMouseMove : null}
              onMouseEnter={index === activeIndex ? handleMouseEnter : null}
              onMouseLeave={index === activeIndex ? handleMouseLeave : null}
            >
              <img
                src={item.image}
                alt="img"
                className={`zoom-img ${
                  isZoomed && index === activeIndex
                    ? "zoomed cursor-pointer"
                    : ""
                }`}
                style={{
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            </div>
          ))}
        </Slider>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-[#949494] ">
              <a href="/" className="hover:text-black">
                HOME{" "}
              </a>{" "}
              /
              <a href="#" className="hover:text-black">
                KIDS T-SHIRT
              </a>
            </div>
            <div className="flex gap-3 text-[#c0c0c0]">
              <i class="fa-solid fa-chevron-left px-3 py-4 fa-xs rounded-[5rem] border-2 border-[#c0c0c0] hover:bg-black hover:text-white hover:border-black"></i>
              <i class="fa-solid fa-chevron-right px-3 py-4 fa-xs rounded-[5rem] border-2 border-[#c0c0c0] hover:bg-black hover:text-white hover:border-black"></i>
            </div>
          </div>
          {/*  */}
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
              className={`text-green-400 mt-5 ${
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
            className={`flex mt-8 gap-8 ${
              Sisa ? "animate-slide-down" : "animate-slide-up"
            }`}
          >
            <div className="flex items-start">
              <i
                class="fa-solid fa-minus border px-2 py-[1.22rem] fa-xs bg-[#f9f9f9] hover:bg-gray-300 border-gray-300 cursor-pointer"
                onClick={handleKurang}
              ></i>
              <p className="px-6 py-2 text-center border border-gray-300">
                {Tambah}
              </p>
              <i
                class="fa-solid fa-plus border px-2 py-[1.22rem] fa-xs bg-[#f9f9f9] hover:bg-gray-300 border-gray-300 cursor-pointer"
                onClick={handleTambah}
              ></i>
            </div>
            <button className="uppercase bg-[#cecece] hover:bg-[#b9b9b9] text-lg px-4 font-bold text-white">
              add to cart
            </button>
          </div>
          <div className="w-[350px] mt-20">
            <h2 className="text-[#cecece]">Add to wishlist</h2>
            <hr />
            <p className="py-2">SKU: S123 KIDS CROSSFONT WHITE</p>
            <hr />
            <p>
              Category: <span className="text-[#cecece]">KIDS T-SHIRT</span>
            </p>
            <div className="flex gap-2 mt-7 text-[#999999]">
              <a href="https://www.facebook.com/nk13official">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* adtional informasi */}
      <div className="uppercase mt-44 w-[80%] mx-auto">
        <div className="flex justify-between items-start">
          <div className="border bg-black h-1 w-[20%]"> </div>
          <div className=" bg-slate-200 h-[0.09rem] w-[90%]"></div>
        </div>
        <p className="font-bold text-sm">Adtional information</p>

        <div className="flex items-center py-2 mt-12">
          <p className="w-[50%] text-start text-lg font-bold">weight</p>
          <p className="text-[#666666] text-sm">0,3 kg</p>
        </div>
        <hr />
        <div className="flex items-center py-2 mt-3">
          <p className="w-[50%] text-start text-lg font-bold">size</p>
          <p className=" tracking-wider text-[#666666] text-sm">xs,s,m,l,xl</p>
        </div>
        <hr />
        <div className=" bg-slate-200 h-[0.0009rem]  mt-14"></div>
        <hr />
      </div>
      {/* releted product */}
      <div>
        <h1 className="w-[80%] mx-auto italic font-bold text-xl tracking-widest uppercase">
          Related products{" "}
        </h1>
        <Releted />
      </div>
      <Footer />
      <div className={`${isModalOpen ? 'hidden':''}`}>
        <Scroll />
      </div>
      {/* untuk modal */}
      <button
        onClick={handleOpenModal}
        className="absolute bottom-[10rem] left-[10.9rem] p-3 border-2 border-gray-200 rounded-[2rem] text-gray-200"
      >
        <i class="fa-solid fa-up-right-and-down-left-from-center fa-2x"></i>
      </button>
      <Modal8 isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
export default WingtipCrossBlack;
