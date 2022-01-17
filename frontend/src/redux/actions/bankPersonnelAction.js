import API from "../../api"
import {FETCH_CUSTOMER_DETAILS,SHOW_MESSAGE} from "../constants/index"
import Storage from "../../utils/Storage"

export const DoGetCustomerDataAction =(action)=>{
    return (dispatch)=>{
        API.DoGetCustomerData()
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type: FETCH_CUSTOMER_DETAILS,
                    payload:response
                })
                // dispatch({
                //     type:SHOW_MESSAGE,
                //     payload:{
                //         type:"success",
                //         message:"Cutsomer details",
                //         key:action.key
                //     }
                // })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Unable to fetch Data",
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
                    message:err&& err.response && err.response.data && err.response.data.details,
                    key:action.key

                }
            })
        })
    }
}