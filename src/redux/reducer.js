import { combineReducers } from "redux";
import add1 from "./add1";
import add2 from "./add2";
const num = combineReducers({ add1, add2 });
export default num;
