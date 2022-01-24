import API from "../../api"
import {AUTH_USER_SIGNIN_SUCCESS, SHOW_MESSAGE,SAVE_USER_INFO} from "../constants/index"
import Storage from "../../utils/Storage"

export const DoUserSignInAction =(action)=>{
    return (dispatch)=>{
        API.DoValidateOTP(action)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                // localStorage.setItem("userData",JSON.stringify(response))
                // Storage.storeUserData(response)
                // // Storage.storeUserData({"request_Id": 65})
                // dispatch({
                //     type: SAVE_USER_INFO,
                //     payload:response
                // })
                // dispatch({
                //     type: SAVE_USER_INFO,
                //     payload:response
                // })
                // dispatch({
                //     type:AUTH_USER_SIGNIN_SUCCESS,
                //     payload:response,
                // })
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"SignIN Successful",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Unable to SignIN",
                        key:action.key
                    }
                })
            }
        })
        .catch(err=>{
            // Storage.storeUserData({"request_Id": 65})
            // dispatch({
            //     type: SAVE_USER_INFO,
            //     payload:{"request_Id": 65}
            // })
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:err&& err.response && err.response.data && err.response.data.details,
                    key:action.key

                }
            })
        })
    }
}
export const DoGenerateOTPAction =(action)=>{
    return (dispatch)=>{
        API.DoGenerateOTP(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                localStorage.setItem("userData",JSON.stringify(response))
                Storage.storeUserData(response)
                dispatch({
                    type: SAVE_USER_INFO,
                    payload:response
                })
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Please Check your "+action.otpSentOn+" OTP is sent to you",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Unable to send OTp",
                        key:action.key
                    }
                })
            }
        })
        .catch(err=>{
            // let response = { request_Id: 2}
            // localStorage.setItem("userData",JSON.stringify(response))
            // Storage.storeUserData(response)
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:err&& err.response && err.response.data && err.response.data.details,
                    key:action.key

                }
            })
        })
    }
}