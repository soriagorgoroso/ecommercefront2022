function userReducer(modalW = true, action) {
  switch (action.type) {
    case "SHOW":
      return true;

    case "HIDE":
      return false;

    default:
      return modalW;
  }
}

export default userReducer;
