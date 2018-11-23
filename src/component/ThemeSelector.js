import React from "react";
import "./ThemeSelector.css";
const ThemeSelector = () => {
  return (
    <div className="ThemeSelector">
      <div className="theme theme--dayTime">
        <label htmlFor="day">Day time Mode</label>
        <input type="radio" id="day" name="theme" />
      </div>
      <div className="theme theme--nightTime">
        <label htmlFor="night">Night time Mode</label>
        <input type="radio" id="night" name="theme" />
      </div>
    </div>
  );
};
export default ThemeSelector;
