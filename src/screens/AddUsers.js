import React,{useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Form , Button , Row , Col , Dropdown , DropdownButton} from "react-bootstrap"
import {useDispatch , useSelector} from "react-redux"
import Message from "../components/message"
import Loader from  "../components/Loader"
import { addUserAction } from "../actions/userActions"
// import { userDetailReducer } from "../reducers/userReducers"
import Select from 'react-select'

 const EditUsers = () => {

 
    
    const [auth, setAuth] = useState({
        
        username:"" ,
        email : "",
        password: "",
        role : "",
        phone : ""

     })

     const { username, email, password , role , phone} = auth;


    // const [email , setEmail] = useState("")
    // const [name , setName] = useState("")
    // const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [message , setMessage] = useState(null)
    const [exist , setExist] = useState(false)
    const [drobDownValue,setDrobDownValue]=useState("User Role");
    const [city , setCity] = useState("")
    const [phoneNumber , setPhoneNumber] = useState("")

  
    const  dispatch = useDispatch()

    // const userLists = useSelector(state => state.userList)
    // const {users} = userLists

    // const userDetails = useSelector((state) => state.userDetails)
    // const {loading , user , error} =  userDetails

    const addNewUser = useSelector(state => state.addNewUser)
    const {success , loading , error} =  addNewUser
   

  

   
    // console.log(users)



  
    
// console.log(users)
    //  const userLogin = useSelector(state => state.userLogin)
    //  const {userInfo} =  userLogin

    //  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    //  const {success} =  userUpdateProfile


   const submitHandler = (e)=> {
       e.preventDefault()
   
       if(password !== confirmPassword){
           setMessage("passwords do not match")
           }else{
          
               dispatch(addUserAction({username , email , password , role , phone})) 
               console.log("sent") 
       }
   }



const onChange = e =>{
    setAuth({ ...auth, [e.target.name]: e.target.value })

}

const handleSelect=(e)=>{
    console.log(e);
    setDrobDownValue(e)
   
  }
  const options = [
    { value: 1, label: 'Authenticated' },
    { value: 2, label: 'Public' },
    { value: 3, label: 'Xadmin' }
  ]


    return(

  <><h2 style = {{paddingTop : "20px"}}>Add User</h2>
 
       <Form onSubmit = {submitHandler} style = {{paddingTop : "20px"}}> 
        <Col>
        {error && <Message variant = "danger"> {error} </Message>}
           {message && <Message variant = "danger"> {message} </Message>}
           {success && <Message style = {{width : "100%"}} variant = "success"> User Added Successfully </Message>}
            {loading && <Loader></Loader>} 
            </Col>
             <Row >
            <Col>
          
           
           {/* Name */}
           
           <Form.Group controlId = "username"  >
                   <Form.Label >
                      <h5> Name </h5>
                   </Form.Label>
                   <Form.Control name = "username" type = "text" placeholder = "Enter Name" style ={{border : "5px solid lightgray"}}
                value = {username}
                onChange = {onChange} >
   
                   </Form.Control>
               </Form.Group>
           {/* Email */}
           
               <Form.Group controlId = "email" style = {{paddingTop : "20px"}}>
                   <Form.Label>
                      <h5> Email Adress </h5>
                   </Form.Label>
                   <Form.Control name = "email" style ={{border : "5px solid lightgray"}}  type = "email" placeholder = "Enter Email" 
                value = {email}
                onChange = {onChange}>
   
                   </Form.Control>
               </Form.Group>
   {/* //password */}
               <Form.Group controlId = "password" style = {{paddingTop : "20px"}}>
                   <Form.Label>
                   <h5>password</h5>
                   </Form.Label>
                   <Form.Control name = "password" style ={{border : "5px solid lightgray"}} type = "password" placeholder = "Enter password" 
                 value = {password}
                 onChange = {onChange}>
   
                   </Form.Control>
               </Form.Group>
   
               {/* //Confirmpassword */}
               <Form.Group controlId = "confirmPassword" style = {{paddingTop : "20px"}}>
                   <Form.Label >
                   <h5>Confirm password</h5>
                   </Form.Label>
                   <Form.Control style ={{border : "5px solid lightgray"}} type = "password" placeholder = "Confirm password" 
                   value = {confirmPassword} 
                   onChange = {(e)=> setConfirmPassword(e.target.value)}
              >
   
                   </Form.Control>
               </Form.Group>


{/* Choose Role */}
<Form.Label style = {{paddingTop : "20px"}}>
<h5>User Role</h5>
</Form.Label>
<Select  onChange = {(e) => setAuth({...auth , role : e.value})} options={options} />
   
     
   
               <Button style = {{ marginTop : "30px" }} type = "submit" variant = "outline-dark">
                   Add User
               </Button>
           
   
            </Col>
            <Col>
        

                {/* phone Number */}
               <Form.Group controlId = "phone" >
                   <Form.Label >
                      <h5>Number</h5>
                   </Form.Label>
                   <Form.Control name= "phone" style ={{border : "5px solid lightgray"}} type = "text" placeholder = "Enter Phone Number"
                   value= {phone}
                   onChange = {onChange} 
                  >
   
                   </Form.Control>
               </Form.Group>
               
            </Col>


            
           
        </Row></Form></>
       
        )
     
}

export default EditUsers