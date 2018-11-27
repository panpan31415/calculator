import calculate from "./calculate";
import maxDigitsTrim from "./maxDigitsTrim";
import historyAssistant from "./historyAssistant";
import setSquareRoor from "./setSquareRoot";

/**
 *
 * @param {{first,second,result,operation,displayValue,history,UI,maxDigits}} state
 * @param {string} buttonName +,-,* ... including "√"
 * @description
 *  before setting calculation, check history, if there are any history , use the lastest calculation's result as first number, otherwise first number is set to "0".
 *  then check if user have typed any number before setting calculation, if yes update first unmber to user's input.
 * if second number is not set, set to privious one or 0 if privious one is also not set, if user has input, update it with use's input
 *
 */

const setCaculatorOperator = (state, buttonName) => {
  let first = historyAssistant(state.history).getLastClaulation()
    ? historyAssistant(state.history).getLastClaulation().result
    : 0;
  first = state.first ? state.first : first;

  let second = historyAssistant(state.history).getLastClaulation()
    ? historyAssistant(state.history).getLastClaulation().second
    : 0;
  second = state.second ? state.second : second;

  // "√" should always be checked first, because it doesn't need a second number
  if (buttonName === "√") {
    return setSquareRoor(state, first);
  }

  // if opearation type and second number is already set, give result directly without press "="
  if (state.operation.type && state.second) {
    let result = calculate(first, second, state.operation.type);
    let calculation = {
      first: first,
      second: second,
      opeartionType: state.operation.type,
      result: result,
    };
    return {
      ...state,
      displayValue: {
        value: maxDigitsTrim(result, state.maxDigits),
        source: "first",
      },
      result: result,
      first: result,
      second: "",
      history: {
        currentIndex: state.history.calculations.length,
        calculations: [...state.history.calculations, calculation],
      },
      operation: {
        type: buttonName,
        activated: true,
      },
    };
  }
  // by defalut set display value to be the first value and set the operation type to current pressed one and set style to activated
  return {
    ...state,
    displayValue: {
      value: maxDigitsTrim(first, state.maxDigits),
      source: "first",
    },
    first: first,
    operation: {
      type: buttonName,
      activated: true,
    },
  };
};

export default setCaculatorOperator;
