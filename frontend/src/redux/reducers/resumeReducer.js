import * as ACTIONS from "../constants/resumeActionTypes";
import defaultProfileImage from '../../assets/user-avatar.png';

const initialState = {
    summary: '',
    educationDetails: [],
    languageSkills: [],
    profileImage: defaultProfileImage

}

const resumeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_RESUME_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case ACTIONS.UPDATE_RESUME_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return {
                ...state
            }
    }
};

export default resumeReducer;