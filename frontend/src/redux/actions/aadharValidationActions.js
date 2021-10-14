import { SHOW_MESSAGE} from "../constants/index"
import API from "../../api"

//Action to validate PAN 
export const DoCompareTheDocumentAction =(action)=>{
    return (dispatch)=>{
        API.DoCompareTheDocument(action.data)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Files are uploaded",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Error while uploading files",
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

