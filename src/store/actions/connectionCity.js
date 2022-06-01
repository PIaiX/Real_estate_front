import actionTypes from "./actionTypes";

export const setConnectionCity = (coords) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.setConnectionCity, payload: coords });
    };
};

export default { setConnectionCity };