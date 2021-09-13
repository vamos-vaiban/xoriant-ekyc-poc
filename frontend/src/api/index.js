import axios from "axios";
import authAPI from "./auth";
import basicDetailsAPI from "./basicDetails"
axios.defaults.baseURL = process.env.REACT_APP_BACKEND
//import and access apis with spread opertor
const API = {
...authAPI,
...basicDetailsAPI,

}
export default API