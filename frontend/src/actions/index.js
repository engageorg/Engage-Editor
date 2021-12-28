import axios from "axios";

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

export const savefile = (file) => async dispatch => {
   return await axios.post("http://localhost:5000/codesave/", {
    code: file.content,
    name: file.name,
    creator:JSON.parse(localStorage.getItem("currentUserId"))
    }).then((response) => {
    if(response.data.status === 200){
      alert("CODE SAVED")
    }
    })
}

export const changeFileName = (na) => {
    return {
        type : "changename",
        name : na
    }
}