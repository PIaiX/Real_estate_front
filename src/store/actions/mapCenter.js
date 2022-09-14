import actionTypes from "./actionTypes";

const setMapCenter = (coords) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.setMapCenter, payload: coords });
    };
};

export default { setMapCenter };