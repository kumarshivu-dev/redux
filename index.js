import { createStore } from "redux";

/* Action-Type */
const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";

/* Initial State */
let initialState = {
  name: "shivam",
  age: 22,
  post: 0,
};

/* Reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        post: state.post + 1,
      };
    case DECREMENT:
      return {
        ...state,
        post: state.post - 1,
      };
    case INCREMENT_BY:
      return {
        ...state,
        post: state.post + action.payload,
      };
    case DECREMENT_BY:
      return {
        ...state,
        post: state.post - action.payload,
      };
    default:
      return state;
  }
};

/* redux-store */
const store = createStore(reducer);

console.log("store: ", store);

store.subscribe(() => {
  console.log("store: ", store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREMENT });
store.dispatch({ type: INCREMENT_BY, payload: 10 });
store.dispatch({ type: DECREMENT_BY, payload: 5 });
