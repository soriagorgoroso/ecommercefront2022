const actions = {
  show: (sessionData) => {
    return { type: "SHOW", payload: true };
  },
  hide: () => {
    return { type: "HIDE", payload: false };
  },
};

export default actions;
