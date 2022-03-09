import axios from "axios"
// const host = 'http://localhost:7070/'
const host =`${process.env.REACT_APP_BACKEND}:7070/`
const DoGetDetailsForReviewApi = () =>{
    return axios.get(host+"getUserData");
}

const API =  {
    DoGetDetailsForReviewApi
}

export default API;