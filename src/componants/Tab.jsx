import React, { useState } from "react";
const Tab = ({ selectedType, setSelectedType }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto py-3 space-y-3 md:space-y-0">
      {selectedType === "Avialable" ? (
        <div className="text-2xl font-bold text-[#004D98] text-center md:text-left">
          Available Players :
        </div>
      ) : (
        <div className="text-2xl font-bold text-[#004D98] text-center md:text-left">
          Selected Players :
        </div>
      )}

      <div
        role="tablist"
        aria-label="Player selection tabs"
        className="flex flex-col sm:flex-row rounded-md  shadow-lg w-full sm:w-auto bg-[#A50044]"
      >
        <a
          role="tab"
          aria-selected="false"
          tabIndex={0}
          onClick={() => setSelectedType("Avialable")}
          className={`${selectedType === "Avialable" ? "bg-[#004D98]" : "bg-[#A50044]"} tab px-6 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none text-white text-[16px] font-semibold  transition-colors duration-100 cursor-pointer flex items-center justify-center hover:scale-105 hover:shadow-lg active:scale-95`}
        >
          Available
        </a>

        <a
          role="tab"
          aria-selected="true"
          tabIndex={0}
          onClick={() => setSelectedType("Selected")}
          className={`${selectedType === "Selected" ? "bg-[#004D98]" : "bg-[#A50044]"} tab px-6 py-2 rounded-b-md sm:rounded-r-md sm:rounded-bl-none text-white text-[16px] font-semibold shadow-md transition-colors duration-100 cursor-pointer flex items-center justify-center hover:scale-105 hover:shadow-lg active:scale-95`}
        >
          Selected
        </a>
      </div>
    </div>
  );
};

export default Tab;
