import isNumber from "./isNumber";

/**
 * Given a  calculator data object and button name , return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   displayValue:String  the value displying on screen
 *   first:String         the number before opeartion sign
 *   second: String       the number after opeartion sign
 *   operation:String  +, -, etc.
 */
const takeInput = (obj, buttonName) => {
  if (isNumber(buttonName)) {
    return {
      ...obj,
      displayValue:
        obj.displayValue.trim() === "0"
          ? buttonName
          : obj.displayValue.trim() + buttonName,
    };
  }
  if (buttonName === "AC") {
    return {
      ...obj,
      displayValue: "0",
    };
  }
  if (buttonName === "." && !obj.displayValue.includes(".")) {
    return {
      ...obj,
      displayValue: obj.displayValue + ".",
    };
  }
};

export default takeInput;
