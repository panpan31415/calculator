import React from "react";

import "./Display.css";

const Display = ({ displayValue }) => {
  return (
    <div className="component-display">
      <div>{displayValue}</div>
    </div>
  );
};

export default Display;
