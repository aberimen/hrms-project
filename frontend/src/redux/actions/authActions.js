import { LOGIN_SUCCESS } from '../constants/UserActionTypes';

export const login = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
};