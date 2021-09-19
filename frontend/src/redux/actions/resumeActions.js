import { getCandidateResume, saveImage } from "../../api/resumeApi";
import { errorToast, successToast } from "../../components/utils/notification";
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

export const updateProfileImageSuccess = (imageUrl) => {
    return {
        type: ACTIONS.UPDATE_PROFILE_IMAGE_SUCCESS,
        payload: imageUrl
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

export const handleUpdateProfileImage = (resumeId, file) => {
    return async (dispatch) => {
        try {
            const result = await saveImage(resumeId, file);
            dispatch(updateProfileImageSuccess(result.data));
            successToast("Profil fotoğrafı başarıyla değiştirildi");
        } catch (err) {
            errorToast("Bir hata oluştu");
        }
    }
};
