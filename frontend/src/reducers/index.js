import  files from "./filenameSelection";
import username from "./User";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    file : files,
    user : username
})

export default allReducers;