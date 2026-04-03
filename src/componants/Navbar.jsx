import React from "react";
import dollarimg from "../assets/Currency.png";
import logo from "../assets/barcalogoo.png";

function Navbar() {
  return (
    <div className="navbar w-11/12 mx-auto sticky top-0 z-50 bg-white py-2">
      <div className="flex-1 flex items-center gap-2">
        <img
          src={logo}
          alt=""
          className="w-[50px] md:w-[65px] cursor-pointer"
        />
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
          Barca-XI
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

          <button className="flex items-center gap-1 px-3 py-1 font-semibold">
            <span>0 coin</span>
            <img src={dollarimg} alt="" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
