import ActionTypes from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setToken:
      return action.payload;
    case ActionTypes.resetToken:
      return null;
    default:
      return state;
  }
};

export default reducer;
