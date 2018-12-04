export const initialLogicState = {
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
  maxDigits: 10,
  history: {
    calculations: [],
    currentIndex: -1,
  },
  reset: "AC", // "AC" : reset all "C": clear current caculation
};

export const initialUIstate = {
  UI: {
    display: true,
    maxmize: true,
    settings: false,
    // percentage: true, I forget what it is used for :(
  },
};

export default {
  ...initialLogicState,
  ...initialUIstate,
};
