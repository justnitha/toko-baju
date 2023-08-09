import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AutoPlay from "../components/Slick-Home";
import { Cloth } from "../components/js/Cloth";
import "../plugin/css/Slick.css";
import Footer from "../components/Footer";
import QuixZoom from "../components/Quick-Vieew/Quick-1";
import Scroll from "../components/ScroolWA";
import LastestViews from "../components/LastesView";
import { MyComponent } from "../components/LastesView";

const Home = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [likedItems, setLikedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const optionRef = useRef(null);

  const handleItemMouseEnter = (itemId) => {
    setHoveredItemId(itemId);
    setIsHovered(true);
  };

  const handleItemMouseLeave = () => {
    setHoveredItemId(null);
    setIsHovered(false);
  };
  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItemId(null);
    setIsModalOpen(false);
  };

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

  return (
    <div className={`${isModalOpen ? "" : ""}`}>
      <AutoPlay />
      <div className="lg:w-[100%] w-[90%]  mx-auto sm:mt-5">
        <div className="text-center py-6">
          <h1 className="italic uppercase sm:text-4xl lg:text-3xl font-bold">
            Upcoming Events
          </h1>
          <img
            src={require("../plugin/img/FEED-POSTER-CW23.png")}
            alt="events"
            className="lg:h-[25rem] sm:h-[23rem] h-[30rem] py-6 mx-auto lg:w-[17.5rem] sm:w-[17.5rem] w-full lg:mt-0 mt-14 sm:mt-10"
            loading="lazy"
          />
          <button className=" uppercase bg-black text-white lg:w-[17.5rem] sm:w-[17.5rem] w-full text-sm py-1">
            more info
          </button>
        </div>
        <div className="text-center ">
          <h1 className="italic uppercase text-3xl font-bold">about us</h1>
          <p className="py-6">
            Naskleeng Tigabelas/ NK13 formed back in 2007 as one creative
            collective. <br className="" />
            Motorcycle scenes and skateboarding influenced, underground
            distorted bands and <br className="hidden lg:block" />
            party thrashers made NK13 evolved into an events igniter and
            Merchandise dealer by <br className="hidden lg:block" />
            year 2010. Spitting poisonous good times from our snake's lair in
            Denpasar, Bali.
          </p>
        </div>
        <div className="flex items-center gap-2 py-6 lg:w-[80%] mx-auto">
          <div className="w-[40%] h-[0.1rem] bg-gray-200" />
          <div className="lg:text-lg sm:text-lg text-sm text-center uppercase font-bold italic lg:w-[20%] sm:w-[40%] w-[80%]">
            browser product
          </div>
          <div className="w-[40%] h-[0.1rem] bg-gray-200" />
        </div>
      </div>
      {/* cloth */}
      <div className="lg:w-[80%] w-[90%] gap-10 lg:gap-0 mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {Cloth.map((item) => (
          <div
            key={item.id}
            className=" relative cloth-item lg:before:bg-black item cursor-pointer img-hover-zoom"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* <a href="#" className=""> */}
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              onClick={() => handleOpenModal(item.id)}
              className=" cursor-pointer"
            />
            {/* </a> */}
            <p className="text-xs text-center text-slate-400">{item.name}</p>
            <p className="text-center lg:text-xs text-sm font-semibold">
              Rp. {item.price}
            </p>
            <div className="text-center border-2 border-black lg:w-[54.3%] w-full mx-auto mt-2 hover:bg-black hover:text-white">
              <Link
                to={item.link}
                className=" uppercase px-4 py-1 text-xs font-semibold"
                ref={optionRef}
              >
                select option
              </Link>
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
                <div className="lg:block hidden">
                  <button
                    className="absolute bottom-[4.4rem] w-full text-white uppercase"
                    onClick={() => handleOpenModal(item.id)}
                  >
                    quick view
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto text-center lg:mt-28 my-20">
        <button className="uppercase text-xs p-2 font-bold bg-black text-white ">
          More items
        </button>
      </div>
      {/* lastest views */}
      <div className="lg:w-[80%] w-[90%] mx-auto lg:mt-24">
        <div className="flex items-center gap-2">
          <div className="w-[45%] h-[0.1rem] bg-gray-200" />
          <div className="lg:text-lg sm:text-lg text-sm text-center uppercase font-bold italic lg:w-[15%] w-[50%]">
            latest news
          </div>
          <div className="w-[45%] h-[0.1rem] bg-gray-200" />
        </div>
        <div className="lg:grid gap-10 grid-cols-4 h-[20rem] mt-10 hidden">
          <div
            className="text-center leading-none cursor-pointer"
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          >
            <div
              className={`h-[0.09rem] w-20 mb-2 bg-slate-400 mx-auto bg ${
                isHovered ? "hoverr" : ""
              }`}
            ></div>
            <a
              href="#"
              className="font-bold  text-white text-sm italic "
              style={{ textShadow: "1px 1px 1px black" }}
            >
              NK13 “HORDES”, EXCLUSIVE COLLABORATION BUTTON SHIRT <br />
              <span className="text-xs text-slate-200 opacity-50">
                24 February
              </span>
            </a>
            <p
              className="mt-7 leading-6   text-slate-200"
              style={{ textShadow: "1px 1px 1px black" }}
            >
              We worked on these exclusive Button Shirt as our self appreciation
              of our roots as a collective, as a[Read More]
            </p>
          </div>
          <MyComponent
            itemId={1}
            width="w-[30%]"
            tajuk="events"
            tanggal="16"
            bulan="jun"
            title="NK13 Canggu Store Kickstart Opening Party Sunday, June 13th 2021"
            image={require("../plugin/img/lastest-1.jpeg")}
            isHovered={hoveredItemId === 1}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          />
          <MyComponent
            itemId={2}
            width="w-[37%]"
            tajuk="lifestyle"
            tanggal="01"
            bulan="feb"
            title="merry christmas & fcuk 2020"
            image={require("../plugin/img/lastest-2.jpg")}
            isHovered={hoveredItemId === 2}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          />
          <MyComponent
            itemId={3}
            width="w-[70%]"
            tajuk="customwar events"
            tanggal="22"
            bulan="dec"
            title="nk13 fleece shirt with chai stitch embroidery"
            image={require("../plugin/img/lastest-3.jpg")}
            isHovered={hoveredItemId === 3}
            onMouseEnter={handleItemMouseEnter}
            onMouseLeave={handleItemMouseLeave}
          />
        </div>
        <div className="lg:hidden ">
          <LastestViews />
        </div>
      </div>
      <Footer />
      <QuixZoom
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        selectedItemId={selectedItemId}
        optionRef={optionRef}
      />
      <Scroll />
    </div>
  );
};
export default Home;
