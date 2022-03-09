import axios from "axios"
const host =  `${process.env.REACT_APP_BACKEND}:7575/`
//'http://localhost:7575/' 
const DoSaveAddressDetailsAPI = userData =>{
    return axios.post(host+"Address",userData);
}

const API =  {
    DoSaveAddressDetailsAPI,
}

export default API;