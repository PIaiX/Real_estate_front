import actionTypes from "./actionTypes";

export const setSelectedCity = (city) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.setSelectedCity, payload: city });
    };
};

export default { setSelectedCity };