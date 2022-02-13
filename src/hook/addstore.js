import { useContext } from "react";
import ReduxContext from "../context/ReduxContext";
export default function Liststore() {
  const store = useContext(ReduxContext);

  return store.dispatch;
}
