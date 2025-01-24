import { createStore, combineReducers } from "redux";
import {
  addItemToCart,
  clearCart,
  removeItemFromCart,
  updateItemFromCart,
} from "./action/cartAction";
import productReducer from "./reducer/productReducer";
import cartReducer from "./reducer/cartReducer";

const reducer = combineReducers({
  productReducer,
  cartReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log("store: ", store);

store.dispatch(addItemToCart({ id: 1, quantity: 1 }));
store.dispatch(addItemToCart({ id: 3, quantity: 1 }));
store.dispatch(addItemToCart({ id: 5, quantity: 1 }));

store.dispatch(removeItemFromCart({ id: 1 }));

store.dispatch(updateItemFromCart({ id: 3, quantity: 2 }));

store.dispatch(clearCart());
