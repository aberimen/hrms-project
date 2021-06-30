import * as ACTIONS from "../constants/resumeActionTypes";

const initialState = {
    summary: '',
    educationDetails : [],

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