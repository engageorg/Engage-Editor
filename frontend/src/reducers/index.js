import  files from "./filenameSelection";
import username from "./User";
import inoutValue from "./inoutValue";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    file : files,
    user : username,
    inout:inoutValue
})

export default allReducers;