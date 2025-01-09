import React from "react";

const Button = ({ color, clickHandler }) => {
  return (
    <button
      type="button"
      className="h-[30px] m-2 py-1 px-4 rounded"
      style={{ backgroundColor: color }}
      onClick={()=>clickHandler(color)}
    >
      {color}
    </button>
  );
};

export default Button;
