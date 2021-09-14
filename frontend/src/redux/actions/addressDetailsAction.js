import { SHOW_MESSAGE} from "../constants/index"
import API from "../../api"


//Action to Address Details 
export const DoSaveAddressDetailsAction=(action)=>{
    return (dispatch)=>{
        API.DoSaveAddressDetailsAPI(action.userData)
        .then(data=>data.data)
        .then(response =>{
            if(response){
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"success",
                        message:"Saved Address Details",
                        key:action.key
                    }
                })
            }else{
                dispatch({
                    type:SHOW_MESSAGE,
                    payload:{
                        type:"error",
                        message:"Error while Saving  Details",
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
                    message:err&& err.response && err.response.details,
                    key:action.key

                }
            })
        })
    }
}