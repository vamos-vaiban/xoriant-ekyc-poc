import authAPI from "./auth";
import basicDetailsAPI from "./basicDetails"
import addressDetailsAPI from "./addressDetails"
import AadharValidation from "./aadharValidation";
import axios from "axios";
import Storage from '../utils/Storage'
// axios.defaults.baseURL = process.env.REACT_APP_BACKEND

axios.interceptors.request.use(function (config) {
  // let user = Storage.getUserData()
  let user = localStorage.getItem("user")
  user = JSON.parse(user)
  if (user) {
    if (user["request_Id"]) {
      // config.headers.Authorization = `Bearer ${user && user["request_Id"]}`;
      config.headers.request_Id = `${user && user["request_Id"]}`
    }
  }
  return config;
});

const API = {
  ...authAPI,
  ...basicDetailsAPI,
  ...addressDetailsAPI,
  ...AadharValidation

}
export default API