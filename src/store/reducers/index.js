import {combineReducers} from "redux";
import accessToken from "./accessToken";
import currentUser from "./currentUser";
import selectedCity from './selectedCity';
import mapCenter from './mapCenter';
import {useSelector} from "react-redux";
import alert from './alert';

const reducers = combineReducers({
    accessToken,
    currentUser,
    selectedCity,
    mapCenter,
    alert,
});

export function useCurrentUser() {
    return useSelector((state) => state.currentUser)
}

export function useAccessToken() {
    return useSelector((state) => state.accessToken)
}

export default reducers;
