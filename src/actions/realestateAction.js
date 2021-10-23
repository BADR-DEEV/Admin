
import axios from "axios"
import { REALESTATE_DETAILS_FAIL, 
    REALESTATE_DETAILS_REQUEST, 
    REALESTATE_DETAILS_SUCCESS, 
    REALESTATE_LIST_FAIL, 
    REALESTATE_LIST_REQUEST,
     REALESTATE_LIST_SUCCESS } 
     from "../constants/realestateConstants"

//creating an action 
//the thunk allow us to 
//create a func inside a func
//we used it to make it async all
export const listRealestates = ()=> async (dispatch) =>{

    try {
        //the dispatch will call to the reducers
        //and conform that the types is "thing"
        //and fire the condion

        
//2- the listproducts request the data and talks to 
//productReducers 
        dispatch({type : REALESTATE_LIST_REQUEST})

        const {data} = await axios.get("https://api.tfrheeda.devs.ly/realestates")

        dispatch({
            //in the reducers with type success
            //send the payload to the products
            type : REALESTATE_LIST_SUCCESS,
            payload : data
        })
    } catch (error){
        dispatch({
            type: REALESTATE_LIST_FAIL,
         payload : error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message,
        })
 
    }
    //so this is still wont fire 
//after we finished our action we want to fire it 
//in homescreen
}




export const listRealestatesDetails = (id)=> async (dispatch) =>{

    try {
        //the dispatch will call to the reducers
        //and conform that the types is "thing"
        //and fire the condion
//2- the listproducts request the data and talks to 
//productReducers 
        dispatch({type : REALESTATE_DETAILS_REQUEST})

        const {data} = await axios.get(`https://api.tfrheeda.devs.ly/realestates/${id}`)

        dispatch({
            //in the reducers with type success
            //send the payload to the products
            type : REALESTATE_DETAILS_SUCCESS,
            payload : data
        })
    } catch (error){
        dispatch({
            type: REALESTATE_DETAILS_FAIL,
         payload : error.response && error.response.data.message 
         ? error.response.data.message 
         : error.message,
        })

    }
    //so this is still wont fire 
//after we finished our action we want to fire it 
//in homescreen




    



}