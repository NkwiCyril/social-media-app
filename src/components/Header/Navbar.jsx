import React from "react";
import {
  FiBell,
  FiSettings,
  FiMessageSquare,
  FiEdit3,
  FiChevronDown,
} from "react-icons/fi";
import SearchInput from "./SearchInput";
import IconButton from "../IconButton";
import User from "../../assets/images/Chiron.jpg";
import RoundedButton from "../RoundedButton";

function Navbar() {
  return (
    <nav className="bg-primary text-white h-16 flex items-center justify-between px-4 w-full">
      <div className="flex items-center space-x-3">
        <div
          className={
            "text-gray-900 hover:text-gray-600 bg-accent p-3 rounded-md"
          }
        >
          <FiEdit3 />
        </div>
        <SearchInput placeholder={"Search"} />
      </div>

      <div className="hidden md:flex items-center space-x-5">
        <a href="/" className="text-gray-400 hover:text-accent">
          Search
        </a>
        <a href="/" className="text-gray-400 hover:text-accent">
          Pages
        </a>
        <a href="/" className="text-gray-400 hover:text-accent">
          My Network
        </a>
        <div className="relative">
          <a href="/" className="text-gray-400 hover:text-accent flex items-center gap-1">
            Account <FiChevronDown />
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <IconButton content={<FiSettings />} />
        <IconButton content={<FiBell />} />
        <IconButton content={<FiMessageSquare />} />
        <div>
          <img
            src={User}
            alt="user image"
            className="rounded-md object-cover w-10 h-10"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
