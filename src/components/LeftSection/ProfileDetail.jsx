import React from "react";
import Detail from "../CenterSection/Detail";

function ProfileDetail({ title, detail }) {
  return (
    <div>
      <p className="font-bold">{detail}</p>
      <p className="text-gray-400">{title}</p>
    </div>
  );
}

export default ProfileDetail;
