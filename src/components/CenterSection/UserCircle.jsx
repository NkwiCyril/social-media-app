import React from "react";

function UserCircle({ image, alt }) {
  return (
    <img
      className="inline-block h-6 w-6 rounded-full ring-1 ring-darkSecondary"
      src={image}
      alt={alt}
    />
  );
}

export default UserCircle;
