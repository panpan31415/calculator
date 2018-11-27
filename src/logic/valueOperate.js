import Big from "big.js";
import maxDigitsTrim from "./maxDigitsTrim";
import isNumber from "./isNumber";
const valueOpearte = (state, buttonName) => {
  if (buttonName === "AC") {
    return {
      ...state,
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

  let source = state.displayValue.source;
  let value = state[source];
  value = isNumber(value) ? value : "0";

  switch (buttonName) {
    case "←": {
      value = maxDigitsTrim(value, state.maxDigits);

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
    ...state,
    displayValue: {
      ...state.displayValue,
      value: maxDigitsTrim(value, state.maxDigits),
    },
    [state.displayValue.source === "result"
      ? "first"
      : state.displayValue.source]: value,
    [state.displayValue.source]: value,
  };
};
export default valueOpearte;
