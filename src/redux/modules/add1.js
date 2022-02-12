const ADD = "ADD";
const SUB = "SUB";

export function add(index) {
  return {
    type: ADD,
    index,
  };
}
export function subn(index) {
  return {
    type: SUB,
    index,
  };
}

export default function reducer(previousState = [], action) {
  if (action.type === ADD) {
    previousState.push(action.index);
    return previousState;
  }
  if (action.type === SUB) {
    return previousState.filter((p) => p !== action.index);
  }
  return previousState;
}
