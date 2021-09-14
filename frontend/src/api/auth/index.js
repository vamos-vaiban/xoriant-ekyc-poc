import axios from "axios"
const host = 'http://localhost:8000/'
const DoSignInApi = userData =>{
    return axios.post(host+"signOn",userData);
}

const API =  {
    DoSignInApi,
}

export default API;