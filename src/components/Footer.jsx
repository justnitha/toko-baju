const Footer = () => {
  return (
    <div className="bg-black text-white pt-10 mt-10">
      <div className=" lg:w-[80%] px-4 lg:px-0 sm:grid sm:grid-cols-2 sm:gap-5  mx-auto lg:flex justify-between items-start text-base ">
        <div className="lg:w-[15%] w-full p-5">
          <img
            src={require("../plugin/img/CROSSLOGO-BLK.png")}
            alt="image-logo"
            className="w-[40%] sm:w-[65%]"
          />
          <div className="flex items-center gap-1 mt-2 text-[#c0c0c0] hover:text-white">
            <a
              href="https://www.facebook.com/nk13official"
              className="py-[2px] px-[10px] border border-[#c0c0c0] rounded-3xl hover:bg-blue-600 hover:border-blue-600"
            >
              <i class="fa-brands fa-facebook-f fa-xs"></i>
            </a>
            <a
              href="https://www.instagram.com/nk13official/"
              className="py-[2px] px-[10px] border border-[#c0c0c0] rounded-3xl hover:bg-blue-400 hover:border-blue-400"
            >
              <i class="fa-brands fa-instagram fa-xs"></i>
            </a>
            <a
              href="#"
              className=" border rounded-3xl py-[2px] px-[7px] border-[#c0c0c0] hover:bg-red-600 hover:border-red-600"
            >
              <i class="fa-brands fa-youtube fa-xs"></i>
            </a>
          </div>
        </div>
        {/* about us web */}
        <div className="w-[20%] hidden  lg:block">
          <h1 className="uppercase italic font-bold">about us</h1>
          <p>
            Naskleeng Tigabelas/NK13 formed back in 2007 as one creative
            collective. Spitting poisonous good times from our snake's lair in
            Denpasar, Bali.
          </p>
        </div>
        {/* store web */}
        <div className="w-[20%] hidden  lg:block">
          <h1 className="uppercase italic font-bold">store</h1>
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Address: Jalan Nangka Selatan No. 6, Denpasar, Bali</p>
          </div>
          <hr />
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Open: All Day (10AM - 10PM)</p>
          </div>
          <hr />
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Phone: +62 812 3959 9613</p>
          </div>
          <hr />
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Email: info@naskleeng-13.com</p>
          </div>
          <hr />
        </div>
        <div className="w-full lg:w-[30%] lg:mt-0 mt-4 ">
          <h1 className="uppercase italic font-bold">shiping info</h1>
          <div className="flex items-baseline py-2 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Return Policy</p>
          </div>
          <hr />
          <div className="flex items-baseline py-2 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Terms + Conditions</p>
          </div>
          <hr />
          <div className="flex items-baseline py-2 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Privacy</p>
          </div>
          <hr />
          <div className="flex items-baseline py-2 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Contact</p>
          </div>
          <hr />
        </div>
        {/* about us mobile,sm,md */}
        <div className="w-full mt-10  lg:hidden">
          <h1 className="uppercase italic font-bold">about us</h1>
          <p className="sm:mt-5">
            Naskleeng Tigabelas/NK13 formed back in 2007 as one creative
            collective. Spitting poisonous good times from our snake's lair in
            Denpasar, Bali.
          </p>
        </div>
        {/* store mobile,sm,md */}
        <div className="w-full mt-10  lg:hidden ">
          <h1 className="uppercase italic font-bold">store</h1>
          <div className="flex items-baseline py-3 gap-5 sm:mt-2">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Address: Jalan Nangka Selatan No. 6, Denpasar, Bali</p>
          </div>
          <hr />
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Open: All Day (10AM - 10PM)</p>
          </div>
          <hr />
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Phone: +62 812 3959 9613</p>
          </div>
          <hr />
          <div className="flex items-baseline py-3 gap-5">
            <i class="fa-solid fa-chevron-right fa-xs text-[#819951]"></i>
            <p>Email: info@naskleeng-13.com</p>
          </div>
          <hr />
        </div>

      </div>
      <div className="mt-28 sm:mt-20 text-center">
        <img
          src={require("../plugin/img/bank-transfer.png")}
          alt="bnk-trf"
          className="lg:w-[5%] w-[15%] sm:w-[10%] p-3 rounded-lg mx-auto bg-[#100f0f]"
        />
        <p className="py-4 text-[#80807c]">
          Copyright 2023 ©{" "}
          <span className=" font-bold">Naskleeng Tigabelas</span>{" "}
        </p>
      </div>
    </div>
    
  );
};
export default Footer;
