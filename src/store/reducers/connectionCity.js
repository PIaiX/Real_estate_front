import actionTypes from "../actions/actionTypes";

const initialState = 'Москва';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setConnectionCity:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
