import { combineReducers } from "redux";
import UIReducer from "./UIReducer";
import AuthReducer from "./authReducer";
import NavReducer from './navigationReducer';
import BankPersonnelReducer from './bankPersonnelReducer'
export default combineReducers({
    ui:UIReducer,
    auth:AuthReducer,
    nav:NavReducer,
    bankPersonnel : BankPersonnelReducer,
})