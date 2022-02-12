const ADD2 = "ADD2";
const SUB2 = "SUB2";

export function add2(index) {
  return {
    type: ADD2,
    index,
  };
}
export function subn2(index) {
  return {
    type: SUB2,
    index,
  };
}

export default function reducer(previousState = [], action) {
  if (action.type === ADD2) {
    previousState.push(action.index);
    return previousState;
  }
  if (action.type === SUB2) {
    return previousState.filter((p) => p !== action.index);
  }
  return previousState;
}
