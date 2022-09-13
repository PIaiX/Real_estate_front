import actionTypes from "../actions/actionTypes";

const initialState = {
    variant: null,
    isShow: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.setAlert:
            return action.payload
        case actionTypes.resetAlert:
            return initialState
        default:
            return state
    }
}

export default reducer