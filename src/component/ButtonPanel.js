import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  buttonsNames = [
    "AC",
    "+/-",
    "%",
    "÷",
    "←",
    "7",
    "8",
    "9",
    "x",
    "<",
    "4",
    "5",
    "6",
    "-",
    ">",
    "1",
    "2",
    "3",
    "+",
    "=",
    "0",
    ".",
    "√",
  ];
  renderButtons = () => {
    return this.buttonsNames.map(name => (
      <Button name={name} clickHandler={this.handleClick} key={name} />
    ));
  };
  render() {
    return <div className="component-button-panel">{this.renderButtons()}</div>;
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;
