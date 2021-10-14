import axios from "axios"
const host = 'http://localhost:8000/'
const DoSignInApi = userData =>{
    return axios.post(host+"signOn",userData);
}
const DoGenerateOTP = userData =>{
    return axios.post(host+"signOnn",userData);
}
const API =  {
    DoSignInApi,
    DoGenerateOTP
}

export default API;