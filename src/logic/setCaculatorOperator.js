import calculate from "./calculate";
import checkMaxDigits from "./checkMaxDigits";
const setCaculatorOperator = (obj, buttonName) => {
  if (obj.operation.type && obj.second) {
    let result = calculate(obj.first, obj.second, obj.operation.type);
    let calculation = {
      first: obj.first,
      second: obj.second,
      opeartionType: obj.operation.type,
      result: result,
    };
    return {
      ...obj,
      displayValue: {
        value: checkMaxDigits(result),
        source: "result",
      },
      result: result,
      first: result,
      second: "",
      history: {
        currentIndex: obj.history.calculations.length,
        calculations: [...obj.history.calculations, calculation],
      },
      operation: {
        type: buttonName,
        activated: true,
      },
    };
  }

  if (!obj.first) {
    return {
      ...obj,
      first: obj.result,
      operation: {
        type: buttonName,
        activated: true,
      },
    };
  }

  return {
    ...obj,
    operation: {
      type: buttonName,
      activated: true,
    },
  };
};

export default setCaculatorOperator;
