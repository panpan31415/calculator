import Big from "big.js";

const checkMaxDigits = (value, maxDigits) => {
  let _value = value;
  if (value.length > maxDigits) {
    _value = Big(value).toPrecision(maxDigits);
  }
  return _value;
};
export default checkMaxDigits;
