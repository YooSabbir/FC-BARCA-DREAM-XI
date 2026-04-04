import React from "react";
import dollarimg from "../assets/Currency.png";
import logo from "../assets/barcalogoo.png";

function Navbar({ coin }) {
  return (
    <div className=" sticky top-0 z-50 bg-white">
      <div className="navbar w-11/12 mx-auto">
        <div className="flex-1 flex items-center gap-2">
          <img
            src={logo}
            alt=""
            className="w-[50px] md:w-[65px] cursor-pointer"
          />
          <h1
            className="
  text-[19px] md:text-2xl
  font-extrabold
  cursor-pointer
 bg-gradient-to-r from-[#A50044] to-[#004D98]
  bg-clip-text text-transparent
  select-none
  transition
  hover:scale-105 hover:brightness-110
"
          >
            FC Barçelona
          </h1>
        </div>
        <div className="flex-none">
          <div className="flex gap-4 md:gap-6 items-center">
            <a href="" className="hidden sm:block">
              Home
            </a>
            <a href="" className="hidden sm:block">
              Fixure
            </a>
            <a href="" className="hidden sm:block">
              Teams
            </a>
            <a href="" className="hidden sm:block">
              Schedules
            </a>

            <button className="flex items-center gap-1 px-1 py-1 font-semibold text-sm text-center">
              <img src={dollarimg} alt="coin" className="w-4 h-4" />
              <span className="text-yellow-500 font-bold">{coin}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
