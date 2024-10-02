import React, { useState } from "react";
import FollowItem from "./FollowItem";
import userImage1 from "../../assets/images/mc.jpeg";
import userImage2 from "../../assets/images/ff.png";
import userImage3 from "../../assets/images/nc.jpeg";
import userImage4 from "../../assets/images/ns.png";
import userImage5 from "../../assets/images/ab.jpeg";
import userImage6 from "../../assets/images/al.jpeg";
import userImage7 from "../../assets/images/kds.jpeg";

function Follow() {
  const [numberOfUsers, setNumberOfUsers] = useState(4);

  const loadMoreUsers = () => {
    numberOfUsers <= 4 ? setNumberOfUsers(users.length) : setNumberOfUsers(4);
  };

  const users = [
    {
      id: 1,
      fullName: "Meseuh Christien",
      username: "mdchristien",
      image: userImage1,
      isActive: false,
    },
    {
      id: 2,
      fullName: "Foletia Fabiola",
      username: "ffabiola",
      image: userImage2,
      isActive: true,
    },
    {
      id: 3,
      fullName: "Nsem Confident",
      username: "nsemconfident",
      image: userImage3,
      isActive: true,
    },
    {
      id: 4,
      fullName: "Njinda Salome",
      username: "njindasalome",
      image: userImage4,
      isActive: false,
    },
    {
      id: 5,
      fullName: "Ashu Boris",
      username: "ashuboris",
      image: userImage5,
      isActive: true,
    },
    {
      id: 6,
      fullName: "Kenne Suzy",
      username: "knsuzy",
      image: userImage7,
      isActive: false,
    },
    {
      id: 7,
      fullName: "Amah Laurel",
      username: "amahlaurel",
      image: userImage6,
      isActive: true,
    },
  ];

  const renderFollowItems = users.slice(0, numberOfUsers).map((user) => {
    return (
      <FollowItem
        fullName={user.fullName}
        image={user.image}
        alt={`${user.name} image`}
        isActive={user.isActive}
        userName={user.username}
        key={user.id}
      />
    );
  });

  return (
    <div className="bg-primary px-5 py-3 rounded-md w-full">
      <h1 className="pb-3 text-lg">Who to follow</h1>
      <ul className="space-y-2">{renderFollowItems}</ul>
      <h1
        onClick={loadMoreUsers}
        className="text-accent text-center py-2 cursor-pointer hover:text-yellow-400"
      >
        {numberOfUsers <= 4 ? "View more" : "View less"}
      </h1>
    </div>
  );
}

export default Follow;
