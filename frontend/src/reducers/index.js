import files, { editorLang } from "./filenameSelection";
import username from "./User";
import inoutValue from "./inoutValue";
import sampleTests from "./sampleTests";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    file : files,
    user : username,
    inout : inoutValue,
    editorLang,
    samples:sampleTests
})

export default allReducers;