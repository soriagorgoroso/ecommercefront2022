const actions = {
  login: (sessionData) => {
    return { type: "LOGIN", payload: sessionData };
  },
  logout: (sessionData) => {
    return { type: "LOGOUT", payload: sessionData };
  },
};

export default actions;
