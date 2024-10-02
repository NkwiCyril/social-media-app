import React from "react";

function ProfileDetails({ followers, following, event }) {
  return (
    <div className="flex justify-around mt-5 text-center bg-primary rounded-md px-3 py-2">
      <div>
        <p className="font-bold">{followers}</p>
        <p className="text-gray-400">Followers</p>
      </div>
      <div>
        <p className="font-bold">{following}</p>
        <p className="text-gray-400">Following</p>
      </div>
      <div>
        <p className="font-bold">{event}</p>
        <p className="text-gray-400">Event</p>
      </div>
    </div>
  );
}

export default ProfileDetails;
