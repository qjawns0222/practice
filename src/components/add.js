import { connect } from "react-redux";

import { add } from "../redux/action";
function Add({ inque }) {
  return <button onClick={click}>추가</button>;

  function click() {
    inque();
  }
}
const Addto = connect(
  (state) => {
    return {};
  },
  (dispatch) => {
    return {
      inque: () => {
        dispatch(add(5));
      },
    };
  }
)(Add);
export default Addto;
