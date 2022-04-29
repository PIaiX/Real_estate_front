import actionTypes from "./actionTypes";

export const setCurrentUser = (user) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setCurrentUser, payload: user });
  };
};

export const resetCurrentUser = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.resetCurrentUser });
  };
};

export default { setCurrentUser, resetCurrentUser };
