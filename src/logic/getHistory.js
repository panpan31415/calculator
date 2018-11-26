import historyAssistant from "./historyAssistant";
import checkMaxDigits from "./checkMaxDigits";
const getHistory = (obj, buttonName) => {
  const { history } = obj;
  const hasPrevious = historyAssistant(history).hasPrevious();
  const hasNext = historyAssistant(history).hasNext();
  const { calculations, currentIndex } = history;
  let delta;
  if (buttonName === ">" && hasNext) {
    delta = 1;
  } else if (buttonName === "<" && hasPrevious) {
    delta = -1;
  } else {
    return obj;
  }
  const result = calculations[currentIndex + delta].result;
  return {
    ...obj,
    displayValue: {
      ...obj.displayValue,
      value: checkMaxDigits(result),
    },
    [obj.displayValue.source]: result,
    history: {
      ...obj.history,
      currentIndex: currentIndex + delta,
    },
  };
};

export default getHistory;
