import {AUTH_LOGIN, IS_USER} from "../constants/index"
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
    
        default:{
            return newState;
        }
    }
}