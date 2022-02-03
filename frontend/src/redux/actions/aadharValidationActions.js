import { SHOW_MESSAGE,SAVE_USER_DETAILS } from "../constants/index"
import API from "../../api"
import Storage from "../../utils/Storage"
//Action to validate PAN 
export const DoCompareTheDocumentAction = (action) => {
    return (dispatch) => {
        API.DoCompareTheDocument(action.data)
            .then(data => data.data)
            .then(response => {
                if (response) {
                    // let similarity = response[0].Similarity
                    // let user = localStorage.getItem('user');
                    // let userInfo = JSON.parse(user)
                    // let userSpecificData = {
                    //     ...userInfo,
                    //     similarity: similarity,
                    // }
                    // localStorage.setItem("user", JSON.stringify(userSpecificData))
                    // Storage.storeUserData(user)
                    // dispatch({
                    //     type: SAVE_USER_DETAILS,
                    //     payload: userSpecificData
                    // })
                    dispatch({
                        type: SHOW_MESSAGE,
                        payload: {
                            type: "success",
                            message: "Files are uploaded",
                            key: action.key
                        }
                    })
                } else {
                    dispatch({
                        type: SHOW_MESSAGE,
                        payload: {
                            type: "error",
                            message: "Error while uploading files",
                            key: action.key
                        }
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: SHOW_MESSAGE,
                    payload: {
                        type: "error",
                        message: err && err.response && err.response.message,
                        key: action.key

                    }
                })
            })
    }
}

