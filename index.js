let state = {
  name: "shivam",
  age: 22,
  post: 0,
};

let newState = state;

console.log(state === newState);

const increment = () => {
  /* mutation */
  //   state.name = "shiva";
  //   newState.post = newState.post + 1;

  /* non-mutation */
  state = { ...state, name: "shiva" };
  newState = { ...newState, post: newState.post + 1 };
};

increment();

console.log(state === newState);

console.log("state: ", state);
console.log("new state: ", newState);
