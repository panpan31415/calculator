import Big from "big.js";

/**
 *
 * @param {string} value
 * @param {number} maxDigits
 */

const maxDigitsTrim = (value, maxDigits) => {
  let _value = value;
  if (value.length > maxDigits) {
    _value = Big(value).toPrecision(maxDigits);
  }
  return _value;
};
export default maxDigitsTrim;
