import * as ACTIONS from "../constants/candidateActionTypes";

const initialState = {
    favoriteJobs: [],
}

const candidateReducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIONS.GET_FAVORITE_JOBS_SUCCESS:
            return {
                ...state,
                favoriteJobs: [...action.payload]
            };
        case ACTIONS.ADD_TO_FAVORITE_JOB_SUCCESS:
            return {
                ...state,
                favoriteJobs: [...state.favoriteJobs, action.payload]
            };
        case ACTIONS.REMOVE_FROM_FAVORITE_JOBS_SUCCESS:
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