const actions = {
  add: (article) => {
    return { type: "ADD", payload: article };
  },

  delete: () => {
    return { type: "DELETE" };
  },
};

export default actions;
