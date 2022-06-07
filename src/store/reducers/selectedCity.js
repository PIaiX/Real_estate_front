import actionTypes from "../actions/actionTypes";

const initialState = localStorage.getItem('userCity');

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setSelectedCity:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
