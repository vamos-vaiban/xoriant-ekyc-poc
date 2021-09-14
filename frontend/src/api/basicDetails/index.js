import axios from "axios"

const DoValidatePanNumberApi = panNumber =>{
    return axios.post("PanNumber",panNumber);
}

const DoValidateAadharNumberApi = aadharNumber =>{
    return axios.post('AadharNumber',aadharNumber)
}

const DoValidateMobileNumberApi = mobileNumber =>{
    return axios.post('MobileNumber',mobileNumber)
}

const DoSaveBasicDetailsApi = userData =>{
    return axios.post('PanAadharMobile',userData)
}
const API =  {
    DoValidatePanNumberApi,
    DoValidateAadharNumberApi,
    DoValidateMobileNumberApi,
    DoSaveBasicDetailsApi
}

export default API;