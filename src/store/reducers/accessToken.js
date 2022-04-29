import actionTypes from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setToken:
      return action.payload;
    case actionTypes.resetToken:
      return null;
    default:
      return state;
  }
};

export default reducer;
