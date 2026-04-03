import React from "react";
import logo from "../assets/barcalogoo.png";

const Footer = () => {
  return (
    <div className="relative bg-[#0B132B] text-white pt-24 pb-6 px-4 md:px-12 mt-28">
      <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-full max-w-4xl px-4">
        <div
          className="
    rounded-2xl
    border border-white/20
    bg-gradient-to-r from-[#A50044]/90 to-[#004D98]/90
    backdrop-blur-md
    p-6 md:p-10
    text-center
    shadow-[0_10px_40px_rgba(0,0,0,0.4)]
    transition-all duration-300
    hover:shadow-[0_15px_60px_rgba(165,0,68,0.5)]
  "
        >
          <h2 className="text-lg md:text-2xl font-bold text-white tracking-wide">
            Join the Barça Fan Club!
          </h2>

          <p className="text-sm text-gray-200 mt-2">
            Updates, match previews, and player news delivered.
          </p>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="
          w-full md:w-80
          px-4 py-2.5
          rounded-sm
          bg-white/95
          text-sm text-black
          outline-none
          focus:ring-2 focus:ring-[#A50044]
          transition
        "
            />

            <button
              className="
          px-6 py-2.5
          rounded-sm
          bg-[#A50044] text-white
          text-sm font-semibold
          cursor-pointer
          transition-all duration-300

          hover:bg-[#A50044] hover:text-white
          hover:scale-105
          hover:shadow-lg

          active:scale-95
        "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-sm mt-20
                [&>*:last-child]:col-span-2 [&>*:last-child]:md:col-span-1"
      >
        <div>
          <h3 className="font-semibold mb-3">About Us</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 mb-2">
            <img src={logo} alt="" />
          </div>
          <p className="text-sm tracking-widest">Barça</p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <p className="text-gray-400 text-xs mb-3">
            Get exclusive content & behind-the-scenes news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l bg-white text-black text-xs outline-none"
            />
            <button className="px-6 py-2.5 rounded-sm bg-[#A50044] text-white text-sm font-semibold cursor-pointer transition-all duration-300 hover:bg-[#A50044] hover:text-white hover:scale-105 hover:shadow-lg active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600/30 mt-10 pt-4 text-center text-xs text-gray-500">
        ©2024 Fc Barcelona. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
