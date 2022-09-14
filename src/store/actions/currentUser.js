import actionTypes from "./actionTypes";

const setCurrentUser = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setCurrentUser, payload: user });
  };
};

const resetCurrentUser = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.resetCurrentUser });
  };
};

export default { setCurrentUser, resetCurrentUser };
