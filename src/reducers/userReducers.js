import { userInfo } from "os"
import { USER_DETAIL_REQUEST,
     USER_DETAIL_SUCCESS , 
    USER_DETAIL_FAIL, 
  USER_LIST_REQUEST, 
    USER_LIST_SUCCESS, USER_LIST_FAIL,
     USER_LOGIN_REQUEST,
      USER_LOGIN_SUCCESS, 
     USER_LOGIN_FAIL, 
     USER_LOGOUT,
     USER_UPDATE_PROFILE_REQUEST,
     USER_UPDATE_PROFILE_SUCCESS,
     USER_UPDATE_PROFILE_FAIL,
     DELETE_USER_REQUEST,
     DELETE_USER_SUCCESS,
     DELETE_USER_FAIL,
     ADD_NEW_USER_REQUEST,
     ADD_NEW_USER_SUCCESS,
     ADD_NEW_USER_FAIL,
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS,
     USER_REGISTER_FAIL} 
      from "../constants/usersConstants"


export const userListReducer = (state = {users: []} , action)=> {
    switch(action.type){
        case USER_LIST_REQUEST:
            //the second argument takes the payload
            return{ loading: true, users: [] }


            //sending the products data to the payload
        case USER_LIST_SUCCESS: 
            return {loading: false , users: action.payload}


            //sending the error to the payload
        case USER_LIST_FAIL:
            return{ loading: false, error: action.payload}

            default:
                return state
         

    }

}

export const userDetailReducer = (state = { user: {} } , action)=> {
    switch(action.type){
        case USER_DETAIL_REQUEST:
            return({...state, loading: true})

        case USER_DETAIL_SUCCESS: 
            return {loading: false , user: action.payload}

        case USER_DETAIL_FAIL:
            return{ loading: false, error: action.payload}

         
            default:
                return state
         

    }


}

export const userLoginReducer = (state = {} , action)=> {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            //the second argument takes the payload
            return{ loading: true}


            //sending the products data to the payload
        case USER_LOGIN_SUCCESS: 
            return {loading: false , userInfo: action.payload}
            


            //sending the error to the payload
        case USER_LOGIN_FAIL:
            return{ loading: false, error: action.payload}

            case USER_LOGOUT:
                return{}
    

            default:
                return state
            
         

    }
    
}

export const userUpdateProfileReducer = (state = { } , action)=> {
    switch(action.type){
        case USER_UPDATE_PROFILE_REQUEST:
            return{loading: true,}
        case USER_UPDATE_PROFILE_SUCCESS: 
            return {loading: false , userInfo: action.payload , success: true}
        case USER_UPDATE_PROFILE_FAIL:
            return{ loading: false, error: action.payload}

         
            default:
                return { success : false}
    }
}


export const deleteUserReducer = (state = { } , action)=> {
    switch(action.type){
        case DELETE_USER_REQUEST:
            return{loading: true,}
        case DELETE_USER_SUCCESS: 
            return {loading: false , userInfo: action.payload , success: true}
        case DELETE_USER_FAIL:
            return{ loading: false, error: action.payload}

         
            default:
                return { success : false}
         

    }


}

export const addNewUserReducer = (state ={} , action)=> {
    switch(action.type){
        case ADD_NEW_USER_REQUEST:
            return{loading: true,}
        case ADD_NEW_USER_SUCCESS: 
            return {loading: false , addUserInfo: action.payload , success: true}
        case ADD_NEW_USER_FAIL:
            return{ loading: false, error: action.payload}

            default:
                return{ success : false}
    }
}


export const userRegisterReducer = (state = {} , action)=> {
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{ loading: true,}
        case USER_REGISTER_SUCCESS: 
            return {loading: false , userInfo: action.payload}
        case USER_REGISTER_FAIL:
            return{ loading: false, error: action.payload}

         
            default:
                return state
         

    }


}
// export const addUserReducer = (state = { user: {} } , action)=> {
//     switch(action.type){
//         case ADD_NEW_USER_REQUEST:
//             return{...state, loading: true,}
//         case ADD_NEW_USER_SUCCESS: 
//             return {loading: false , user: action.payload}
//         case ADD_NEW_USER_FAIL:
//             return{ loading: false, error: action.payload}

         
//             default:
//                 return state
         

//     }


// }


// export const deleteUser = (state)