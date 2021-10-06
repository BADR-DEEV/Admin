import React from 'react'
import Header from './components/Header'
import {BrowserRouter as Router , Route} from "react-router-dom"
import { Container } from 'react-bootstrap'
import Footer from "./components/Footer"
import ViewUsers from './screens/ViewUsers'


 const App = () => {
  return (
    <Router >
   <Header/>
   <main className = "py-3">
   <Container>
   <Route path = "/view/users"  component = {ViewUsers} exact/>

   </Container>

   </main>
   
   <Footer />
   </Router>
   
  )
}


export default App