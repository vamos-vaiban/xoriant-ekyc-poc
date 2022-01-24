import { SHOW_MESSAGE,SAVE_REVIEW_DETAILS } from "../constants";
import API from "../../api";
export const DoGetDetailsForReviewApiAction =(action)=>{
    
    return (dispatch)=>{
        API.DoGetDetailsForReviewApi()
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SAVE_REVIEW_DETAILS,
                    payload:response
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Data cant fetched",
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