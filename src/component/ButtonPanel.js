import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export const historyOperator = ["<", ">"];
export const calcOperator = ["+", "-", "x", "÷", "√"];
export const valueOperator = ["←", "+/-", "%", "AC", "C"];
export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

class ButtonPanel extends React.Component {
  buttonsNames = [
    "+/-",
    "%",
    "←",
    "7",
    "8",
    "9",
    "<",
    ">",
    "4",
    "5",
    "6",
    "+",
    "-",
    "1",
    "2",
    "3",
    "x",
    "÷",
    "0",
    ".",
    "√",
    "=",
  ];

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  renderButtons = () => {
    return [this.props.reset, ...this.buttonsNames].map(name => {
      let hasPrevious = null;
      let hasNext = null;
      if (name === "<") {
        hasPrevious = this.props.hasPrevious;
      } else if (name === ">") {
        hasNext = this.props.hasNext;
      }
      return (
        <Button
          name={name}
          clickHandler={this.handleClick}
          key={name}
          operation={this.props.operation}
          hasPrevious={hasPrevious}
          hasNext={hasNext}
        />
      );
    });
  };
  render() {
    return <div className="component-button-panel">{this.renderButtons()}</div>;
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;
