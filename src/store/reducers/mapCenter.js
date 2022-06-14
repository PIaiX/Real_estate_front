import actionTypes from "../actions/actionTypes";

const initialState = +localStorage.getItem('mapCenter');

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setMapCenter:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
