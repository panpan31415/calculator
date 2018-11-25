import calculate from "./calculate";
import checkMaxDigits from "./checkMaxDigits";
import historyAssistant from "./historyAssistant";
const setCaculatorOperator = (obj, buttonName) => {
  try {
    console.log("first", obj.first, "second", "second");

    let first = historyAssistant(obj.history).getLastClaulation()
      ? historyAssistant(obj.history).getLastClaulation().result
      : 0;
    first = obj.first ? obj.first : first;

    let second = historyAssistant(obj.history).getLastClaulation()
      ? historyAssistant(obj.history).getLastClaulation().second
      : 0;
    second = obj.second ? obj.second : second;

    console.log("first", first, "second", second);
    if (buttonName === "√") {
      let result = calculate(first, "", "√");
      let calculation = {
        first: first,
        second: "",
        opeartionType: "√",
        result: result,
      };
      return {
        ...obj,
        displayValue: {
          value: checkMaxDigits(result, obj.maxDigits),
          source: "result",
        },
        result: result,
        first: "",
        second: "",
        history: {
          currentIndex: obj.history.calculations.length,
          calculations: [...obj.history.calculations, calculation],
        },
        operation: {
          type: buttonName,
          activated: false,
        },
      };
    }
    if (obj.operation.type && obj.second) {
      let result = calculate(first, second, obj.operation.type);
      let calculation = {
        first: first,
        second: second,
        opeartionType: obj.operation.type,
        result: result,
      };
      return {
        ...obj,
        displayValue: {
          value: checkMaxDigits(result, obj.maxDigits),
          source: "first",
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

    return {
      ...obj,
      first: first,
      operation: {
        type: buttonName,
        activated: true,
      },
    };
  } catch (err) {
    return {
      ...obj,
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
    };
  }
};

export default setCaculatorOperator;
