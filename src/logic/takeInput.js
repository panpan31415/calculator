import isNumber from "./isNumber";
import { calcOperator, valueOperator } from "./../component/ButtonPanel";
import valueOpearte from "./valueOperate";
import setCaculatorOperator from "./setCaculatorOperator";
import getResult from "./getResult";

import getHistory from "./getHistory";
import setNumber from "./setNumber";

/**
 *
 * @param {{first,second,result,operation,displayValue,history,UI,maxDigits}} state
 * @param {string} buttonName
 */
const takeInput = (state, buttonName) => {
  //set calcOperator should be first check, - is also considered a number
  if (calcOperator.includes(buttonName)) {
    return setCaculatorOperator(state, buttonName);
  } else if (isNumber(buttonName)) {
    return setNumber(state, buttonName);
  } else if (valueOperator.includes(buttonName)) {
    return valueOpearte(state, buttonName);
  } else if (buttonName === "<" || buttonName === ">") {
    return getHistory(state, buttonName);
  } else if (buttonName === "=") {
    return getResult(state);
  } else {
    throw Error("unknown button name: " + buttonName);
  }
};

export default takeInput;
