import React from "react";

function IconButton({ content }) {
  return (
    <div className="text-gray-200 bg-darkSecondary p-3 rounded-md hover:text-accent">
      {content}
    </div>
  );
}

export default IconButton;
