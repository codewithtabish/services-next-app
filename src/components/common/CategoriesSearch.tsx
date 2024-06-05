import React from "react";
import SearchBox from "./SearchBox";

const CategoriesSearch = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-4  mb-10 px-5 md:px-0">
      <div className="flex-col gap-3">
        <h3 className="font-black text-3xl text-center mb-2">
          Search <span className="text-primary ml-3 ">Doctor</span>
        </h3>
        <span
          className="font-outfit italic text-xl text-gray-700 
        dark:text-gray-400"
        >
          Search your doctor and book your appointement in one Click
        </span>
      </div>
      <SearchBox />
    </div>
  );
};

export default CategoriesSearch;
