import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import fileReducer from "./modules/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSage from "./modules/SagaRoot";
const Saga = createSagaMiddleware();
const store = createStore(
  fileReducer,
  composeWithDevTools(applyMiddleware(thunk, promise, Saga))
);
Saga.run(rootSage);
export default store;
