import { combineReducers } from "redux";
import UIReducer from "./UIReducer";
import AuthReducer from "./authReducer";
import NavReducer from './navigationReducer'
export default combineReducers({
    ui:UIReducer,
    auth:AuthReducer,
    nav:NavReducer
})