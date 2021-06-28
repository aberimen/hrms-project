import { combineReducers } from "redux";
import authReducer from "./authReducer";
import candidateReducer from './candidateReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    candidate: candidateReducer
})

export default rootReducer;