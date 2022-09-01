import axiosPrivate from "../API/axiosPrivate";
import { useDispatch} from "react-redux";
import apiRoutes from "../API/config/apiRoutes";
import {bindActionCreators} from "redux";
import currentUserActions from "../store/actions/currentUser";
import accessTokenActions from "../store/actions/accessToken";

const useRefreshToken = () => {

    const dispatch = useDispatch();
    const {setCurrentUser} = bindActionCreators(currentUserActions, dispatch)
    const {setToken} = bindActionCreators(accessTokenActions, dispatch);
    const refreshToken = async () => {
        try {
            const response = await axiosPrivate.post(apiRoutes.REFRESH);
            const {token, user} = response.data.body;

            setCurrentUser(user)
            setToken(token)
            return token;
        } catch (error) {
            console.log(error);
            return;
        }
    };

    return refreshToken;
};

export default useRefreshToken;