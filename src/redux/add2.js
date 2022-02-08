import { ADD2, SUB2 } from "./action";
export default function add2(previousState = [], action) {
  if (action.type === ADD2) {
    previousState.push(action.index);
    return previousState;
  }
  if (action.type === SUB2) {
    return previousState.filter((p) => p !== action.index);
  }
  return previousState;
}
