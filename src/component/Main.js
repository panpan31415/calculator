import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./Main.css";
const Main = ({
  displayValue,
  handleClick,
  maxmize,
  operation,
  hasNext,
  hasPrevious,
  getNextHistory,
  getPreviousHistory,
  reset,
}) => {
  return (
    <main
      className="main--front"
      style={{ display: `${maxmize ? "grid" : "none"}` }}
    >
      <Display displayValue={displayValue} />
      <ButtonPanel
        clickHandler={handleClick}
        operation={operation}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        getNextHistory={getNextHistory}
        getPreviousHistory={getPreviousHistory}
        reset={reset}
      />
    </main>
  );
};
export default Main;
