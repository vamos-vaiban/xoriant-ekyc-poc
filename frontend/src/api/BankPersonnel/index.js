import axios from "axios"
// const host = 'http://localhost:7070/'
const host =`${process.env.REACT_APP_BACKEND}:7070/`
const DoGetCustomerData = userData =>{
    return axios.get(host+"getCustomerData",userData);
}

const DoUpdateKYCStatus = userdata =>{
    return axios.put(host+"ekyStatus",userdata)
}
const API =  {
    DoGetCustomerData,
    DoUpdateKYCStatus,
}

export default API;