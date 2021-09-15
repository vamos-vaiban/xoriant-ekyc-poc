import axios from "axios"
const host = 'http://localhost:7575/'

const DoSaveAddressDetailsAPI = userData =>{
    return axios.post(host+"Address",userData);
}

const API =  {
    DoSaveAddressDetailsAPI,
}

export default API;