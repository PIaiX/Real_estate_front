import actionTypes from './actionTypes'

const setConversationCount = (count) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.setConversationsCount, payload: count });
    };
};

export default { setConversationCount }