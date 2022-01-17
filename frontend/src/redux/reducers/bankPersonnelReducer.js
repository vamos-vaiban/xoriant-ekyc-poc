import {FETCH_CUSTOMER_DETAILS} from "../constants/index"
import {cloneDeep} from "lodash"
const initialState = {
customers: [
    { reqId: 1, accountNumber: 1001000001, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: undefined,status:null },
    { reqId: 2, accountNumber: 1001000002, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:"Approved" },
    { reqId: 3, accountNumber: 1001000003, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255" ,status:"Rejected"},
    { reqId: 4, accountNumber: 1001000004, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255",status:null },
    { reqId: 5, accountNumber: 1001000005, crnNumber: "123456789A", mobileNumber: "7020399809", registeredOn: "10/20/2021, 11:00:27 AM", adharNumber: "5555 5555 5555", registeredMobile: "9876543210", panNumber: "AAAAA5412G", house_no: "Harsh Sagar", address_line_1: "KOthrud", address_line_2: "", city: "pune", landmark: "Right Bhusari Colony", adharPhotoUrl: "blob:http://localhost:3000/2fbb19f7-5133-4264-9bca-e0d316e075cf", userPicUrl: "blob:http://localhost:3000/5cd69467-f480-496f-b210-e58ed19ef255" ,status:null},
],
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