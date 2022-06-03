import {combineReducers} from "redux";
import accessToken from "./accessToken";
import currentUser from "./currentUser";
import {useSelector} from "react-redux";

const reducers = combineReducers({
    accessToken,
    currentUser,
});

export function useCurrentUser() {
    return useSelector((state) => state.currentUser)
}

export function useAccessToken() {
    return useSelector((state) => state.accessToken)
}

export default reducers;
