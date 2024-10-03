import React, { useState } from "react";
import FollowItem from "./FollowItem";
import { users } from "../../data/users";

function Follow() {
  const [numberOfUsers, setNumberOfUsers] = useState(4);

  const loadMoreUsers = () => {
    numberOfUsers <= 4 ? setNumberOfUsers(users.length) : setNumberOfUsers(4);
  };

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
