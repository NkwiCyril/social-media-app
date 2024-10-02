import React from "react";
import RoundedButton from "../RoundedButton";

function FollowItem({ image, fullName, userName, isActive, alt }) {
  return (
    <li className="flex items-center cursor-pointer hover:text-accent w-full">
      <img
        src={image}
        alt={alt}
        className={`rounded-full mr-2 w-10 h-10 p-0.5 ${
          isActive ? "border-2 border-accent" : ""
        }`}
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-start">
          <span>{fullName}</span>
          <span className="text-sm text-gray-400">@{userName}</span>
        </div>
        <div>
          <RoundedButton text={"Follow"} />
        </div>
      </div>
    </li>
  );
}

export default FollowItem;
