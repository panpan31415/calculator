function setReset(state) {
  let reset = !(state.first && state.operation.type && state.second)
    ? "C"
    : "AC";
  return reset;
}
export default setReset;
