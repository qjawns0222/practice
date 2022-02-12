import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import fileReducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  fileReducer,
  composeWithDevTools(applyMiddleware(thunk, promise))
);

export default store;
