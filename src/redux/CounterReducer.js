function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return ++action.payload;
    case "DECREMENT":
      return --action.payload;
    // case "ADD":
    //   return action.payload;
    default:
      return state;
  }
}
export default counter;
