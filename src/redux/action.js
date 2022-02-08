export const ADD = "ADD";
export const SUB = "SUB";
export const ADD2 = "ADD2";
export const SUB2 = "SUB2";
export function add(index) {
  return {
    type: ADD,
    index,
  };
}
export function subn(index) {
  return {
    type: SUB,
    index,
  };
}
export function add2(index) {
  return {
    type: ADD2,
    index,
  };
}
export function subn2(index) {
  return {
    type: SUB2,
    index,
  };
}
