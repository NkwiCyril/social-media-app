import React, { useState } from "react";
import MenuItem from "./MenuItem";
import PageItem from "./PageItem";
import {
  FaHome,
  FaImage,
  FaMap,
  FaMountain,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import mountain1 from "../../assets/images/mountain-1.jpeg";
import mountain2 from "../../assets/images/mountain-2.jpeg";
import mountain3 from "../../assets/images/mountain-3.jpeg";
import mountain4 from "../../assets/images/mountain-4.jpeg";

function Menu() {
  const [activeItem, setActiveItem] = useState("Hikes");

  var menuItems = [
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

  var pageItems = [
    {
      image: mountain1,
      title: "World of Mountains",
      alt: "World of Mountains",
    },
    {
      image: mountain2,
      title: "Mountain Life",
      alt: "Mountain Life",
    },
    {
      image: mountain3,
      title: "Mountains Calling in Peru",
      alt: "Mountains Calling in Peru",
    },
    {
      image: mountain4,
      title: "Mountaineering",
      alt: "Mountaineering",
    },
  ];

  const renderMenuItems = menuItems.map((menuItem) => {
    return (
      <MenuItem
        icon={menuItem.icon}
        name={menuItem.name}
        notification={menuItem.notification}
        key={menuItems.indexOf(menuItem)}
        isActive={activeItem === menuItem.name}
        onClick={() => setActiveItem(menuItem.name)}
      />
    );
  });

  const renderPageItems = pageItems.map((pageItem) => {
    return (
      <PageItem
        image={pageItem.image}
        title={pageItem.title}
        alt={pageItem.alt}
        key={pageItems.indexOf(pageItem)}
      />
    );
  });

  return (
    <div className="mt-5 bg-primary px-5 py-3 rounded-md">
      <ul className="space-y-1">{renderMenuItems}</ul>
      <hr className="my-4" />

      <div className="mt-5">
        <h3 className="text-gray-400 text-sm">PAGES YOU LIKE</h3>
        <ul className="mt-3 space-y-2">{renderPageItems}</ul>
      </div>
    </div>
  );
}

export default Menu;
