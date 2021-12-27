import  files from "./filenameSelection";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    file : files,
})

export default allReducers;