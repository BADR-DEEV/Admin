import React from 'react'
import {Navbar , Nav , Container, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

const Header = () => {
    
    return (
        <header>
        <Navbar style = {{"backgroundColor" : "#766af0"}} variant = "dark" expand="lg" collapseOnSelect>
  <Container>

  <LinkContainer to = "/view/users" > 
    <Navbar.Brand>Admin</Navbar.Brand>
    </LinkContainer>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  style= {{marginLeft:"auto"}}>

      <LinkContainer to = "/view/users">
        <Nav.Link>
           HOME
        </Nav.Link>

        </LinkContainer>
        
          <NavDropdown title = "users" id = "username">
          <LinkContainer to = "/view/users">
          
          <NavDropdown.Item><i className="fa fa-users" aria-hidden="true"></i> View Users</NavDropdown.Item>

          </LinkContainer>

          <LinkContainer to = "/edit/users">
          <NavDropdown.Item><i className="fa fa-users" aria-hidden="true"></i> Add Users</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to = "/add/users">
          <NavDropdown.Item><i className="fa fa-users" aria-hidden="true"></i> Edit Users</NavDropdown.Item>
          </LinkContainer>

          </NavDropdown>

     

      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </header>
    )
}

export default Header