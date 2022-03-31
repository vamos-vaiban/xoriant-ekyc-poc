import axios from "axios"
const host = `${process.env.REACT_APP_BACKEND_Python}:5000/` 
// 'http://127.0.0.1:5000/'
const coHost =  `${process.env.REACT_APP_BACKEND}:7070/` 
// 'http://localhost:7070/'

const DoCompareTheDocument = ( jsonData) => {
    let url = host+`compare_faces`;
    const fileData = new FormData()
    if (jsonData.hasOwnProperty("Document_Photo")) { fileData.append("Document_Photo", jsonData["Document_Photo"]) }
    if (jsonData.hasOwnProperty("User_Photo")) { fileData.append("User_Photo", jsonData["User_Photo"]) }
    if (jsonData.hasOwnProperty("name")) { fileData.append("name", jsonData["name"]) }
    return axios.post(url, fileData, {
        body: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
const DoSavePhotoAndSililarityAPI = ( jsonData) => {
    let url = coHost+`savePancardPhotoPath`;
    return axios.post(url, jsonData)
}
const DoGetNameOfUserAPI = ( jsonData) => {
    let url = coHost+`getFullNameAndDOB`;
    return axios.get(url)
}

const API = {
    DoCompareTheDocument,
    DoSavePhotoAndSililarityAPI,
    DoGetNameOfUserAPI
}

export default API;