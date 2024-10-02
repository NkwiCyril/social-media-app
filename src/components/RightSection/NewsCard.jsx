import React from "react";

function NewsCard({ imageSrc, title, time }) {
  return (
    <li>
      <div className="flex flex-col">
        <img
          src={imageSrc}
          alt="news image"
          className="rounded-md w-full h-32 object-cover"
        />
        <div className="flex justify-between items-start mt-2">
          <p className="text-sm">{title}</p>
          <span className="text-sm text-gray-400">{time}</span>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
