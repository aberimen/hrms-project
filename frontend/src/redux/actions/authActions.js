import { login, setAuthorizationToken } from '../../api/authApi';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../constants/UserActionTypes';

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
};

export const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
};

export const loginHandler = credentials => {
    return async dispatch => {
        try {
            const result = await login(credentials);
            await dispatch(loginSuccess(result.data));
            localStorage.setItem('user', JSON.stringify({
                ...result.data,
                isLoggedIn: true
            }));
            setAuthorizationToken(result.data.token);
            return result;
        } catch (err) { }
    }
};

export const logoutHandler = () => {
    return dispatch => {
        dispatch(logoutSuccess());
        localStorage.removeItem('user');
    }
};