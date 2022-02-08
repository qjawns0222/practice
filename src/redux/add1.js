import { ADD, SUB } from "./action";
export default function add1(previousState = [], action) {
  if (action.type === ADD) {
    previousState.push(action.index);
    return previousState;
  }
  if (action.type === SUB) {
    return previousState.filter((p) => p !== action.index);
  }
  return previousState;
}
