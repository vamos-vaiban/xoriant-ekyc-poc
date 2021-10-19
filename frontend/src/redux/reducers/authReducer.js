import {AUTH_LOGIN, IS_USER,AUTH_USER_SIGNIN_SUCCESS,SET_LOGIN_AS_BANK_PERSONNEL,LOGGED_IN_AS_BANK_PERSONNEL} from "../constants/index"
import {cloneDeep} from "lodash"

const userData =localStorage.getItem("userData")
const emptyData ={
    mode_Of_Authentication:"",
    email_id:"",
    mobile_number:"",
    RequestId:""
}
const initialState={
    loginAsBankPersonnel : false,
    isLoggedIn:true,
    isBankPersonnelLoggedIn:false,
    isUser:false,
    userData : (userData&&JSON.parse(userData) || {...emptyData})
}
export default function AuthReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case AUTH_LOGIN:{
            newState.isLoggedIn=actions.payload
            return {...newState};
        }
        case IS_USER:{
            newState.isUser=actions.payload
            return {...newState};
        }
        case AUTH_USER_SIGNIN_SUCCESS :{
            newState.isUser = true
            newState.isLoggedIn = true
            newState.userData = actions.payload
            return {...newState}
        }

        case SET_LOGIN_AS_BANK_PERSONNEL :{
            newState.loginAsBankPersonnel = actions.payload
            return {...newState}
        }

        case LOGGED_IN_AS_BANK_PERSONNEL:{
            newState.isBankPersonnelLoggedIn = actions.payload
            return {...newState}
        }
        
    
        default:{
            return newState;
        }
    }
}