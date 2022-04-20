import { combineReducers } from "redux";
import accessToken from "./accessToken";
import currentUser from "./currentUser";

const reducers = combineReducers({
  accessToken,
  currentUser,
});

export default reducers;
