import React,{useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Form , Button , Row , Col} from "react-bootstrap"
import {useDispatch , useSelector} from "react-redux"
import Message from "../components/message"
import Loader from "../components/Loader.js"
import {login, register} from "../actions/userActions"
import FormContainer from '../components/FormContainer'

 const RegisterScreen = ({location , history}) => {

   
    
    const [auth, setAuth] = useState({
        username : "",
        email:"" ,
        password: ""
      
         
     })
     const { username ,email, password} = auth;

     const dispatch = useDispatch()

     const userRegister = useSelector(state => state.userRegister)
     const {loading , error , userInfo} = userRegister

   const redirect = "/view/users"


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
       dispatch(register({username ,email, password}))
   }

    return (
        <FormContainer >
        <h1 style ={{marginButtom : "30px"}}>Sign in </h1>
        {error && <Message variant = "danger"> {error} </Message>}
         {loading && <Loader></Loader>}
        <Form style ={{paddingTop : "20px"}} onSubmit = {submitHandler}>
        <Form.Group>
                <Form.Label>
                    Username 
                </Form.Label>
                <Form.Control required name = "username" style ={{border : "2px solid lightgray"}} type = "text"  placeholder = "Enter username" 
                value = {username} variant = "primary"
                onChange = {onChange}>

                </Form.Control>
            </Form.Group>

        {/* Email */}
            <Form.Group >
                <Form.Label>
                    Email Adress
                </Form.Label>
                <Form.Control required name = "email" style ={{border : "2px solid lightgray"}} type = "email"  placeholder = "Enter Email" 
                value = {email} variant = "primary"
                onChange = {onChange}>

                </Form.Control>
            </Form.Group>

      
{/* //password */}
            <Form.Group >
                <Form.Label>
                password
                </Form.Label>
                <Form.Control required name = "password" style ={{border : "2px solid lightgray"}} type = "password" placeholder = "Enter password" 
                value = {password} 
                onChange = {onChange}>

                </Form.Control>
            </Form.Group>
            <Button type = "submit" variant = "outline-dark" style = {{marginTop : "30px"}}>
                Sign Up
            </Button>
        </Form>


        <Row className = "py3">
            <Col style = {{marginTop : "30px"}}>
                Already have an account ? <Link to = "/login">Login</Link>
            </Col>
        </Row>
            
        </FormContainer>
    )
}

export default RegisterScreen