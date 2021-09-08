import API from "../../api"
import {AUTH_USER_SIGNIN_SUCCESS, SHOW_MESSAGE} from "../constants/index"
import Storage from "../../utils/Storage"

export const DoUserSignInAction =(action)=>{
    debugger
    return (dispatch)=>{
        debugger
        API.DoSignInApi(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                localStorage.setItem("userData",JSON.stringify(response))
                Storage.storeUserData(response)
                // dispatch({
                //     type:AUTH_USER_SIGNIN_SUCCESS,
                //     payload:response,
                // })
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Unable to SignIN",
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
            dispatch({
                type:SHOW_MESSAGE,
                payload:{
                    type:"error",
                    message:err.response && err.response.data && err.response.data.detail,
                    key:action.key

                }
            })
        })
    }
}