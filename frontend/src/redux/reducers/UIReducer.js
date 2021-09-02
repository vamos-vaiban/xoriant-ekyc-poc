import {SUCCESS,ERROR,UI_LOADING,SHOW_MESSAGE,HIDE_MESSAGE} from "../constants/index"
import {cloneDeep,findIndex} from "lodash"

const initialState={loading:false,messages:[]}

export default function UIReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case UI_LOADING:{
            newState.loading=actions.payload
            return {...newState};
        }
        case ERROR :{
            newState.loading = false;
            newState.error = true;
            newState.message = actions.payload
            return {...newState};
        }
        case SHOW_MESSAGE:{
            newState.messages.push(actions.payload)
            return {...newState}
        }

        case HIDE_MESSAGE:{
            if(actions.payload.key){
                let index = findIndex(newState["messages"],{
                    key:actions.payload.key
                })
                if(index >-1){
                    newState["messages"] = newState["messages"].splice(index,1)
                }
            }else{
                let index = findIndex(newState["messages"],{
                    message:actions.payload.message
                })
                if (index > -1){
                    newState["messages"] = newState["messages"].splice(index,1)
                }
            }
            return {...newState};
        }
        default:{
            return newState;
        }
    }
}