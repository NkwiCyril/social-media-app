import React from "react";
import {
  FiBell,
  FiSettings,
  FiMessageSquare,
  FiEdit3,
  FiChevronDown,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import SearchInput from "./SearchInput";
import IconButton from "../IconButton";
import User from "../../assets/images/main_pic_clear.jpeg";

function Navbar () {
  return (
    <nav className="bg-primary text-white h-16 flex items-center justify-between px-4 w-full">
      <div className="flex items-center gap-3">
        <div
          className={
            "text-gray-900 hover:text-gray-600 bg-accent p-3 rounded-md"
          }
        >
          <FiEdit3 />
        </div>
        <SearchInput placeholder={"Search"} />
      </div>

      <div className="hidden md:flex space-x-5">
        <a href="/" className="text-gray-400 hover:text-white">
          Search
        </a>
        <a href="/" className="text-gray-400 hover:text-white">
          Pages
        </a>
        <a href="/" className="text-gray-400 hover:text-white">
          My Network
        </a>
        <div className="relative">
          <button className="text-gray-400 hover:text-white flex items-center gap-1">
            Account <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Right Side: Icons */}
      <div className="flex items-center space-x-3">
        <IconButton content={<FiSettings />} />
        <IconButton content={<FiBell />} />
        <IconButton content={<FiMessageSquare />} />
        <div>
          <img src={User} alt="" className="rounded-md object-cover w-10 h-10"/>
        </div>
        <FaUserCircle className="text-gray-400 hover:text-white h-8 w-8" />
      </div>
    </nav>
  );
};

export default Navbar;
