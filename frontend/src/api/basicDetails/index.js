import axios from "axios"
const host = 'http://localhost:7070/'
const DoValidatePanNumberApi = panNumber =>{
    return axios.post(host+"PanNumber",panNumber);
}

const DoValidateAadharNumberApi = aadharNumber =>{
    return axios.post(host+'AadharNumber',aadharNumber)
}

const DoValidateMobileNumberApi = mobileNumber =>{
    return axios.post(host+'MobileNumber',mobileNumber)
}

const DoSaveBasicDetailsApi = userData =>{
    return axios.post(host+'PanAadharMobile',userData)
}
const API =  {
    DoValidatePanNumberApi,
    DoValidateAadharNumberApi,
    DoValidateMobileNumberApi,
    DoSaveBasicDetailsApi
}

export default API;