import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export const historyOperator = ["<", ">"];
export const calcOperator = ["+", "-", "x", "÷", "√"];
export const valueOperator = ["←", "+/-", "%", "AC", "C"];
export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  buttonsNames = [
    "AC",
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
  renderButtons = () => {
    return this.buttonsNames.map(name => {
      let button = (
        <Button
          name={name}
          clickHandler={this.handleClick}
          key={name}
          operation={this.props.operation}
        />
      );

      if (name === "<") {
        button = (
          <Button
            name={name}
            clickHandler={this.handleClick}
            key={name}
            operation={this.props.operation}
            hasPrevious={this.props.hasPrevious}
          />
        );
      }
      if (name === ">") {
        button = (
          <Button
            name={name}
            clickHandler={this.handleClick}
            key={name}
            operation={this.props.operation}
            hasNext={this.props.hasNext}
          />
        );
      }

      return button;
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
