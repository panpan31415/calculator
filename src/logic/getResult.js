import calculate from "./calculate";
import checkMaxDigits from "./checkMaxDigits";
// import Big from "big.js";
import historyAssistant from "./historyAssistant";

const getResult = obj => {
  let first = obj.first;
  let second = obj.second;
  let opeartionType = obj.operation.type;
  let lastClaulation = historyAssistant(obj.history).getLastClaulation();
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
    return obj;
  }

  if (first && opeartionType && !second) {
    second = obj.first;
  }

  try {
    let result = calculate(first, second, opeartionType);
    let calculation = {
      first: first,
      second: second,
      opeartionType: opeartionType,
      result: result,
    };
    return {
      ...obj,
      displayValue: {
        value: checkMaxDigits(result, obj.maxDigits),
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
        currentIndex: obj.history.calculations.length,
        calculations: [...obj.history.calculations, calculation],
      },
    };
  } catch (err) {
    returnError(obj);
  }
};

export default getResult;

const returnError = obj => {
  return {
    ...obj,
    displayValue: "Error",
    result: "Error",
    history: {
      calculations: [
        ...obj.history.calculations,
        {
          first: obj.first,
          second: obj.second,
          opeartionType: obj.operation.type,
          result: "Error",
        },
      ],
      currentIndex: obj.history.calculations.length,
    },
  };
};
