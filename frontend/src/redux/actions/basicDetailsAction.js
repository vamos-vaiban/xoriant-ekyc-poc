import { SHOW_MESSAGE} from "../constants/index"
import API from "../../api"

//Action to validate PAN 
export const DoValidatePanNumberAction =(action)=>{
    debugger
    return (dispatch)=>{
        API.DoValidatePanNumberApi(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"PAN number is valid",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"PAN number is not valid",
                        key:action.key
                    }
                })
            }
        })
        .catch(err=>{
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:"err.response && err.response.data && err.response.data.detail",
                    key:action.key

                }
            })
        })
    }
}

//Action to validate Aadhar 
export const DoValidateAadharNumberAction =(action)=>{
    return (dispatch)=>{
        API.DoValidateAadharNumberApi(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Aadhar number is valid",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Aadhar number is not valid",
                        key:action.key
                    }
                })
            }
        })
        .catch(err=>{
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:"err.response && err.response.data && err.response.data.detail",
                    key:action.key

                }
            })
        })
    }
}

//Action to validate Mobile Number 
export const DoValidateMobileNumberAction =(action)=>{
    return (dispatch)=>{
        API.DoValidateMobileNumberApi(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Mobile number is valid",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Mobile number is not valid",
                        key:action.key
                    }
                })
            }
        })
        .catch(err=>{
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:"err.response && err.response.data && err.response.data.detail",
                    key:action.key

                }
            })
        })
    }
}
//Action to Save Basic Details 
export const DoSaveBasicDetailsAction =(action)=>{
    return (dispatch)=>{
        API.DoSaveBasicDetailsApi(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Saved Basic Details",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Error while Saving Basic Details",
                        key:action.key
                    }
                })
            }
        })
        .catch(err=>{
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:"err.response && err.response.data && err.response.data.detail",
                    key:action.key

                }
            })
        })
    }
}