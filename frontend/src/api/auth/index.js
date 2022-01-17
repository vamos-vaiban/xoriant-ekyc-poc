import axios from "axios"
const host = 'http://localhost:9090/'
// const DoSignInApi = userData =>{
//     return axios.post(host+"signOn",userData);
// }
export const DoValidateOTP = (action) =>{
    let url = host + `validateOTP?mobile_number_otp=${action.otp}`
    return axios.get(url)
}
const DoGenerateOTP = userData =>{
    return axios.post(host+"signOnn",userData);
}
const API =  {
    // DoSignInApi,
    DoValidateOTP,
    DoGenerateOTP
}

export default API;