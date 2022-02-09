import {FETCH_CUSTOMER_DETAILS} from "../constants/index"
import {cloneDeep} from "lodash"
const initialState = {
customers: [

    {

        "mobile_number": "7894561231",

        "pan_number": "RAVAR2345R",

        "photopath": "https://image-match02.s3.ap-south-1.amazonaws.com/melinda_Image.jpg",

        "status": null,

        "accountNumber": null,

        "crn": null,

        "similarity": 0.0,

        "insertedDate": "2022-01-11T10:41:25.000+00:00",

        "aadhar_number": "982541784545",

        "aadhar_Linked_Mobile_no": "788888888",

        "pincode": 431114,

        "house_no": "lsa",

        "landmark": "Hanuman temple",

        "address_line_1": "near mauli temple",

        "address_line_2": "kolegao road",

        "address_line_3": "bhokardan",

        "city": "jalna",

        "request_id": 6,

        "mode_Of_Authentication": "via-mobile",

        "state": "MH"

    },

    {

        "mobile_number": "7588062930",

        "pan_number": "CLYPM2692T",

        "photopath": "/users/documents",

        "status": "Approve",

        "accountNumber": 1001000019,

        "crn": "704713002D",

        "similarity": 90.0,

        "insertedDate": "2022-01-20T09:46:36.000+00:00",

        "aadhar_number": "840343794275",

        "aadhar_Linked_Mobile_no": "7588062930",

        "pincode": 411027,

        "house_no": "5",

        "landmark": "ORIANA Day Care",

        "address_line_1": "Vishal Nagar",

        "address_line_2": "Pimple Nilkah",

        "address_line_3": "Near Chonde Sports Complex",

        "city": "Pune",

        "request_id": 19,

        "mode_Of_Authentication": "via-mobile",

        "state": "MH"

    },

    {

        "mobile_number": "7020399810",

        "pan_number": "ABCDE1111E",

        "photopath": "https://image-match02.s3.ap-south-1.amazonaws.com/melinda_Image.jpg",

        "status": "Reject",

        "accountNumber": 1001000021,

        "crn": "768628444F",

        "similarity": 100.0,

        "insertedDate": "2022-01-24T10:20:16.000+00:00",

        "aadhar_number": "1111 1111 1111",

        "aadhar_Linked_Mobile_no": "7020399810",

        "pincode": 411027,

        "house_no": "Aggarwal boot house main bazar Jhinjhana,Shamli(U.P.),Pincode-247773",

        "landmark": "New India HighSchool",

        "address_line_1": "Aggarwal boot house main bazar Jhinjhana,Shamli(U.P.),Pincode-247773",

        "address_line_2": "NA",

        "address_line_3": null,

        "city": "Mumbai",

        "request_id": 21,

        "mode_Of_Authentication": "via-mobile",

        "state": "MH"

    },

    {

        "mobile_number": "7020399811",

        "pan_number": "FEQPM8137H",

        "photopath": "https://image-match02.s3.ap-south-1.amazonaws.com/melinda_Image.jpg",

        "status": "Reject",

        "accountNumber": 1001000023,

        "crn": "776386034A",

        "similarity": 77.56,

        "insertedDate": "2022-02-09T13:31:48.000+00:00",

        "aadhar_number": "1111 1111 1111",

        "aadhar_Linked_Mobile_no": "7020399811",

        "pincode": null,

        "house_no": "701ABCD",

        "landmark": "NOPQRST",

        "address_line_1": "EFGHI",

        "address_line_2": "JKLM",

        "address_line_3": null,

        "city": "Banglore",

        "request_id": 23,

        "mode_Of_Authentication": "via-mobile",

        "state": null

    }

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