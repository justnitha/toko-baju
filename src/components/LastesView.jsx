import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const MyComponent = (props) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div
        className="hoverr cursor-pointer "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`absolute px-3 py-1 font-bold leading-none border-2  lg:-ms-3 mt-6 border-black text-black bg-white z-10  txt ${
            isHovered ? "hovered" : ""
          }`}
        >
          <p>{props.tanggal}</p>
          <p className="capitalize text-xs ">{props.bulan}</p>
        </div>
        <div className="text-center absolute mt-48 z-10 lg:w-[17.8%] sm:w-[9%] w-[11.2%] px-7 italic mx-auto  text-white font-bold text-sm">
          <p
            className={` not-italic text-xs sm:text-[8px]  opacity-70 ${props.width} ${props.widthSm} mx-auto uppercase event ${
              isHovered ? "hovered" : ""
            }`}
          >
            {props.tajuk}
          </p>
          <p className="uppercase sm:text-xs">
            {props.title}
          </p>
          <p className=" not-italic opacity-90 font-normal mt-3">[Read More]</p>
        </div>
        <img
          src={props.image}
          alt="image"
          className="h-[20rem] object-cover w-full "
        />
      </div>
    );
  };


const LastestViews=()=>{
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleItemMouseEnter = (itemId) => {
      setHoveredItemId(itemId);
      setIsHovered(true)
    };
  
    const handleItemMouseLeave = () => {
      setHoveredItemId(null);
      setIsHovered(false)
    };

    const CustomPrevArrow = (props) => (
        <button
          className={`absolute top-[10rem] -left-4 cursor-pointer z-10 `}
          onClick={props.onClick}
        >
          <i class="fa-solid fa-chevron-left fa-xl"></i>
        </button>
      );
      const CustomNextArrow = (props) => (
        <button
          className={`absolute -right-4 bottom-[8rem]`}
          onClick={props.onClick}
        >
          <i class="fa-solid fa-chevron-right fa-xl"></i>
        </button>
      );
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            //   dots: true,
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

    return(
        
        <div className="grid  grid-cols-1  mt-10 ">
        <Slider {...settings} className="h-[20rem]" >
        <div className="text-center leading-none cursor-pointer sm:px-5" onMouseEnter={handleItemMouseEnter} onMouseLeave={handleItemMouseLeave}>
            <div className={`h-[0.09rem] w-20 mb-2 bg-slate-400 mx-auto bg ${isHovered ? 'hoverr' : ''}`}></div>
            <a href="#" className="font-bold  text-white text-sm sm:text-xs italic " style={{textShadow:"1px 1px 1px black"}}>
            NK13 “HORDES”, EXCLUSIVE COLLABORATION BUTTON SHIRT <br />
            <span className="text-xs text-slate-200 opacity-50">24 February</span>
            </a>
            <p className="mt-7 leading-6 sm:leading-5 sm:text-xs text-slate-200" style={{textShadow:"1px 1px 1px black"}}>We worked on these exclusive Button Shirt as our self appreciation of our roots as a collective, as a[Read More]</p>
          </div>    
          <MyComponent
            itemId={1}
            width="w-[27%]"
            tajuk="events"
            tanggal="16"
            bulan="jun"
            title="NK13 Canggu Store Kickstart Opening Party Sunday, June 13th 2021"
            image={require('../plugin/img/lastest-1.jpeg')}
            isHovered={hoveredItemId === 1}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          />
          <MyComponent
            itemId={2}
            width="w-[30%]"
            tajuk="lifestyle"
            tanggal="01"
            bulan="feb"
            title="merry christmas & fcuk 2020"
            image={require('../plugin/img/lastest-2.jpg')}
            isHovered={hoveredItemId === 2}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          />
          <MyComponent
            itemId={3}
            width="w-[50%]"
            widthSm="sm:w-[100%] mb-1 "
            tajuk="customwar events"
            tanggal="22"
            bulan="dec"
            title="nk13 fleece shirt with chai stitch embroidery"
            image={require('../plugin/img/lastest-3.jpg')}
            isHovered={hoveredItemId === 3}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          />
        </Slider>
         </div>
    )
}
export default LastestViews