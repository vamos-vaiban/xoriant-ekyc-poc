// import axios from "axios";
import authAPI from "./auth";
import basicDetailsAPI from "./basicDetails"
import addressDetailsAPI from "./addressDetails"
import AadharValidation from "./aadharValidation";
// axios.defaults.baseURL = process.env.REACT_APP_BACKEND
//import and access apis with spread opertor
const API = {
...authAPI,
...basicDetailsAPI,
...addressDetailsAPI,
...AadharValidation

}
export default API