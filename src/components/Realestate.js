import React from "react"
import { Link} from "react-router-dom"
import { Card } from "react-bootstrap"
// import Rating from "../components/Rating"


//u could use props.product but we used destrucioning
const Realestate = ({realestate})=> {
    return (
     <Card className = "my-3 p-3 rounded">
     <Link to={`/realestates/${realestate.id}`}>
         <Card.Img style={{ height: '10rem' }} src = {realestate.images[0].name} variant ="top" />
     </Link>

     <Card.Body>
     <Link  to={`/realestate/${realestate.id}`}>
     <Card.Title as = "div">
     <strong>{realestate.name}</strong>
     </Card.Title>

     </Link>
     {/* <Card.Text as="div"> */}
     {/* <Rating  value = {product.rating} text = {`${product.numReviews} reviews`}>
         {product.rating} from {product.numReviews} reviews
         </Rating> */}
     {/* </Card.Text> */}

     <Card.Text as = "h3">
     
     ${realestate.price}
     
     </Card.Text>

         </Card.Body>
     </Card>

 
    )
}

export default Realestate