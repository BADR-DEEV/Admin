import React,{useEffect, useState} from "react"
import {Form , Button , Row , Col} from "react-bootstrap"
import {useDispatch , useSelector} from "react-redux"
import Message from "../components/message"
import Loader from  "../components/Loader"
import { getUserDetails , updateUserProfile} from "../actions/userActions"
// import { userDetailReducer } from "../reducers/userReducers"
import Select from 'react-select'
import {Link} from "react-router-dom"
 const EditUsers = ({match}) => {

    const curId =  match.params.id
    // const [email , setEmail] = useState("")
    // const [name , setName] = useState("")
    // const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")
    const [message , setMessage] = useState(null)
    const [exist , setExist] = useState()
    // const [roleVal,setRoleVal] = useState("");

   const [test , setTest] = useState("")
   const [test1 , setTest1] = useState("")
    // const [phoneNumber , setPhoneNumber] = useState("")

  
    const  dispatch = useDispatch()

    // const userLists = useSelector(state => state.userList)
    // const {users} = userLists

    const userDetails = useSelector((state) => state.userDetails)
    const {user} =  userDetails

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success , error , loading} =  userUpdateProfile

// console.log(users)
    //  const userLogin = useSelector(state => state.userLogin)
    //  const {userInfo} =  userLogin

    //  const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    //  const {success} =  userUpdateProfile

//    useEffect(()=> {
//        if(!userInfo){
//            history.push("/login")
//        }else{
//            if(!user.name){
//                //this will hit the action user and send
//                //profile as a route not an actual id in 
//                //the action func
//                dispatch(getUserDetails("profile"))
//            }else{
//                setName(user.name)
//                setEmail(user.email)
//            }
//        }

//    } , [user,history,dispatch ,userInfo])

 const [auth, setAuth] = useState({
        
    username:test,
    email : test1,
    password:"" ,
    role :"",
    phone : ""

 })

 const {username, email, password , role , phone} = auth;



const onChange = e =>{
    setAuth({ ...auth, [e.target.name]: e.target.value })
    
}


   const submitHandler = (e)=> {
       e.preventDefault()
       //we are sending the data to the actions
       if(password !== confirmPassword){
           setMessage("passwords do not match")
           console.log(user)
           
           
          
           console.log(auth)
           }else{ //here we will dispatch put request 
               dispatch(updateUserProfile({id : user.id , username , email , password ,role})) 
               console.log("sent") 
               
       }
   }

    // const handleSelect=(e)=>{


    //     setRoleVal(e.value)
    //    setAuth({...auth , role : roleVal})
    //    console.log(auth)
     
    //      }

    const options = [
        { value: 1, label: 'Authenticated' },
        { value: 2, label: 'Public' },
        { value: 3, label: 'Xadmin' }
      ]
 
   
    

    useEffect(() => {
        setTest("")
        setTest1("")
        dispatch(getUserDetails(curId))
      setTest1(user.email)
      setTest(user.username)

 }, [dispatch , test , test1 ,user.username , user.email ])
  
 

 
    return(
<>
<h2 style = {{paddingTop : "20px"}}>Edit User</h2>
 
       <Form onSubmit = {submitHandler} style = {{paddingTop : "20px"}}> 

        <Col>
           {message && <Message variant = "danger"> {message} </Message>}
           {error && <Message variant = "danger"> {error} </Message>}
           {success && <Message style = {{width : "100%"}} variant = "success"> Profile updated </Message>}
            {loading && <Loader></Loader>} 
            </Col>

             <Row >
            <Col>
          
           
           {/* Name */}
           
           <Form.Group controlId = "username">
                   <Form.Label >
                      <h5> Name </h5>
                   </Form.Label>
                   <Form.Control required  name = "username" type = "text" placeholder = "Enter Name" style ={{border : "5px solid lightgray"}}
                   value = {username} 
                   onChange = {onChange}>
   
                   </Form.Control>
               </Form.Group>


           {/* Email */}
           
               <Form.Group controlId = "identifier" style = {{paddingTop : "20px"}}>
                   <Form.Label>
                      <h5> Email Adress </h5>
                   </Form.Label>
                   <Form.Control name = "email" style ={{border : "5px solid lightgray"}}  type = "email" placeholder = "Enter Email" 
                   value = {email} 
                   required
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
                   onChange = {(e)=> setConfirmPassword(e.target.value)}>
   
                   </Form.Control>
               </Form.Group>


{/* Choose Role */}
<Form.Label style = {{paddingTop : "20px"}}>
<h5>User Role</h5>
</Form.Label>
<Select  onChange = {(e) => setAuth({...auth , role : e.value})} options={options} />
   
               <Button style = {{ marginTop : "30px" }} type = "submit" variant = "outline-dark">
                   Update
               </Button>
           
   
            </Col>


            <Col>
          
                {/* phone Number */}
               <Form.Group >
                   <Form.Label controlId = "phone">
                      <h5> Number </h5>
                   </Form.Label>
                   <Form.Control name = "phone" style ={{border : "5px solid lightgray"}} 
                   type = "text" placeholder = "Enter Phone Number" 
                   value = {phone}
                   onChange = {onChange}>
   
                   </Form.Control>
               </Form.Group>
               

           <div style = {{marginTop : "70px" }}>
        <Link to = "/" >
         GO Back
        </Link>
        </div>
        
      
            </Col>
  
        </Row>
        </Form> 
        </>
        
       
        )
     
}

export default EditUsers