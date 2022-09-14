import actionTypes from "./actionTypes";

const setAlert = (variant, isShow, message) => {
    return (dispatch) => {
        dispatch({type: actionTypes.setAlert, payload: {variant, isShow, message}})
    }
}

const resetAlert = () => {
    return (dispatch) => {
        dispatch({type: actionTypes.resetAlert})
    }
}

export default { setAlert, resetAlert }