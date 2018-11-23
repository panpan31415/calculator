import Big from "big.js";

import calcOperate from "./calcOperate";
import isNumber from "./isNumber";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   displayValue:String  the value displying on screen
 *   first:String         the number before opeartion sign
 *   second: String       the number after opeartion sign
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === "AC") {
    return {
      displayValue: 0,
      first: 0,
      second: 0,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        displayValue: null,
      };
    }
    return {
      next: buttonName,
      displayValue: null,
    };
  }

  if (buttonName === "%") {
    if (obj.operation && obj.next) {
      const displayValue = calcOperate(
        obj.displayValue,
        obj.next,
        obj.operation,
      );
      return {
        displayValue: Big(displayValue)
          .div(Big("100"))
          .toString(),
        next: null,
        operation: null,
      };
    }
    if (obj.next) {
      return {
        next: Big(obj.next)
          .div(Big("100"))
          .toString(),
      };
    }
    return {};
  }

  if (buttonName === ".") {
    if (obj.next) {
      // ignore a . if the next number already has one
      if (obj.next.includes(".")) {
        return {};
      }
      return { next: obj.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        displayValue: operate(obj.displayValue, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // '=' with no operation, nothing to do
      return {};
    }
  }

  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.displayValue) {
      return { displayValue: (-1 * parseFloat(obj.displayValue)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.displayValue) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (obj.operation) {
    return {
      displayValue: calcOperate(obj.displayValue, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // save the operation and shift 'next' into 'displayValue'
  return {
    displayValue: obj.next,
    next: null,
    operation: buttonName,
  };
}
