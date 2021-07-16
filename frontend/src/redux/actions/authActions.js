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
        const result = await login(credentials);
        await dispatch(loginSuccess(result.data));
        setAuthorizationToken(result.data.token);
        console.log(result.data.token);
        return result;
    }
};

