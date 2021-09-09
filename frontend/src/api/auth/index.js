import axios from "axios"

const DoSignInApi = userData =>{
    return axios.post("signOn/",userData);
}

export default {
    DoSignInApi,
}