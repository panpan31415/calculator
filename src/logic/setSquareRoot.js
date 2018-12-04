import calculate from "./calculate";
import maxDigitsTrim from "./maxDigitsTrim";
/**
 *
 * @param {{first,second,result,operation,displayValue,history,UI,maxDigits}} state
 * @param {string} first specified "first" number to calculate with "√"
 */
const setSquareRoot = (state, first) => {
  let result = calculate(first, "", "√");
  let calculation = {
    first: first,
    second: "",
    opeartionType: "√",
    result: result,
  };
  return {
    ...state,
    displayValue: {
      value: maxDigitsTrim(result, state.maxDigits),
      source: "result",
    },
    result: result,
    first: "",
    second: "",
    history: {
      currentIndex: state.history.calculations.length,
      calculations: [...state.history.calculations, calculation],
    },
    operation: {
      type: "√",
      activated: false,
    },
  };
};
export default setSquareRoot;
