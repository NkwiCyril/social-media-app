import React from "react";

function HikeImageCard({ image, date, distance, elevation, difficulty }) {
  return (
    <>
      <div className="relative">
        <img src={image} className="rounded-md object-cover w-full h-48" />
        <div className="absolute bottom-0 py-1 px-3 backdrop-blur-sm bg-black/50 flex gap-5 w-full rounded-b-md">
          <div className="flex flex-col">
            <span className="text-sm font-extralight">Distance</span>
            <span>{distance}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extralight">Elevation</span>
            <span>{elevation}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extralight">Difficulty</span>
            <span>{difficulty}</span>
          </div>
        </div>
        <div className="absolute top-2 right-2 bg-darkSecondary w-12 h-fit flex flex-col items-center p-[2px] rounded-md">
          <span className="text-[12px] text-gray-200 font-light">{date.slice(4, 8).toUpperCase()}</span>
          <span className="text-2xl font-bold">{date.slice(8)}</span>
        </div>
      </div>

    </>
  );
}

export default HikeImageCard;