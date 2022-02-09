import { connect } from "react-redux";

function List({ state }) {
  console.log(state.add1);
  return <div>{state.add1}</div>;
}
const Listo = connect(
  (state) => {
    return { state };
  },
  (dispatch) => {
    return {};
  }
)(List);
export default Listo;
