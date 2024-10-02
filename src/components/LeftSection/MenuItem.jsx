import React from "react";

function MenuItem({ icon, name, notification, isActive, onClick }) {
  return (
    <li
      className={`flex items-center relative p-2 cursor-pointer hover:text-accent rounded-md ${
        isActive ? "bg-accent text-black hover:text-black" : "text-gray-400"
      }`}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className="ml-2">{name}</span>
      {notification && (
        <span className="bg-red-600 text-white text-xs rounded-full px-2 mx-2 absolute right-0">
          {notification}
        </span>
      )}
    </li>
  );
}

export default MenuItem;
