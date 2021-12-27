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

export const changeFileName = (na) => {
    return {
        type : "changename",
        name : na
    }
}