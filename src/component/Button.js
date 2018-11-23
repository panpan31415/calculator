import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  orangeButtons = ["←", "+", "-", "x", "÷", "<", ">", "=", "√"];
  render() {
    const className = [
      "component-button",
      this.orangeButtons.includes(this.props.name) ? "orange" : "",
    ];
    if (this.props.name === "0") {
      className.push("component-button--0");
    } else if (this.props.name === "=") {
      className.push("component-button--equals");
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
