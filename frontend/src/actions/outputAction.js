import axios from "axios";

export const runCode = ( code,language,input) => async dispatch => {
    let url
    url = 'https://engage-editor-backend.herokuapp.com/'
    console.log(input, language)
    if(language === "python"){
        language = "python3"
    }
    return await axios.post( url+'runcode', {
        language: language, 
        stdin:input,
        versionIndex: "0",
        script:code
    })
}