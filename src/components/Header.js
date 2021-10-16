import React from 'react'
import {Navbar , Nav , Container, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import { logout } from '../actions/userActions';
import {useDispatch , useSelector} from "react-redux"
import {Link} from "react-router-dom"
const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin




  const logoutHandleer = ()=>{

    dispatch(logout())
  }


  
    
    return (
        <header>
        <Navbar  bg = "dark" variant = "dark" expand="lg" collapseOnSelect>
  <Container>

  <LinkContainer to = "/view/users" > 
    <Navbar.Brand>Devsly</Navbar.Brand>
    </LinkContainer>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  style= {{marginLeft:"auto"}}>

      {/* <LinkContainer to = "/view/users">
        <Nav.Link>
           HOME
        </Nav.Link>

        </LinkContainer> */}
       
          <NavDropdown title = "users" id = "username">

          <LinkContainer to = "/view/users">
          <NavDropdown.Item><i class="fa fa-street-view" aria-hidden="true"></i> View Users</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to = "/add/users">
          <NavDropdown.Item> <i className="fa fa-plus" aria-hidden="true"></i> Add User</NavDropdown.Item>
          </LinkContainer>

          </NavDropdown>

          {userInfo ? (
          <NavDropdown  title = "profile" id = "username">

          <LinkContainer to = {`/edit/users/${userInfo.user.id}`}>
          <NavDropdown.Item>profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick = {logoutHandleer}>Logout</NavDropdown.Item>

          </NavDropdown>

        ) :   <LinkContainer to = "/login" >
        <Nav.Link>
        <i  className = "fas fa-user"> </i> Sign In
        </Nav.Link>
        
        </LinkContainer>}

        
         
         


     

      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </header>
    )
}

export default Header