import {CHANGE_STATUS} from "../constants/index"
import {cloneDeep,findIndex} from "lodash"

const initialState={
    stepsForKyc:[
        {
          label:"Basic Details",
          status: "complete",
        },
        {
          label:"Address Details",
          status: "pending",
        },
        
        {
          label:"Aadhaar Validations",
          status: "pending",
        },
        // {
        //   label:"Concent",
        //   status: "pending",
        // },
           {
          label:"Video KYC",
          status: "pending",
        },
        {
          label:"Review",
          status: "pending",
        },
        // {
        //   label:"Account Preferrences",
        //   status: "pending",
        // },
        // {
        //   label:"Video KYC",
        //   status: "pending",
        // },
    
      ]
}

export default function NavigationReducer(state = initialState,actions){
    let newState=cloneDeep(state)
    switch(actions.type){
        case CHANGE_STATUS:{
            //get the element
            let targetedStepIndex = findIndex(newState.stepsForKyc,{label : actions.payload.label})
            //change the status
            let finalObj =  newState.stepsForKyc[targetedStepIndex]
            finalObj.status = actions.payload.status 
            newState.stepsForKyc[targetedStepIndex] = finalObj
            return {...newState};
        }
      
        default:{
            return newState;
        }
    }
}