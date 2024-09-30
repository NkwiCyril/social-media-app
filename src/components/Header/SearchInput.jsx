import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchInput ({ placeholder }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="bg-darkSecondary text-white rounded-md pl-10 pr-4 py-2 w-64 focus:outline-none"
      />
      <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-textColor" />
    </div>
  );
}

export default SearchInput;
