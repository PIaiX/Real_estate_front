import actionTypes from "./actionTypes";

export const setMapCenter = (coords) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.setMapCenter, payload: coords });
    };
};

export default { setMapCenter };