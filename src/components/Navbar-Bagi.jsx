import React, { useState } from "react";
import Scroll from "./ScroolWA";
import "../plugin/css/Navbar.css";

const NavbarBagi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, SetShow] = useState(false);

  const Dropdown = () => {
    SetShow(!show);
  };

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`flex items-center mx-auto justify-between px-3 lg:px-0 lg:justify-center lg:gap-[18rem] py-1 text-white  top-0 right-0 left-0 z-10 fixed ${isOpen ? 'h-screen bg-black opacity-80  ' : 'flex'}`}>
      <div className="navbar-toggle " onClick={toggleNavbar}>
        {isOpen ? (
          <div className="p-2 absolute top-0 right-0" ><i class="fa-solid fa-xmark fa-2x"></i></div> // Icon untuk navbar terbuka
        ) : (
          <div className='flex items-center text-xl uppercase gap-1'>
            <i class="fa-solid fa-bars fa-lg "></i>
            <p className='hidden lg:block'>Menu</p>
          </div> // Icon untuk navbar tertutup
        )}
      </div>
      <div className={isOpen ? 'hidden':'text-center w-[20%] lg:w-[5%] ms-[2rem] lg:ms-[7rem]'}>
        <img src={require ('../plugin/img/CROSSLOGO-BLK.png')} alt="logo" className='mx-auto w-full' />
      </div>
      <ul className="flex gap-5">
        <li className={isOpen ? 'hidden':''}>
          <a href="#">
            <i class="fa-solid fa-basket-shopping fa-lg"></i>
          </a>
        </li>
        <li className={isOpen ? 'hidden':''}>
          <a href="#">
            <i class="fa-solid fa-user fa-lg"></i>
          </a>
        </li>
        <li className={isOpen ? 'hidden':'hidden lg:block'}>|</li>
        <li className={isOpen ? 'hidden':'hidden lg:block'}>
          <a href="#">
            <i class="fa-brands fa-facebook-f fa-lg"></i>
          </a>
        </li>
        <li className={isOpen ? 'hidden':'hidden lg:block'}>
          <a href="#">
            <i class="fa-brands fa-instagram fa-lg"></i>
          </a>
        </li>
        <li className={isOpen ? 'hidden':'hidden lg:block'}>
          <a href="#">
            <i class="fa-brands fa-youtube fa-lg"></i>
          </a>
        </li>
        {/* digunakan pada saat button open */}
        <li className={isOpen ? 'mx-auto mt-44 w-full':'hidden'}>
          <div className=''>
            <p className= 'text-2xl font-semibold italic'>CUSTOM WAR 2023</p>
            <div onClick={Dropdown} className="flex gap-[16rem] relative mt-7 ps-[3rem] justify-between w-full px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer">
                <a href='' className='text-center text-2xl font-semibold italic '>SHOP</a>
                <i class="fa-solid fa-chevron-down font-bold"></i>
            </div>
            {show && (
                <ul className="ps-[3rem] ">
                    <li className="py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer capitalize"><a href="#" className="">my account</a></li>
                    <li className="py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer capitalize"><a href="#" className="">wishlist</a></li>
                    <li className="py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer capitalize"><a href="#" className="">checkout</a></li>
                    <li className="py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer capitalize"><a href="#" className="">cari</a></li>
                    <li className="py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer capitalize"><a href="#" className="">payment confirmation</a></li>
                </ul>
            )}
            <div className="flex gap-[15.5rem] mt-7 ps-[3rem] justify-between w-full px-5 py-2 hover:bg-abu-abu-100 hover:text-white cursor-pointer">
                <a href='' className='text-center text-2xl font-semibold italic'>LOGIN</a>
                <i class="fa-solid fa-chevron-down font-bold"></i>
            </div>
          </div>
      </li>
      </ul>
    </nav>
  );
};

export default NavbarBagi;
