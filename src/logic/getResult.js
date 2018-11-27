import calculate from "./calculate";
import maxDigitsTrim from "./maxDigitsTrim";

import historyAssistant from "./historyAssistant";

/**
 *
 * @param  {{first,second,result,operation,displayValue,history,UI,maxDigits}} state object
 * @returns state new satet object
 * @description
 * By default, use first number , second Number and opeartion stored in state  to calculate a result.
 * If the first number is not set, first number will be privious calculation result, if privious calculation is empty, set first to "0"
 * If the second number is not set, use the one from previous calculation. if privious calcultion is empty, set second number to the value of first number.
 *
 */
const getResult = state => {
  let first = state.first;
  let second = state.second;
  let opeartionType = state.operation.type;
  let lastClaulation = historyAssistant(state.history).getLastClaulation();

  if (!first && lastClaulation) {
    first = lastClaulation.result;
  }
  if (!first && !lastClaulation) {
    first = "0";
  }

  if (!second && lastClaulation) {
    second = lastClaulation.second;
  }

  if (!opeartionType && lastClaulation) {
    opeartionType = lastClaulation.opeartionType;
  }

  if (!opeartionType && !lastClaulation) {
    return state;
  }

  if (first && opeartionType && !second) {
    second = state.first;
  }

  let result = calculate(first, second, opeartionType);
  let calculation = {
    first: first,
    second: second,
    opeartionType: opeartionType,
    result: result,
  };

  return {
    ...state,
    displayValue: {
      value: maxDigitsTrim(result, state.maxDigits),
      source: "result",
    },
    first: "",
    second: "",
    result: result,
    operation: {
      type: null,
      activated: false,
    },
    history: {
      currentIndex: state.history.calculations.length,
      calculations: [...state.history.calculations, calculation],
    },
  };
};

export default getResult;
