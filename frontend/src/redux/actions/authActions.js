import { login, setAuthorizationToken } from '../../api/authApi';
import { LOGIN_SUCCESS } from '../constants/UserActionTypes';

export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
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

