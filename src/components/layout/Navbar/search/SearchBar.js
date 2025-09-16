import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";

const SearchBar = ({ handleSearchActive, activeSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div
      className={`${
        activeSearch ? "pointer-events-initial" : "pointer-events-none"
      } absolute inset-0 size-full fullVh fullSvh z-10`}
    >
      <div
        id="search"
        className={`${
          activeSearch ? "translate-y-[0]" : "translate-y-[-150%]"
        } transition-all duration-300 relative z-[2] `}
      >
        <div className=" py-[20px] lg:py-[2.39583333333vw] w-full bg-[#6B634B]">
          <div className="myContainer flex items-center justify-between">
            <div className="w-[90%] lg:w-[97%] flex items-center gap-x-[10px] lg:gap-x-[1.04166666667vw]">
              {/* <img
                src="/images/icons/search-logo.svg"
                alt="search"
                className="lg:w-[1.25vw] w-[20px] lg:min-w-[1.25vw] min-w-[20px]"
              /> */}
              <LuSearch
                onClick={() => handleSearchActive(true)}
                className="text-white cursor-pointer size-6 sm:size-8 min-w-6 sm:min-w-8"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                // placeholder={translations?.layout?.headerSearchPlaceholder}
                type="text"
                className="w-full outline-none bg-transparent text-[#f7f3e9] placeholder:text-[#F7F3E999] lg:text20 mtext18 placeholder:lg:text20 placeholder:mtext18 lg:tracking-[0.03125vw] tracking-[0.5px]"
                placeholder="Search something ..."
              />
            </div>
            {/* <img
              onClick={handleSearchActive}
              src="/images/icons/close-search.svg"
              alt="close"
              className="cursor-pointer lg:w-[1.51041666667vw] w-[24px] lg:min-w-[1.51041666667vw] min-w-[24px]"
            /> */}
            <IoCloseSharp
              onClick={handleSearchActive}
              className="text-white cursor-pointer size-6 sm:size-8 min-w-6 sm:min-w-8"
            />
          </div>
        </div>
      </div>
      <span
        onClick={handleSearchActive}
        className={`${
          activeSearch ? "block z-[1]" : "hidden z-[0]"
        } search-overlay opacity-[0] atwh_Full lrf1 h-[100vh] bg-[#343631cc]`}
      ></span>
    </div>
  );
};

export default SearchBar;
