import Big from "big.js";
import checkMaxDigits from "./checkMaxDigits";
import isNumber from "./isNumber";
const valueOpearte = (obj, buttonName) => {
  if (buttonName === "AC") {
    return {
      ...obj,
      displayValue: {
        value: "0",
        source: null,
      },
      first: "",
      second: "",
      result: "0",
      operation: {
        type: null,
        activated: false,
      },
      history: {
        calculations: [],
        currentIndex: -1,
      },
    };
  }

  let source = obj.displayValue.source;
  let value = obj[source];
  value = isNumber(value) ? value : "0";

  switch (buttonName) {
    case "←": {
      value = checkMaxDigits(value, obj.maxDigits);

      if (value.length > 1) {
        value = value.slice(0, value.length - 1);
      } else {
        value = "0";
      }
      break;
    }
    case "+/-": {
      if (value.slice(0, 1) === "-") {
        value = value.slice(1, value.length);
      } else {
        value = "-" + value;
      }
      break;
    }
    case "%": {
      value = new Big(value).div(100).toString();
      break;
    }
    case "C": {
      value = "0";
      break;
    }
    default: {
      break;
    }
  }

  return {
    ...obj,
    displayValue: {
      ...obj.displayValue,
      value: checkMaxDigits(value, obj.maxDigits),
    },
    [obj.displayValue.source]: checkMaxDigits(value, obj.maxDigits),
  };
};
export default valueOpearte;
