import { useContext } from "react";
import ReduxContext from "../context/ReduxContext";
export default function Liststore() {
  const store = useContext(ReduxContext);
  console.log("addstore");
  return store.dispatch;
}
