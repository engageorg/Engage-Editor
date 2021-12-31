import axios from "axios";
import { toast } from "react-toastify";

export const addContent = (con) => {
    return {
       type : "changecontent",
       content : con
    }
}

export const addFile = (fi) => {
    return {
        type : "addfile",
        file : fi
    }
}

export const savefile = (file, sessionId) => async dispatch => {
   return await axios.post("http://localhost:5000/codesave/", {
    code: file.content,
    name: file.name,
    sessionId:sessionId
    }).then((response) => {
    if(response.data.status === 200){
        toast.success("Code Saved to Server");
    }else if(response.data.status === 401){
        toast.error(response.data.message)
    }
    })
}

export const changeFileName = (na) => {
    return {
        type : "changename",
        name : na
    }
}

export const loginUser = (na) => {
    return {
        type : "login",
        user : na
    }
}

export const logoutUser = () => {
    return {
        type : "logout"
    }
}
