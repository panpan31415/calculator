import Big from "big.js";

export default function calculate(numberOne, numberTwo, operation) {
  const one = Big(numberOne || "0");
  const two = Big(numberTwo || "0");
  console.log(one.toString(), two.toString(), operation);
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    return one.div(two).toString();
  }
  if (operation === "√") {
    return one.sqrt().toString();
  }
  throw Error(`Unknown operation '${operation}'`);
}
