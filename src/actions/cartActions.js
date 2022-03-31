export const addToCart = (article) => {
  return { type: "ADD", payload: article };
};

export const deleteFromCart = () => {
  return { type: "DELETE" };
};
