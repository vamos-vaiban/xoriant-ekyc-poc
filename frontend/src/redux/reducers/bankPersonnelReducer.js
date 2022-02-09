import {FETCH_CUSTOMER_DETAILS} from "../constants/index"
import {cloneDeep} from "lodash"
const initialState = {
customers: [],
}
export default function AuthReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case FETCH_CUSTOMER_DETAILS :{
            newState.customers = actions.payload
            return newState
        }
     
        default:{
            return newState;
        }
    }
}