import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Main.css";
const Main = ({ displayValue, handleClick, maxmize }) => {
  return (
    <main
      className="main--front"
      style={{ display: `${maxmize ? "grid" : "none"}` }}
    >
      <Display displayValue={displayValue} />
      <ButtonPanel clickHandler={handleClick} />
    </main>
  );
};
export default Main;
