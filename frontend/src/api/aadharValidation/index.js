import axios from "axios"
const host = 'http://127.0.0.1:5000/'

const DoCompareTheDocument = ( jsonData) => {
    let url = `compare_faces`;
    const fileData = new FormData()
    if (jsonData.hasOwnProperty("document photo")) { fileData.append("document photo", jsonData["document photo"]) }
    if (jsonData.hasOwnProperty("user photo")) { fileData.append("user photo", jsonData["user photo"]) }
    return axios.post(url, fileData, {
        body: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
const API = {
    DoCompareTheDocument,
}

export default API;