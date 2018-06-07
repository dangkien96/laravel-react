import { combineReducers } from "redux"
import User from "./userReducer"
import Category from "./CategoriesReducer"
import Login from "./LoginReducer"
export default combineReducers({
    User, Category, Login
})