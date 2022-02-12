const DATA = "DATA";
const GET_USERS = "PRACTICE/user/GET_USERS";
const GET_USERS_PENDING = "PRACTICE/user/GET_USERS_PENDING";
const GET_USERS_FULDILLED = "PRACTICE/user/GET_USERS_FULFILLED";

export function indata(data) {
  return {
    type: DATA,
    data,
  };
}
export function adduser() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await [
        { name: "mark1", id: 1 },
        { name: "mark2", id: 2 },
        { name: "mark3", id: 3 },
        { name: "mark4", id: 4 },
        { name: "mark5", id: 5 },
      ];
      return res;
    },
  };
}

export default function reducer(state = { data: [] }, action) {
  if (action.type === DATA) {
    return { ...state, data: action.data };
  }
  if (action.type === GET_USERS_PENDING) {
    console.log(GET_USERS_PENDING);
    return { ...state };
  }
  if (action.type === GET_USERS_FULDILLED) {
    return { ...state, data: action.payload };
  }
  return state;
}
