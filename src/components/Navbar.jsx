import React, { useEffect, useState } from "react";

import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";

const Navlinks = ["Home", "About", "Services", "Breeds", "Shop", "Gallery"];

//navbar contact section
const TopContactSection = () => {
  return (
    <section className="w-full h-[53px] bg-[#007FFF] text-sm lg:text-[16px] text-[#f8f8f8] flex items-center justify-center">
      Call us for Veterinary Support: +977-9861859764
    </section>
  );
};

//navlinks
const MainNavbar = ({ toggleSideBar }) => {
  return (
    <section className="w-full h-[102px] flex items-center justify-between px-12 lg:px-0 lg:justify-evenly">
      {/* //logo */}
      <div className="w-[90px] h-[32px] text-center flex justify-center font-[700] text-[15px] uppercase leading-none">
        your logo here
      </div>
      {/* navlinks */}
      <ul className="hidden list-none text-[14px] lg:flex items-center lg:gap-5 xl:gap-12 h-full font-[700]">
        {Navlinks.map((item) => (
          <li
            key={item}
            className="text-black hover:text-[#007FFF] hover:underline underline-offset-4 cursor-pointer duration-150 transition-all text-[15px] font-[500]"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="hidden lg:block">
        <Search />
      </div>
      <div className="hidden lg:block">
        <div className="w-[120px] h-[50px] flex items-center justify-center gap-2 rounded-md bg-white shadow-sm cursor-pointer border border-[#007FFF]">
          <div className="text-[16px] font-[500] text-[#007FFF]">
            <IoCart />
          </div>
          <p className="text-[12px] font-[600] text-black">2 Item</p>
        </div>
      </div>
      <div
        className="text-[18px] text-[#007FFF] block lg:hidden cursor-pointer"
        onClick={toggleSideBar}
      >
        <AiOutlineMenu />
      </div>
    </section>
  );
};

//search section
const Search = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <form className="w-[290px] h-[50px] rounded-full overflow-hidden relative border border-[#007FFF]">
        <input
          type="text"
          placeholder="Search....."
          className="w-full h-full p-5 border-none outline-none focus:outline-none placeholder:text-[12px] placeHolder:font-[400]"
        />
        <button className="absolute w-[39px] h-[39px] rounded-full bg-[#007FFF] top-1/2 -translate-y-1/2 right-1 text-white flex items-center justify-center">
          <AiOutlineSearch />
        </button>
      </form>
      <div className="text-[#007FFF] text-[16px] cursor-pointer">
        <BsFillHeartFill />
      </div>
    </div>
  );
};

const MobileMenu = ({ toggleSideBar }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/70 lg:hidden"
      onClick={toggleSideBar}
    >
      <div
        className="w-full sm:w-72 md:w-96 h-full bg-white px-4 py-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="w-[90px] h-[32px] text-center flex justify-center font-[700] text-[15px] uppercase leading-none">
            your logo here
          </div>
          <div
            className="text-[18px] font-[600] text-[#007FFF] cursor-pointer"
            onClick={toggleSideBar}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
        <div className="my-10">
          <Search />
        </div>
        <ul className="list-none space-y-8">
          {Navlinks?.map((item) => (
            <li
              key={item}
              className="text-md hover:text-[#007FFF] cursor-pointer duration-150"
              onClick={toggleSideBar}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="my-8">
          <div className="w-[120px] h-[50px] flex items-center justify-center gap-2 rounded-md bg-white shadow-sm cursor-pointer border border-[#007FFF]">
            <div className="text-[16px] font-[500] text-[#007FFF]">
              <IoCart />
            </div>
            <p className="text-[12px] font-[600] text-black">2 Item</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const bodyStyles = document.body.style;
  const toggleSideBar = () => {
    setShowSideBar((prev) => !prev);
  };
  useEffect(() => {
    bodyStyles.overflowY = showSideBar ? "hidden" : "auto";
  }, [showSideBar, bodyStyles]);
  return (
    <>
      <TopContactSection />
      <MainNavbar toggleSideBar={toggleSideBar} />
      {showSideBar && (
        <MobileMenu showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      )}
    </>
  );
};

export default Navbar;
