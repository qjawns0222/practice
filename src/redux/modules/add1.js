import { handleActions } from "redux-actions";
import createAction from "redux-actions/lib/createAction";

export const ADD = createAction("ADD", (text) => text);
export const SUB = createAction("SUB", (text) => text);
const reducer = handleActions(
  {
    ADD: (previousState, action) => {
      previousState.push(action.payload);
      return previousState;
    },
    SUB: (previousState, action) => {
      return previousState.filter((p) => p !== action.payload);
    },
  },
  []
);
console.log(ADD(10));

export default reducer;
