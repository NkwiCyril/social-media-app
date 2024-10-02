import React from "react";
import "../styles/index.css";
import Profile from "../components/LeftSection/Profile";
import user from "../assets/images/Chiron.jpg";
import ProfileDetails from "../components/LeftSection/ProfileDetails";
import Menu from "../components/LeftSection/Menu";

function LeftSection() {
  return (
    <>
      <Profile image={user} fullName={"Nkwi Cyril"} userName={"nkwicyril"} />

      <ProfileDetails followers={"4k"} following={"900"} event={"81"} />

      <Menu />
    </>
  );
}

export default LeftSection;
