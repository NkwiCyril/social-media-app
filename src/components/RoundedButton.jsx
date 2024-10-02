import React from "react";

function RoundedButton({ text }) {
  return (
    <>
      <button className="text-accent rounded-full text-sm px-2 py-1 border border-accent flex items-center hover:bg-accent hover:text-primary transition-all ease-in-out">
        {text}
      </button>
    </>
  );
}

export default RoundedButton;
