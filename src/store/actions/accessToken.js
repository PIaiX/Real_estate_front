import actionTypes from "./actionTypes";

export const setToken = (token) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setToken, payload: token });
  };
};

export const resetToken = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.resetToken });
  };
};

export default { setToken, resetToken };
