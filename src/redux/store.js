import { createStore } from "redux";
import fileReducer from "./reducer";

const store = createStore(fileReducer);

export default store;
