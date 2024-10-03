import React from "react";
import HikeImageCard from "./HikeImageCard";
import userImage1 from "../../assets/images/mc.jpeg";
import userImage2 from "../../assets/images/ff.png";
import userImage3 from "../../assets/images/nc.jpeg";
import userImage4 from "../../assets/images/ns.png";
import UserCircle from "./UserCircle";

function HikeCard({ mountain, location, date, time, details, image }) {
  const userImages = [userImage1, userImage2, userImage3, userImage4];

  const userCircles = userImages.map((image, index) => (
    <UserCircle key={index} image={image} />
  ));

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
        <span className="text-green-500 pb-3 pt-4 text-sm">
          {date.slice(0, 3).toUpperCase()} {time}
        </span>
        <h2 className="text-lg">{mountain}</h2>
        <span className="text-sm">Location &sdot; {location}</span>
        <hr className="my-4" />

        <div className="flex justify-between">
          <div className="flex -space-x-1">
            {userCircles}
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-darkSecondary ">
              <span className="text-[12px]">+{[Math.floor((Math.random() + 1) * userCircles.length)]}</span>
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
