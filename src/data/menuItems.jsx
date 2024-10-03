import {
    FaHome,
    FaImage,
    FaMap,
    FaMountain,
    FaUsers,
    FaVideo,
  } from "react-icons/fa";

const menuItems = [
  {
    icon: <FaHome />,
    name: "Home",
  },
  {
    icon: <FaUsers />,
    name: "Friends",
    notification: 5,
  },
  {
    icon: <FaMountain />,
    name: "Hikes",
  },
  {
    icon: <FaVideo />,
    name: "Videos",
  },
  {
    icon: <FaImage />,
    name: "Photos",
    notification: 10,
  },
  {
    icon: <FaMap />,
    name: "Map",
  },
];

export default menuItems;