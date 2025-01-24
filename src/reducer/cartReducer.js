import {
  ADD_ITEM_TO_CART,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
  UPDATE_ITEM_FROM_CART,
} from "../action/cartAction";

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, cartItems: [...state?.cartItems, action?.payload] };
    case REMOVE_ITEM_FROM_CART:
      const filteredCart = state?.cartItems?.filter(
        (item) => item?.id !== action?.payload?.id
      );
      return { ...state, cartItems: filteredCart };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case UPDATE_ITEM_FROM_CART:
      const index = state?.cartItems?.findIndex(
        (item) => item?.id === action?.payload?.id
      );

      if (index !== -1) {
        const updatedCart = [...state?.cartItems];
        updatedCart[index] = action?.payload;
        return { ...state, cartItems: updatedCart };
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
