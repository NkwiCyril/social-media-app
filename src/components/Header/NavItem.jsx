import React from "react";

function NavItem({ content, href }) {
  return (
    <a href={href} className="text-gray-400 hover:text-accent">
      {content}
    </a>
  );
}

export default NavItem;
