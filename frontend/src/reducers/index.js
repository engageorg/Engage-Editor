import  files from "./filenameSelection";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    files : files,
})

export default allReducers;