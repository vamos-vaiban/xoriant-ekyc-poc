import axios from "axios"
const host = 'http://127.0.0.1:5000/'
const coHost = 'http://localhost:7070/'

const DoCompareTheDocument = ( jsonData) => {
    let url = host+`compare_faces`;
    const fileData = new FormData()
    if (jsonData.hasOwnProperty("Document_Photo")) { fileData.append("Document_Photo", jsonData["Document_Photo"]) }
    if (jsonData.hasOwnProperty("User_Photo")) { fileData.append("User_Photo", jsonData["User_Photo"]) }
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

const API = {
    DoCompareTheDocument,
    DoSavePhotoAndSililarityAPI
}

export default API;