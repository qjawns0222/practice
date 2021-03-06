import Liststore from "../hook/liststore";
import addstore from "../hook/addstore";
import { SagaUserStart } from "../redux/modules/user";
import { useEffect } from "react";

export default function List() {
  const state = Liststore();
  const dispatch = addstore();
  useEffect(() => {
    dispatch(SagaUserStart());
  }, [dispatch]);

  return (
    <div>
      {state.user.data.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </div>
  );
}
