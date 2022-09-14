import actionTypes from "./actionTypes";

const setSelectedCity = (city) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.setSelectedCity, payload: city });
    };
};

export default { setSelectedCity };