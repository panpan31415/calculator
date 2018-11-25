import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

import { calcOperator, valueOperator, numbers } from "./ButtonPanel";

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };
  setButtonStyle = () => {
    const activatedOpeartion =
      this.props.operation.type &&
      this.props.operation.type === this.props.name &&
      this.props.operation.activated;

    const className = [
      "component-button",
      calcOperator.includes(this.props.name) ? "calcOperator" : "",
      valueOperator.includes(this.props.name) ? "valueOperator" : "",
      numbers.includes(this.props.name) ? "numbers" : "",
      activatedOpeartion ? "calcOperator--active" : "",
    ];
    if (this.props.name === "0") {
      className.push("component-button--0");
    } else if (this.props.name === "←") {
      className.push("component-button--backspace");
    } else if (this.props.name === "=") {
      className.push("component-button--equal");
    } else if (this.props.name === ">") {
      const disabled = !this.props.hasNext ? "" : "history--disabled";
      className.push("history " + disabled);
    } else if (this.props.name === "<") {
      const disabled = !this.props.hasPrevious ? "" : "history--disabled";
      className.push("history " + disabled);
    } else if (this.props.name === "√") {
      className.push("squareRootOperator ");
    }

    return className;
  };

  render() {
    const className = this.setButtonStyle();
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
