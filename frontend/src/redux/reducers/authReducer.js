import {SAVE_USER_NAME,SAVE_USER_INFO, AUTH_LOGIN, IS_USER,AUTH_USER_SIGNIN_SUCCESS,SET_LOGIN_AS_BANK_PERSONNEL,LOGGED_IN_AS_BANK_PERSONNEL,SAVE_USER_DETAILS, USER_LIST} from "../constants/index"
import {cloneDeep} from "lodash"
const user =localStorage.getItem("user")
const userData =localStorage.getItem("userData")
const userList=localStorage.getItem("userList")
const loggedInUserInfo = localStorage.getItem("loggedInUserInfo")
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
    userData : (userData&&JSON.parse(userData) || {...emptyData}),
    userlist : (userList&&JSON.parse(userList) || {...emptyData}),
    user : (user&&JSON.parse(user) || {}),
    loggedInUserInfo : (user&&JSON.parse(loggedInUserInfo) || {}),
    nameAndDOB:{},
}
export default function AuthReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case SAVE_USER_INFO :{
            if(newState.loggedInUserInfo ){
                let data = newState.loggedInUserInfo
                newState.loggedInUserInfo = {
                    ...data,
                    ...actions.payload
                }
            }else{
                newState.loggedInUserInfo = actions.payload
            }
            return {...newState};
        }
        case USER_LIST:{
            newState.userlist=actions.payload
            console.log(actions.payload)
            return {...newState};
        }
        case SAVE_USER_NAME:{
            newState.nameAndDOB=actions.payload
          
            return {...newState};
        }
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
        
        case SAVE_USER_DETAILS:{
            let user = newState.user
            let newInfo = actions.payload
            let newUserData = {
                ...user,
                ...newInfo
            } 
            newState.user=newUserData
            return {...newState}

        }
        default:{
            return newState;
        }
    }
}