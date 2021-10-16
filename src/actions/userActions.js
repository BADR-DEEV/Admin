import {USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
     USER_LIST_FAIL,
     USER_DETAIL_REQUEST,
     USER_DETAIL_SUCCESS,
     USER_DETAIL_FAIL,
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGIN_FAIL,
     USER_LOGOUT,
     USER_UPDATE_PROFILE_SUCCESS,
     USER_UPDATE_PROFILE_FAIL,
     USER_UPDATE_PROFILE_REQUEST,
     DELETE_USER_REQUEST,
     DELETE_USER_SUCCESS,
     DELETE_USER_FAIL,
     ADD_NEW_USER_REQUEST,
     ADD_NEW_USER_SUCCESS,
     ADD_NEW_USER_FAIL,
     USER_REGISTER_SUCCESS,
     USER_REGISTER_REQUEST,
     USER_REGISTER_FAIL,
  
} from "../constants/usersConstants.js"
import axios from "axios"
import qs from 'qs';



export const userListAction = ()=> async (dispatch) =>{

    try {
        dispatch({type : USER_LIST_REQUEST})

        const {data} = await axios.get("https://api.tfrheeda.devs.ly/users")

        dispatch({
            type : USER_LIST_SUCCESS,
            payload : data
        })
    } catch (error){
        dispatch({
            type: USER_LIST_FAIL,
         payload : error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message,
        })

    }
  
}


export const deleteUser = (id)=> async (dispatch) =>{

    try {
        dispatch({type : DELETE_USER_REQUEST})

        const {data} = await axios.delete(`https://api.tfrheeda.devs.ly/users/${id}`)

        dispatch({
            type : DELETE_USER_SUCCESS,
            payload : data
        })
    } catch (error){
        dispatch({
            type: DELETE_USER_FAIL,
         payload :error.response.data.data[0].messages[0].message
        })

    }
  
}







export const getUserDetails = (id) => async (dispatch) => {
   

    try{
        dispatch({
            type:USER_DETAIL_REQUEST,
        

        })
        const { data } = await axios.get(`https://api.tfrheeda.devs.ly/users/${id}`)

        dispatch({
            type: USER_DETAIL_SUCCESS,
            payload: data

        })
 }
    catch(error){
        dispatch({
            type: USER_DETAIL_FAIL,
         payload : error.response.data.data[0].messages[0].message
        })

    }
}



export const login = (form) => async (dispatch) => {
    // const formData = Form
    //console.log(email)
    //console.log(password)
    const formData = qs.stringify(form)
   
    // const requestBody = {
    //     email: email,
    //     password: password
        
    //   }
    const config = {
        headers: {
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }
    try{
        dispatch({
            type:USER_LOGIN_REQUEST,
        })
      

        const {data} = await axios.post("https://api.tfrheeda.devs.ly/auth/local" , formData , config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem("userInfo" , JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
         payload : error.response.data.data[0].messages[0].message
        })
        // console.log(error.response.data.data[0].messages[0].message)    
    }
}



export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo")
    dispatch({type : USER_LOGOUT})

}


export const register = (form) =>async (dispatch) => {
    const formreg = qs.stringify(form)
    console.log(formreg)
    try{
        dispatch({
            type:USER_REGISTER_REQUEST,
        

        })
        //when we are sending data we want to sent 
        //to the header a content type + we will
        //sent the token
        const config = {
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8"

            }
        }
        const { data } = await axios.post("https://api.tfrheeda.devs.ly/auth/local/register" , formreg , config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data

        })
        //we want to send the login type as well
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data

        })
        localStorage.setItem("userInfo" , JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type: USER_REGISTER_FAIL,
         payload : error.response.statusText
        })

    
    }
}






export const updateUserProfile = (user) =>async (dispatch , getState) => {
    const userData = qs.stringify(user)
   console.log(userData)

    try{
        dispatch({
            type:USER_UPDATE_PROFILE_REQUEST,
        })
        const {userLogin : {userInfo} } = getState()

        const config = {
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
                // Authorization : `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`https://api.tfrheeda.devs.ly/users/${user.id}`  , userData,  config)
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })
 }
    catch(error){
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
         payload : error.response.statusText
        })
        console.log(error.response.statusText)
       
    }
}


 
export const addUserAction = (user) =>async (dispatch) => {
    const NewUserData = qs.stringify(user)

    const config = {
        headers: {
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        }
    }

    try{
        dispatch({
            type: ADD_NEW_USER_REQUEST,
        })
      

        const {data} = await axios.post("https://api.tfrheeda.devs.ly/users" , NewUserData , config)

        dispatch({
            type: ADD_NEW_USER_SUCCESS,
            payload: data
        })

        // localStorage.setItem("userInfo" , JSON.stringify(data))
    }
    catch(error){
        dispatch({
            type: ADD_NEW_USER_FAIL,
         payload : (error.response.data.data[0].messages[0].message === null || undefined) ? error.response.message : error.response.data.data[0].messages[0].message 
        })
        // console.log(error.response.data.data[0].messages[0].message)

    
    }



}
