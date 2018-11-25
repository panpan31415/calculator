// const history = {
//   history: {
//     calculations: [{ first: "", second: "", opeartionType: "", result: "" }],
//     currentIndex: -1,
//   },
// };

const historyAssistant = history => {
  const _history = history;
  const length = _history.calculations.length;
  const getLastClaulation = () => {
    return _history.calculations[length - 1];
  };

  const hasNext = currentIndex => {
    return currentIndex < length - 1;
  };

  const hasPrevious = currentIndex => {
    return currentIndex > 0;
  };

  return {
    getLastClaulation: getLastClaulation,
    hasNext: hasNext,
    hasPrevious: hasPrevious,
  };
};

export default historyAssistant;
