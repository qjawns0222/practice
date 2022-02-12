import { combineReducers } from "redux";
import add1 from "./add1";
import add2 from "./add2";
import user from "./user";
const num = combineReducers({ add1, add2, user });
export default num;
