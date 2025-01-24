/* Action-Type */
const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREMENT_BY = "post/incrementBy";
const DECREMENT_BY = "post/decrementBy";

/* Initial State */
let state = {
  name: "shivam",
  age: 22,
  post: 0,
};

/* Reducer */
const reducer = (state, action) => {
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

state = reducer(state, { type: INCREMENT });
console.log("state: ", state);

state = reducer(state, { type: DECREMENT });
console.log("state: ", state);

state = reducer(state, { type: INCREMENT_BY, payload: 5 });
console.log("state: ", state);

state = reducer(state, { type: DECREMENT_BY, payload: 10 });
console.log("state: ", state);
