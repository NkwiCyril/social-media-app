import React from "react";

function Profile({image, fullName, userName}) {
  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="Profile"
          className="rounded-full border-4 border-accent object-cover w-24 h-24"
        />
        <h2 className="text-lg mt-1">{fullName}</h2>
        <p className="text-gray-400">@{userName}</p>
      </div>
    </>
  );
}

export default Profile;
