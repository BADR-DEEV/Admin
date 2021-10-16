import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router , Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer"
import ViewUsers from './screens/ViewUsers'
import EditUsers from "./screens/EditUsers"
import "./app.css"
import AddUsers  from './screens/AddUsers'
import LoginScreen from './screens/LoginScreen'
import PrivateRoute from './components/privetRoute'
import RegisterScreen from './screens/RegisterScreen'

 const App = () => {
  return (
    <Router>
    {/* Admins stuff */}
   <Header/>
   <main className = "py-3">
   <Container>
<>
   <Route path = "/login"  component = {LoginScreen} />
   <Route path = "/register"  component = {RegisterScreen} />
   </>
   <PrivateRoute path = "/view/users"  component = {ViewUsers}/>
   <PrivateRoute path = "/edit/users/:id" component = {EditUsers} exact/> 
   <PrivateRoute path = "/add/users" component = {AddUsers} exact/> 
   <PrivateRoute path = "/" component = {ViewUsers} exact/> 

   </Container>

   </main>
   
   <Footer />

   {/* Normal User stuff  */}
   </Router>
   
  )
}


export default App



//react pagination 
//cleaning the code
//redirecting if xadmin of not 
//maybe add filtering and dark mode and translation
//register doesnot work for some reasone i will ask taha
//the phone doesnt get edited or added for some reasone
//adding a popup message after clicking delete 
//adding homescreen and welcoming the user with its name easy

