import React from "react";
import ProfileDetail from "./ProfileDetail";

function ProfileDetails(props) {
  return (
    <div className="flex justify-around mt-5 text-center bg-primary rounded-md px-3 py-2">
      <ProfileDetail detail={props.followers} title={"Followers"}/>
      <ProfileDetail detail={props.following} title={"Following"}/>
      <ProfileDetail detail={props.events} title={"Events"}/>
    </div>
  );
}

export default ProfileDetails;
