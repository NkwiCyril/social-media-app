import React from "react";

function IconButton({ content }) {
  return (
    <div className="text-gray-200 hover:text-white bg-darkSecondary p-3 rounded-md">
      {content}
    </div>
  );
}

export default IconButton;
