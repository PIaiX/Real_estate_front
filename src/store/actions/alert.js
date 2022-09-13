import actionTypes from "./actionTypes";

export const setAlert = (variant, isShow, message) => {
    return (dispatch) => {
        dispatch({type: actionTypes.setAlert, payload: {variant, isShow, message}})
    }
}

export const resetAlert = () => {
    return (dispatch) => {
        dispatch({type: actionTypes.resetAlert})
    }
}

export default { setAlert, resetAlert }