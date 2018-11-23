import React from "react";
import "./icon.css";
const href = require("./symbol-defs.svg");

export const IconClose = () => {
  return (
    <svg>
      <use xlinkHref={href + "#icon-close"} />
    </svg>
  );
};
export const IconSettings = () => {
  return (
    <svg>
      <use xlinkHref={href + "#icon-settings"} />
    </svg>
  );
};
export const IconMinimize = () => {
  return (
    <svg>
      <use xlinkHref={href + "#icon-minimize"} />
    </svg>
  );
};
export const IconMaxmize = () => {
  return (
    <svg>
      <use xlinkHref={href + "#icon-maximize"} />
    </svg>
  );
};
