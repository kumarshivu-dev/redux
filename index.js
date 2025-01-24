/* 
Mutation :- Changing or modifying an object/array directly, which affects the original data.
*/
// let state = {
//   name: "shivam",
//   age: 22,
//   post: 0,
// };

// let newState = state;

// console.log(state === newState);

// state.name = "shiva";
// newState.post++;

// console.log(state === newState);

// console.log("state: ", state);
// console.log("newState: ", newState);

/*
React/Redux expects immutability to track changes. If the original object is mutated:
1. React might not detect updates and re-render components incorrectly.
2. Redux will fail to track state changes for debugging and history.
*/

/*
Non-Mutation :- Creating a new object/array instead of directly modifying the existing one.
*/
let state = {
  name: "shivam",
  age: 22,
  post: 0,
};

let newState = state;

console.log(state === newState);

state = { ...state, name: "shiva" };
newState = { ...newState, post: newState.post + 1 };

console.log(state === newState);

console.log("state: ", state);
console.log("newState: ", newState);

/* 
Immutability ensures React and Redux can properly track changes, improving performance and predictability.
*/
