import { LOGIN_SUCCESS } from "../constants/UserActionTypes";

const defaultState = {
    isLoggedIn: false,
    user: {},
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isLoggedIn: true,
                user: action.payload
            };
        default:
            return state;
    }
}

export default authReducer;

