import axios from "axios"

const DoSignInApi = userData =>{
    debugger
    return axios.post("signOn/",userData);
}

export default {
    DoSignInApi,
}