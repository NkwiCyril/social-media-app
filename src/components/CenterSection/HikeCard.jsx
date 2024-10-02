import React from "react";
import HikeImageCard from "./HikeImageCard";
import userImage1 from "../../assets/images/mc.jpeg";
import userImage2 from "../../assets/images/ff.png";
import userImage3 from "../../assets/images/nc.jpeg";
import userImage4 from "../../assets/images/ns.png";

function HikeCard({ mountain, location, date, time, details, image }) {
  return (
    <div className="flex flex-col bg-primary px-2 py-2 rounded-md">
      <HikeImageCard
        image={image}
        date={date}
        difficulty={details.difficulty}
        distance={details.distance}
        elevation={details.elevation}
      />
      <div>
        <h3 className="text-green-500 pb-3 pt-2 text-sm">
          {date.slice(0, 3).toUpperCase()} {time}
        </h3>
        <h1 className="text-lg">{mountain}</h1>
        <span className="text-sm">Location &sdot; {location}</span>
        <hr className="my-4" />

        <div className="flex justify-between">
          <div class="flex -space-x-1 ">
            <img
              class="inline-block h-6 w-6 rounded-full ring-1 ring-darkSecondary"
              src={userImage1}
              alt=""
            />
            <img
              class="inline-block h-6 w-6 rounded-full ring-1 ring-darkSecondary"
              src={userImage2}
              alt=""
            />
            <img
              class="inline-block h-6 w-6 rounded-full ring-1 ring-darkSecondary"
              src={userImage3}
              alt=""
            />
            <img
              class="inline-block h-6 w-6 rounded-full ring-1 ring-darkSecondary"
              src={userImage4}
              alt=""
            />
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-darkSecondary ">
              <span className="text-[12px]">+2</span>
            </div>
          </div>
          <button className="text-accent rounded-full text-sm px-9 py-1 flex items-center bg-btnBg hover:bg-accent hover:text-btnBg ">
            Join
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default HikeCard;
