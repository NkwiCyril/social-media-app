import React from "react";
import Detail from "./Detail";

function HikeImageCard({ image, date, distance, elevation, difficulty }) {
  const details = [
    { title: "Distance", data: distance },
    { title: "Elevation", data: elevation },
    { title: "Difficulty", data: difficulty },
  ];

  const renderDetails = details.map((detail, index) => {
    return <Detail key={index} title={detail.title} data={detail.data} />;
  });

  return (
    <>
      <div className="relative">
        <img src={image} className="rounded-md object-cover w-full h-[200px]" />
        <div className="absolute bottom-0 py-1 px-3 backdrop-blur-sm bg-black/50 flex gap-5 w-full rounded-b-md">
          {renderDetails}
        </div>
        <div className="absolute top-2 right-2 bg-darkSecondary w-12 h-fit flex flex-col items-center p-[2px] rounded-md">
          <span className="text-[12px] text-gray-200 font-light">
            {date.slice(4, 8).toUpperCase()}
          </span>
          <span className="text-2xl font-bold">{date.slice(8)}</span>
        </div>
      </div>
    </>
  );
}

export default HikeImageCard;
