import { SHOW_MESSAGE} from "../constants/index"
import API from "../../api"

//Action to validate PAN 
export const DoCompareTheDocumentAction =(action)=>{
    return (dispatch)=>{
        API.DoCompareTheDocument(action)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"PAN number is valid",
                        // key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"PAN number is not valid",
                        // key:action.key
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
                    // key:action.key

                }
            })
        })
    }
}

