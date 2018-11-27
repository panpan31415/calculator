import historyAssistant from "./historyAssistant";
import maxDigitsTrim from "./maxDigitsTrim";

/**
 *
 * @param {{first,second,result,operation,displayValue,history,UI,maxDigits}} state
 * @param {string} buttonName "<" or ">"
 * @returns new state
 */

const getHistory = (state, buttonName) => {
  const { history } = state;
  const hasPrevious = historyAssistant(history).hasPrevious();
  const hasNext = historyAssistant(history).hasNext();
  const { calculations, currentIndex } = history;
  let delta;
  if (buttonName === ">" && hasNext) {
    delta = 1;
  } else if (buttonName === "<" && hasPrevious) {
    delta = -1;
  } else {
    return state;
  }
  const result = calculations[currentIndex + delta].result;
  return {
    ...state,
    displayValue: {
      ...state.displayValue,
      value: maxDigitsTrim(result, state.maxDigits),
    },
    [state.displayValue.source]: result,
    history: {
      ...state.history,
      currentIndex: currentIndex + delta,
    },
  };
};

export default getHistory;
