import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  calcOperator = ["+", "-", "x", "÷", "=", "√"];
  resultOperator = ["←", "<", ">", "+/-", "%", "AC"];
  render() {
    const className = [
      "component-button",
      this.calcOperator.includes(this.props.name) ? "calcOperator" : "",
      this.resultOperator.includes(this.props.name) ? "resultOperator" : "",
    ];
    if (this.props.name === "0") {
      className.push("component-button--0");
    } else if (this.props.name === "←") {
      className.push("component-button--backspace");
    }

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>
          <span>{this.props.name}</span>
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
export default Button;
