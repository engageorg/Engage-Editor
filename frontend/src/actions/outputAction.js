import axios from "axios";

export const runCode = ( code,language,input) => async dispatch => {
    let url
    url = 'http://localhost:5000/'
    
    return await axios.post( url+'runcode', {
        language: "python2", 
        stdin:input,
        versionIndex: "0",
        script:code
    })
}