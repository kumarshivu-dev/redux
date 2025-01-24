let state = {
  name: "shivam",
  age: 22,
  post: 0,
};

let newState = state;

console.log(state === newState);

const increment = (state) => {
  return { ...state, post: state.post + 1 };
};

state = increment(state);

console.log(state === newState);

console.log("state: ", state);
console.log("new state: ", newState);
