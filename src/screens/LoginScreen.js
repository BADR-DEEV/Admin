import React,{useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Form , Button , Row , Col} from "react-bootstrap"
import {useDispatch , useSelector} from "react-redux"
import Message from "../components/message"
import Loader from "../components/Loader.js"
import {login} from "../actions/userActions"
import FormContainer from '../components/FormContainer'

 const LoginScreen = ({location , history}) => {

   
    
    const [auth, setAuth] = useState({
        
        identifier:"" ,
        password: ""
      
         
     })
     const { identifier, password} = auth;

     const dispatch = useDispatch()

     const userLogin = useSelector(state => state.userLogin)
     const {loading , error , userInfo} = userLogin
 
   const redirect = "/"


   useEffect(()=> {
       if(userInfo){
           history.push(redirect)
       }
   } , [ history , redirect , userInfo])


   const onChange = e =>{
    setAuth({ ...auth, [e.target.name]: e.target.value })

}

   const submitHandler = (e)=> {
       e.preventDefault()
       //we are sending the data to the actions
       dispatch(login({identifier, password}))
   }

    return (
        <FormContainer >
        <h1 style ={{marginButtom : "30px"}}>Sign in </h1>
        {error && <Message variant = "danger"> {error} </Message>}
         {loading && <Loader></Loader>}
        <Form style ={{paddingTop : "20px"}} onSubmit = {submitHandler}>
        {/* Email */}
            <Form.Group controlId = "email">
                <Form.Label>
                    Email Adress
                </Form.Label>
                <Form.Control name = "identifier" style ={{border : "2px solid lightgray"}} type = "text"  placeholder = "Enter Email" 
                value = {identifier} variant = "primary"
                onChange = {onChange}>

                </Form.Control>
            </Form.Group>
{/* //password */}
            <Form.Group controlId = "password" style = {{marginTop : "15px"}}>
                <Form.Label>
                password
                </Form.Label>
                <Form.Control name = "password" style ={{border : "2px solid lightgray"}} type = "password" placeholder = "Enter password" 
                value = {password} 
                onChange = {onChange}>

                </Form.Control>
            </Form.Group>
            <Button type = "submit" variant = "outline-dark" style = {{marginTop : "30px"}}>
                Sign In
            </Button>
        </Form>


        <Row className = "py3">
            <Col style = {{marginTop : "30px"}}>
                New Customer ? <Link to = "/register">Register</Link>
            </Col>
        </Row>
            
        </FormContainer>
    )
}

export default LoginScreen