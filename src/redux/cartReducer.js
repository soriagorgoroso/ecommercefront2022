function cartReducer(cart = [], action) {
  switch (action.type) {
    case "ADD":
      if (cart.some((article) => article.name === action.payload.name)) {
        return cart.map((article) => {
          if (article.name === action.payload.name) {
            return {
              ...article,
              quantity: article.quantity + action.payload.quantity,
            };
          }
          return article;
        });
      }
      return [...cart, action.payload];

    case "DELETE":
      cart.filter((article) => article.name !== action.payload.name);
      return [cart];

    default:
      return cart;
  }
}

export default cartReducer;