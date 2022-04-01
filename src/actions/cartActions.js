export const addToCart = (article) => {
  return { type: "ADD", payload: article };
};

export const deleteFromCart = (article) => {
  return { type: "DELETE", payload: article };
};
