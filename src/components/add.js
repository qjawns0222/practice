import addstore from "../hook/addstore";
import { ADD } from "../redux/modules/add1";
export default function Add() {
  const dispatch = addstore();
  return <button onClick={click}>추가</button>;

  function click() {
    dispatch(ADD(5));
  }
}
