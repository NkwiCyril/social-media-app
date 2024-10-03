import React from "react";

function NewsCard({ imageSrc, title, time }) {
  return (
    <li>
      <div className="flex flex-col hover:text-accent cursor-pointer">
        <img
          src={imageSrc}
          alt="news image"
          className="rounded-md w-full h-[135px] object-cover"
        />
        <div className="flex justify-between items-start mt-2 text-sm ">
          <p className="w-50">{title}</p>
          <span className="text-gray-400 ">{time}</span>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
