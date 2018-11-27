import historyAssistant from "./historyAssistant";
import maxDigitsTrim from "./maxDigitsTrim";
import combineNumber from "./combineNumber";
const setNumber = (obj, buttonName) => {
  let source = "";
  let value = "";
  let opeartionType = historyAssistant(obj.history).getLastClaulation()
    ? historyAssistant(obj.history).getLastClaulation().opeartionType
    : "";
  opeartionType = obj.operation.type ? obj.operation.type : "";

  if (obj.displayValue.source === "result") {
    value = combineNumber("", buttonName);
    source = "first";
  } else if (!opeartionType) {
    value = combineNumber(obj.first, buttonName);
    source = "first";
  } else {
    value = combineNumber(obj.second, buttonName);
    source = "second";
  }

  return {
    ...obj,
    displayValue: {
      value: maxDigitsTrim(value, obj.maxDigits),
      source: source,
    },
    [source]: value,
    operation: {
      ...obj.operation,
      activated: false,
    },
  };
};
export default setNumber;
