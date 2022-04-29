import actionTypes from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setCurrentUser:
      return action.payload;
    case actionTypes.resetCurrentUser:
      return null;
    default:
      return state;
  }
};

export default reducer;
