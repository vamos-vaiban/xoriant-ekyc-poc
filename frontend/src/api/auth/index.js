import axios from "axios"
const host = 'http://localhost:9090/'
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