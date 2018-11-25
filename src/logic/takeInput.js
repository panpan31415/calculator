import isNumber from "./isNumber";
import { calcOperator, valueOperator } from "./../component/ButtonPanel";
import valueOpearte from "./valueOperate";
import setCaculatorOperator from "./setCaculatorOperator";
import getResult from "./getResult";
import checkMaxDigits from "./checkMaxDigits";
import setNumber from "./setNumber";
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
  if (calcOperator.includes(buttonName)) {
    return setCaculatorOperator(obj, buttonName);
  }

  if (isNumber(buttonName)) {
    let source = "";
    let value = "";
    if (!obj.operation.type) {
      value = setNumber(obj.first, buttonName);
      source = "first";
    } else {
      value = setNumber(obj.second, buttonName);
      source = "second";
    }

    return {
      ...obj,
      displayValue: {
        value: checkMaxDigits(value, obj.maxDigits),
        source: source,
      },
      [source]: value,
      operation: {
        ...obj.operation,
        activated: false,
      },
    };
  }
  if (isNumber(buttonName) && obj.displayValue.source === "result") {
    let value = setNumber("", buttonName);

    return {
      ...obj,
      displayValue: {
        value: checkMaxDigits(value, obj.maxDigits),
        source: "first",
      },
      first: value,
    };
  }

  if (valueOperator.includes(buttonName)) {
    return valueOpearte(obj, buttonName);
  }

  if (buttonName === "=") {
    return getResult(obj);
  }
};

export default takeInput;
