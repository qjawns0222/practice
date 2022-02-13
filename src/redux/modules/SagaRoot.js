import { all } from "redux-saga/effects";
import { UseSaga } from "./user";
export default function* rootSage() {
  yield all([UseSaga()]);
}
