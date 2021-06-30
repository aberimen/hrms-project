import { combineReducers } from "redux";
import authReducer from "./authReducer";
import candidateReducer from './candidateReducer';
import resumeReducer from "./resumeReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    candidate: candidateReducer,
    resume: resumeReducer
})

export default rootReducer;