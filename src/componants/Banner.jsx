import React from "react";
import logo from "../assets/barcalogoo.png";

function Banner() {
  return (
    <div className="w-full px-3 md:w-11/12 md:mx-auto my-6 md:my-8">
      <div className="relative w-full min-h-[200px] md:min-h-[220px] rounded-xl md:rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center bg-[#0d0d1a] px-4 md:px-8 py-10 md:py-14">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-black to-red-900/30"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src={logo} alt="" className="w-24 md:w-32 mb-3" />
          <span
            className="
  inline-block
  text-[10px] md:text-xs
  font-semibold tracking-wide
  px-3 py-1.5 md:px-4 md:py-1.5
  rounded-full

  bg-gradient-to-r from-blue-600 via-indigo-600 to-red-600
  text-white

  shadow-md
  backdrop-blur-sm
  cursor-pointer
  transition-all duration-300
  hover:scale-105 hover:shadow-lg
"
          >
             DREAM 11
          </span>
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
            Assemble Your Ultimate <br />
            <span className="bg-gradient-to-r from-[#A50044] to-[#004D98] bg-clip-text text-transparent">
              FC Barcelona
            </span>{" "}
            Dream Team
          </h1>
          <p className="text-white/60 text-[12px] md:text-sm mt-2">
            Més Que Un Club · Beyond Boundaries
          </p>

          <button
            className="
  mt-4 md:mt-6
  px-4 py-2 md:px-6 md:py-3
  text-sm md:text-base
  rounded-lg
  bg-gradient-to-r from-[#A50044] to-[#004D98]
  text-white font-semibold
  cursor-pointer
  transition-all duration-300 ease-in-out

  hover:from-[#A50044] to-[#004D98]
  hover:scale-105 hover:shadow-lg

  active:scale-95
"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
