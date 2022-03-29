function userReducer(user = null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;

    case "LOGOUT":
      return {};

    default:
      return user;
  }
}

export default userReducer;
