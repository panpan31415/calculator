import isNumber from "./isNumber";

/**
 * take a number and buttonName to make a new number
 *
 * @param {string} number
 * @param {string} buttonName
 */

const setNumber = (number, buttonName) => {
  let _number = number;
  if (_number) {
    _number = isNumber(_number) ? _number : "0";
  } else {
    _number = "0";
  }
  if (buttonName !== "." && _number !== "0") {
    _number += buttonName;
  } else if (buttonName !== "." && _number === "0") {
    _number = buttonName;
  } else if (buttonName === "." && _number !== "0") {
    _number.includes(".") ? (_number += "") : (_number += ".");
  } else {
    _number += buttonName;
  }

  return _number;
};

export default setNumber;
