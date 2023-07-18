import React, { useState } from "react";
import { Link } from "react-router-dom";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      {/* Content of your page */}
      <div className="fixed bottom-3 text-white bg-[#65d072] rounded-full hover:bg-green-700 shadow-xl  lg:right-3 right-3 ">
        {showButton && (
          <Link to="https://web.whatsapp.com/ ">
            <button
              className="z-1  px-4 py-2 text-lg  border-none flex items-center gap-5"
              onClick={scrollToTop}
            >
              <i class="fa-brands fa-whatsapp fa-xl"></i>
              <p className="md:text-xl">Need help ?</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Scroll;
