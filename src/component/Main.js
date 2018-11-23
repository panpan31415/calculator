import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Main.css";
const Main = ({ total, handleClick, maxmize }) => {
  return (
    <main
      className="main--front"
      style={{ display: `${maxmize ? "grid" : "none"}` }}
    >
      <Display total={total} />
      <ButtonPanel clickHandler={handleClick} />
    </main>
  );
};
export default Main;
