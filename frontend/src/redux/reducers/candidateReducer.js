import { ADD_TO_FAVORITE_JOB_SUCCESS, GET_FAVORITE_JOBS_SUCCESS, REMOVE_FROM_FAVORITE_JOBS_SUCCESS } from "../constants/candidateActionTypes";

const initialState = {
    favoriteJobs: [],
}

const candidateReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FAVORITE_JOBS_SUCCESS:
            return {
                ...state,
                favoriteJobs: [...action.payload]
            };
        case ADD_TO_FAVORITE_JOB_SUCCESS:
            return {
                ...state,
                favoriteJobs: [...state.favoriteJobs, action.payload]
            };
        case REMOVE_FROM_FAVORITE_JOBS_SUCCESS:
            return {
                ...state,
                favoriteJobs: state.favoriteJobs.filter(job => job.jobId !== action.payload.jobId)
            };
        default:
            return {
                ...state
            }
    }
};

export default candidateReducer;