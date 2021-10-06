import React,{useState, useEffect}  from 'react'
import axios from "axios"
import { LinkContainer } from 'react-router-bootstrap'
import {Table , Button} from "react-bootstrap"

 const ViewUsers = () => {
    const [isAdmin , setAdmin] = useState(false)

     const [users , setUsers] = useState([])

    useEffect(() => {
        const fetch = async ()=> {
            const {data} = await axios.get("http://api.amn.ly/users")
            setUsers(data)
            console.log(data)
        }
        fetch()
  
    }, [])
 
const deleteHandler = () => {
    return ;
}
    
    return (
        <>
        <h1>Users</h1>

        <Table striped bordered hover responsive className = "table-sm">
        <thead>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            
            <th>detail</th>
            <th>Role</th>
            <th>ADMIN</th>
            
        </tr>


        </thead>

        <tbody>
            {users.map(user => (
                <tr key = {user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td><a href= {`mailto:${user.email}`}>{user.email}</a></td>
                <td>
                    <LinkContainer to = {`/edit/users/${user.id}/`}>
                        <Button variant = "light" className = "btn-sm">
                        <i className = "fas fa-edit"></i>

                        </Button>
                    </LinkContainer>
                    <Button variant = "danger" className = "btn-sm" onClick = {()=> deleteHandler(user.id)}>
                    <i className = "fas fa-trash"></i>
                          </Button>
                </td>
                <td>
                {user.role.description}

                </td>
                <td>
                   {isAdmin ? <i className = "fas fa-check" style = {{color:"green"}}></i>:
                   <i className = "fas fa-times" style ={{color : "red"}}></i>  } 
                </td>

                


                </tr>
                
            ))}
        </tbody>

        </Table>
      
            
        </>
    )
}

export default ViewUsers
