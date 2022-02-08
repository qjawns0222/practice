import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { add, subn, add2, subn2 } from "./redux/action";
const sub = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(add(5.1));
store.dispatch(add2(5.1));
store.dispatch(add(5.2));
store.dispatch(add2(5.2));
store.dispatch(add(5.3));
store.dispatch(add2(5.3));
store.dispatch(subn(5.1));
store.dispatch(subn2(5.1));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
