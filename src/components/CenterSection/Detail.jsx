import React from "react";

function Detail({ title, data }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-extralight">{title}</span>
      <span>{data}</span>
    </div>
  );
}

export default Detail;
