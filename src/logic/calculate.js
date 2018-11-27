import Big from "big.js";
import { calcOperator } from "../component/ButtonPanel";
import isNumber from "./isNumber";

/**
 *
 * @param {string} first first input number
 * @param {string} second second input number
 * @param {string} operationType calculation operator: + - * ..
 * @returns {string} calculated result
 */

export default function calculate(first, second, operationType) {
  let result = "";
  if (!isNumber(first) || (!isNumber(second) && second)) {
    result = "Error";
  }
  const one = Big(first || "0");
  const two = Big(second || "0");

  try {
    if (operationType === "+") {
      result = one.plus(two).toString();
    } else if (operationType === "-") {
      result = one.minus(two).toString();
    } else if (operationType === "x") {
      result = one.times(two).toString();
    } else if (operationType === "÷") {
      result = two.abs().gt("0") ? one.div(two).toString() : "Error";
    } else if (operationType === "√") {
      result = one.gte("0") ? one.sqrt().toString() : "Error";
    } else if (!calcOperator.includes(operationType)) {
      throw Error(`Unknown operationType '${operationType}'`);
    }
  } catch (e) {
    result = "Error";
    console.log(e);
  }
  return result;
}
