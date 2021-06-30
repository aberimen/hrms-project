import { getCandidateResume } from "../../api/resumeApi";
import * as ACTIONS from '../constants/resumeActionTypes';


export const getResumeSuccess = (resume) => {
    return {
        type: ACTIONS.GET_RESUME_SUCCESS,
        payload: resume
    };
};

export const updateResumeSuccess = (resume) => {
    return {
        type: ACTIONS.UPDATE_RESUME_SUCCESS,
        payload: resume
    };
};


export const handleGetResume = (resumeId) => {
    return async (dispatch) => {
        try {
            const result = await getCandidateResume(resumeId);
            dispatch(getResumeSuccess(result.data));

        } catch (err) { }
    }
};
