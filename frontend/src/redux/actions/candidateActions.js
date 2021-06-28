import { addToFavoriteJobs, getFavoriteJobs, removeFromFavoriteJobs } from "../../api/candidateApi";
import { ADD_TO_FAVORITE_JOB_SUCCESS, GET_FAVORITE_JOBS_SUCCESS, REMOVE_FROM_FAVORITE_JOBS_SUCCESS } from '../constants/candidateActionTypes';


export const getFavoriteJobsSuccess = (favoriteJobs) => {
    return {
        type: GET_FAVORITE_JOBS_SUCCESS,
        payload: favoriteJobs,
    };
};

export const addToFavoriteJobsSuccess = (job) => {
    return {
        type: ADD_TO_FAVORITE_JOB_SUCCESS,
        payload: job
    };
};

export const removeFromFavoriteSuccess = (job) => {
    return {
        type: REMOVE_FROM_FAVORITE_JOBS_SUCCESS,
        payload: job
    };
};





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