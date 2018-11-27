/**
 * @param {{calculations:[],currentIndex:number}} history
 */

const historyAssistant = history => {
  const length = history.calculations.length;
  const currentIndex = history.currentIndex;
  const getLastClaulation = () => {
    return history.calculations[length - 1];
  };

  const hasNext = () => {
    return currentIndex < length - 1;
  };

  const hasPrevious = () => {
    return currentIndex > 0;
  };
  return {
    getLastClaulation: getLastClaulation,
    hasNext: hasNext,
    hasPrevious: hasPrevious,
  };
};

export default historyAssistant;
