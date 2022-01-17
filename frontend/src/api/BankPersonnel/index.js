import axios from "axios"
const host = 'http://localhost:7070/'

const DoGetCustomerData = userData =>{
    return axios.get(host+"getCustomerData",userData);
}

const API =  {
    DoGetCustomerData,
}

export default API;