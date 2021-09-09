import {AUTH_LOGIN, IS_USER,AUTH_USER_SIGNIN_SUCCESS} from "../constants/index"
import {cloneDeep,findIndex} from "lodash"

const initialState={isLoggedIn:true,isUser:false}

export default function AuthReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case AUTH_LOGIN:{
            newState.isLoggedIn=actions.payload
            return {...newState};
        }
        case IS_USER:{
            newState.isUser=actions.payload
        }
        case AUTH_USER_SIGNIN_SUCCESS :{
            newState.isUser = true
            newState.isLoggedIn = true
            return {...newState}
        }
    
        default:{
            return newState;
        }
    }
}