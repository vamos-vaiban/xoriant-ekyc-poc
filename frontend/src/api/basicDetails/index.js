import axios from "axios"

const DoValidatePanNumberApi = panNumber =>{
    return axios.post("PanNumber/",panNumber);
}

const DoValidateAadharNumberApi = aadharNumber =>{
    return axios.post('AadharNumber/',aadharNumber)
}

const DoValidateMobileNumberApi = mobileNumber =>{
    return axios.post('MobileNumber/',mobileNumber)
}
const API =  {
    DoValidatePanNumberApi,
    DoValidateAadharNumberApi,
    DoValidateMobileNumberApi
}

export default API;