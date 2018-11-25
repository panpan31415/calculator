import Big from "big.js";
import { calcOperator } from "../component/ButtonPanel";
export default function calculate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || "0");
  let result = "";

  if (operation === "+") {
    result = one.plus(two).toString();
  }
  if (operation === "-") {
    result = one.minus(two).toString();
  }
  if (operation === "x") {
    result = one.times(two).toString();
  }
  if (operation === "÷") {
    result = two.abs().gt("0") ? one.div(two).toString() : "Error";
  }
  if (operation === "√") {
    result = one.gte("0") ? one.sqrt().toString() : "Error";
  }

  if (!calcOperator.includes(operation)) {
    throw Error(`Unknown operation '${operation}'`);
  }
  console.log(one.toString(), two.toString(), operation);
  return result;
}
