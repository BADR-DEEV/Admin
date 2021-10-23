import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import { userListReducer, userDetailReducer
    , userLoginReducer , 
    userUpdateProfileReducer , 
    addNewUserReducer,
    userRegisterReducer
 } from "./reducers/userReducers"

 import {realestateListReducer, realestateDtailsReducer} from "./reducers/realestateReducer.js"


const reducer = combineReducers({
    userList : userListReducer,
    userDetails : userDetailReducer,
    userLogin : userLoginReducer,
    userUpdateProfile : userUpdateProfileReducer,
    addNewUser : addNewUserReducer,
    userRegister : userRegisterReducer,
    realestateList : realestateListReducer,
    realestateDtails : realestateDtailsReducer

})


const userInfoFromStorage = localStorage.getItem("userInfo") ? 
JSON.parse(localStorage.getItem("userInfo")): null

const initalState = {userLogin : {userInfo : userInfoFromStorage}}

const middleware = [thunk]


const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
