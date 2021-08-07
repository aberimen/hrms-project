import { setAuthorizationToken } from "../../api/authApi";
import { LOGIN_SUCCESS, UPDATE_SUCCESS } from "../constants/UserActionTypes";

const user = JSON.parse(localStorage.getItem('user'));

if(user){
    console.log(user);
    setAuthorizationToken(user.token);
}
const defaultState = user || {
    isLoggedIn: false,
    user: {},
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                ...action.payload
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                ...action.payload

            };
        default:
            return state;
    }
}

export default authReducer;

