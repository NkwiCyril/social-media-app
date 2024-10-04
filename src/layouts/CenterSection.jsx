import React from "react";
import HikeCard from "../components/CenterSection/HikeCard";
import { hikeData } from "../data/data";

function CenterSection() {
  const renderHikeData = hikeData.map((hike) => {
    return (
      <HikeCard
        mountain={hike.mountain}
        location={hike.location}
        date={hike.date}
        time={hike.time}
        details={hike.details}
        image={hike.image}
        key={hike.id}
      />
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl">Upcoming Hikes</h1>
        <span className="flex text-sm">
          <p className="text-gray-400">Sort by:</p>
          {""}
          <select className="bg-background border-none" name="sort" id="">
            <option value="">Most recent</option>
            <option value="">Last Week</option>
            <option value="">Upcoming</option>
          </select>
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">{renderHikeData}</div>
    </div>
  );
}

export default CenterSection;
