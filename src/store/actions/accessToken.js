import actionTypes from "./actionTypes";

const setToken = (token) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setToken, payload: token });
  };
};

const resetToken = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.resetToken });
  };
};

export default { setToken, resetToken };
