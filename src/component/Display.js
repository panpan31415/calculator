import React from "react";

import "./Display.css";

const Display = ({ total }) => {
  return (
    <div className="component-display">
      <div>{total}</div>
    </div>
  );
};

export default Display;
