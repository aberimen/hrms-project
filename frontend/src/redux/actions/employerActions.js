import { UPDATE_SUCCESS } from "../constants/UserActionTypes";

export const updateSuccess = (employer) => {
    return {
        type: UPDATE_SUCCESS,
        payload: employer
    };
};