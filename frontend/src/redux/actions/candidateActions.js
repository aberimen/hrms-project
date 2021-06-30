import { addToFavoriteJobs, getFavoriteJobs, removeFromFavoriteJobs } from "../../api/candidateApi";
import * as ACTIONS from '../constants/candidateActionTypes';


export const getFavoriteJobsSuccess = (favoriteJobs) => {
    return {
        type: ACTIONS.GET_FAVORITE_JOBS_SUCCESS,
        payload: favoriteJobs,
    };
};

export const addToFavoriteJobsSuccess = (job) => {
    return {
        type: ACTIONS.ADD_TO_FAVORITE_JOB_SUCCESS,
        payload: job
    };
};

export const removeFromFavoriteSuccess = (job) => {
    return {
        type: ACTIONS.REMOVE_FROM_FAVORITE_JOBS_SUCCESS,
        payload: job
    };
};




//handlers

export const handleGetFavoriteJobs = (candidateId) => {
    return async (dispatch) => {
        try {
            const result = await getFavoriteJobs(candidateId);
            dispatch(getFavoriteJobsSuccess(result.data));
        } catch (err) { }
    }
};

export const handleAddToFavoriteJobs = (candidateId, jobId) => {
    return async (dispatch) => {
        try {
            const result = await addToFavoriteJobs(candidateId, jobId);
            dispatch(addToFavoriteJobsSuccess(result.data));

        } catch (err) { }
    }
};

export const handleRemoveFromFavoriteJobs = (candidateId, jobId) => {
    return async (dispatch) => {
        try {
            const result = await removeFromFavoriteJobs(candidateId, jobId);
            dispatch(removeFromFavoriteSuccess(result.data));

        } catch (err) { }
    }
};

