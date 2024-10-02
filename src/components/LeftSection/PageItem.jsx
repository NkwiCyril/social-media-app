import React from "react";

function PageItem({ image, title, alt }) {
  return (
    <li className="flex items-center text-gray-400 cursor-pointer hover:text-accent">
      <img src={image} alt={alt} className="rounded-md w-6 h-6" />
      <span className="ml-2">{title}</span>
    </li>
  );
}

export default PageItem;
