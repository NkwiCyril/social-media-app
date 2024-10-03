import React, { useState } from "react";
import MenuItem from "./MenuItem";
import PageItem from "./PageItem";
import menuItems from "../../data/menuItems";
import pageItems from "../../data/pageItems";

function Menu() {
  const [activeItem, setActiveItem] = useState("Hikes");

  const renderMenuItems = menuItems.map((menuItem, index) => {
    return (
      <MenuItem
        icon={menuItem.icon}
        name={menuItem.name}
        notification={menuItem.notification}
        key={index}
        isActive={activeItem === menuItem.name}
        onClick={() => setActiveItem(menuItem.name)}
      />
    );
  });

  const renderPageItems = pageItems.map((pageItem, index) => {
    return (
      <PageItem
        image={pageItem.image}
        title={pageItem.title}
        alt={pageItem.alt}
        key={index}
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
