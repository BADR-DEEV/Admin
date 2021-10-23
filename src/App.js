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
import HomeScreen from "./screens/HomeScreen"
import RealestateScreen from './screens/RealestateScreen'
import RealestateDetailScreen from "./screens/RealestateDetailScreen"


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
   <PrivateRoute path = "/" component = {HomeScreen} exact/> 
   <PrivateRoute path = "/view/users"  component = {ViewUsers}/>
   <PrivateRoute path = "/edit/users/:id" component = {EditUsers} exact/> 
   <PrivateRoute path = "/add/users" component = {AddUsers} exact/> 
   <PrivateRoute path = "/RealestateScreen" component = {RealestateScreen} exact/> 
   <PrivateRoute path = "/realestates/:id" component = {RealestateDetailScreen} exact/> 
   {/* <PrivateRoute path = "/" component = {ViewUsers} exact/>  */}
  

   </Container>

   </main>
   
   <Footer />

   {/* Normal User stuff  */}
   </Router>
   
  )
}


export default App


// <(bugs + missing fetures)>

//cleaning the code
//redirecting if xadmin or not 
//maybe add filtering and dark mode and translation
//adding a popup message after clicking delete 
//it keeps the old value of the phone for some resone
//making the error messages fade out after certin amount of time
