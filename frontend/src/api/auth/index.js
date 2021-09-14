import axios from "axios"

const DoSignInApi = userData =>{
    return axios.post("signOn",userData);
}

const API =  {
    DoSignInApi,
}

export default API;