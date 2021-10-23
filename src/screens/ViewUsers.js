import React,{useState, useEffect}  from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Table , Button} from "react-bootstrap"
import Loader from '../components/Loader'
import Message from '../components/message'
import { useSelector , useDispatch } from 'react-redux'
import { userListAction , deleteUser} from '../actions/userActions'
import Pagination from "../components/Pagination"

 const ViewUsers = () => {
    // const [isAdmin , setAdmin] = useState(true)

    const userDetails = useSelector((state) => state.userDetails)
    const {  user } =  userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin



    const [currentPage , setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    


     const  dispatch = useDispatch()
     

    useEffect(() => {
        dispatch(userListAction())
  
    }, [dispatch])

    const userList = useSelector(state => state.userList)
    const {users , loading , error} = userList

 
const deleteHandler = (b) => {
    dispatch(deleteUser(b))
    setInterval(function() {
        window.location.reload();
    },300)
    
}
const indexOfLastPost = currentPage * postsPerPage
const indexOfFirstPost = indexOfLastPost - postsPerPage
const currentPost = users.slice(indexOfFirstPost,indexOfLastPost)

const paginate = pageNumber => {
    setCurrentPage(pageNumber)
}

    return (
        <div>
         <h1 >Users</h1>
         <br/><br/>

        {loading ? <Loader/> : error ? setTimeout(()=>{<Message variant = "danger">{error}</Message>},3000) : (<><div style = {{"display" : "flex" }}>
      <h3 >Add user</h3>
      <LinkContainer to = "/add/users" style = {{"marginTop" : "-5px" , "marginLeft" : "25px"}} >
      <Button variant = "success" className = "btn-sm">
   
                          <i className="fa fa-plus" aria-hidden="true"></i> 
                          
                          </Button>
                          </LinkContainer>
                          </div>
                          <br></br>
                          
            
         {users ? (<><Table  striped bordered hover responsive className = "table-sm">
        <thead >
       <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>User details</th>
            <th>Role</th>
            <th>ADMIN</th>
            <th>Phone</th>
        </tr>


        </thead>

        <tbody >


            {currentPost.map(user => (
                <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td><a href= {`mailto:${user.email}`}>{user.email}</a></td>
                <td>
                
                {user.role.id === 3 ? (<LinkContainer style = {{border : "1px solid black"}} to = "#" >
                        <Button   variant = "dark" className = "btn-sm" disabled>
                        <i  className = "fas fa-edit"></i>
                        </Button>

                        
                    </LinkContainer>) : <LinkContainer to = {`/edit/users/${user.id}`} >
                        <Button variant = "light" className = "btn-sm">
                        <i className = "fas fa-edit"></i>
                        </Button>
                    </LinkContainer>}
                    
{/* <button 

 onClick={() => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Crumb?"
    )
    if (confirmBox === true) {
      handleDeleteCrumb(bookmark)
    }
  }}>
</button> */}
                    {user.role.id === 3 ?   <Button style = {{border : "1px solid black" , paddingRight : "18px"}} variant = "dark" className = "btn-sm" disabled>
                    <i className = "fas fa-trash"></i>
                          </Button> :  <Button variant = "danger" style = {{paddingRight : "18px"}} className = "btn-sm" onClick = {()=> deleteHandler(user.id)}>
                    <i className = "fas fa-trash"></i>
                          </Button>}
                   
                      
                </td>
                <td>
                {user.role.name === "Xadmin" ? <h6 style = {{color: "rgb(118, 106, 240)"}}>{user.role.name}</h6> : user.role.name}

                </td>
                <td>
                   {user.role.name === "Xadmin" ? <i className = "fas fa-check" style = {{color:"green"}}></i>:
                   <i className = "fas fa-times" style ={{color : "red"}}></i>  } 
                </td>

                <td>
                  
                   <i>{user.phone ? user.phone : <h6 style ={{color : "lightgray"}}>Not Provided</h6>}</i>  
                </td>



                </tr>
                
            ))}
          
        </tbody>

        

        </Table> <Pagination postsPerPage = {postsPerPage} 
            totalPosts = {users.length} 
            paginate =  {paginate}/> </>) :  <h1>No users Found</h1>}
        </>
        
        )}
      
            
        </div>
    )
}

export default ViewUsers
