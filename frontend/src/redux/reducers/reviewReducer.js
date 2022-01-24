import {SAVE_REVIEW_DETAILS} from "../constants/index"
import {cloneDeep} from "lodash"
const initialState = {
    review:{}
}
export default function ReviewReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case SAVE_REVIEW_DETAILS :{
            newState.review = actions.payload
            return newState
        }
     
        default:{
            return newState;
        }
    }
}