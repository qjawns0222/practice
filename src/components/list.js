import Liststore from "../hook/liststore";

export default function List() {
  const state = Liststore();

  return (
    <div>
      {state.add1.map((p) => (
        <li>{p}</li>
      ))}
    </div>
  );
}
