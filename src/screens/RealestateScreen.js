import React, {useEffect} from "react"
import { useDispatch , useSelector } from "react-redux"
import {Row , Col} from "react-bootstrap"
// import Product from "../components/product"
import Realestate from "../components/Realestate"
// import { listProducts} from "../actions/productActions"
import { listRealestates } from "../actions/realestateAction"

import Loader from "../components/Loader"
import Message from "../components/message"


const RealestateScreen = () => {

    const dispatch = useDispatch()

    //we take this from our store
    //useSelctor used to take the data 
     //useSelector Allows you to extract data from the Redux store state, using a selector function.
    const realestateList = useSelector(state => state.realestateList)
    
    //the values that will be sent down
    const { loading , error , realestates} = realestateList
    //we are importing our products from the backend 
    //rather then doing it manully

    //we used async await rather then .then 
    //async await returns a promise spp yeah
    //1- we fired the listproducts with dispatch
    useEffect(()=>{
        //fireing off the action
        dispatch(listRealestates())
    

    }, [dispatch])

    return (
        <>
        <h1>Latest realestates </h1>
        {loading ? (
            <h2><Loader/></h2>
            ) : error ? (
                <Message variant = "danger">{error}</Message> 
            ) :  (
                <Row>
            {realestates.map(realestate => (
                <Col key = {realestate.id} sm={12} md={6} lg={4} xl={3}>
                    <Realestate realestate= {realestate} ></Realestate>
                </Col>
            ))}

            </Row> )}
           
    
        </>
    )
}

export default RealestateScreen