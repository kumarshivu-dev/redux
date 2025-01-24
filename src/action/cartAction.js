export const ADD_ITEM_TO_CART = "cart/add";
export const REMOVE_ITEM_FROM_CART = "cart/remove";
export const UPDATE_ITEM_FROM_CART = "cart/update";
export const CLEAR_CART = "cart/clear";

export const addItemToCart = (product) => {
  return { type: ADD_ITEM_TO_CART, payload: product };
};

export const removeItemFromCart = (product) => {
  return { type: REMOVE_ITEM_FROM_CART, payload: product };
};

export const updateItemFromCart = (product) => {
  return { type: UPDATE_ITEM_FROM_CART, payload: product };
};

export const clearCart = () => {
  return { type: CLEAR_CART };
};
