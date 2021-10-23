import { REALESTATE_DETAILS_FAIL, REALESTATE_DETAILS_REQUEST, REALESTATE_DETAILS_SUCCESS, REALESTATE_LIST_FAIL, REALESTATE_LIST_REQUEST, REALESTATE_LIST_SUCCESS } from "../constants/realestateConstants.js"


export const realestateListReducer = (state = {realestates: []} , action)=> {
   switch(action.type){
       case REALESTATE_LIST_REQUEST:
           //the second argument takes the payload
           return{ loading: true, realestates: [] }


           //sending the products data to the payload
       case REALESTATE_LIST_SUCCESS: 
           return {loading: false , realestates: action.payload}


           //sending the error to the payload
       case REALESTATE_LIST_FAIL:
           return{ loading: false, error: action.payload}

           default:
               return state
        

   } 


}



export const realestateDtailsReducer = (state = {detailRealestate: {}} , action)=> {
   switch(action.type){
       case REALESTATE_DETAILS_REQUEST:
           //the second argument takes the payload
           return{ loading: true, ...state}


           //sending the products data to the payload
       case REALESTATE_DETAILS_SUCCESS: 
           return {loading: false , detailRealestate: action.payload}


           //sending the error to the payload
       case REALESTATE_DETAILS_FAIL:
           return{ loading: false, error: action.payload}

           default:
               return state
        

   }


}