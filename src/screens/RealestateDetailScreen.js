import React,{useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {useDispatch , useSelector} from "react-redux"
import {Row , Col , Image , ListGroup , Card , Button , Form} from "react-bootstrap"
// import Rating from "../components/Rating.js"
// import {listProductsDetails} from "../actions/productActions"
import { listRealestatesDetails } from "../actions/realestateAction"
import Loader from "../components/Loader"
import Message from "../components/message"

//u could use props.match but destructional is easier






const RealestateDetailScreen = ({match , history})=> {



    
    const [qty , setQuty] = useState(1)

    const dispacth = useDispatch()

   
    
   
    const realestateDtails = useSelector(state => state.realestateDtails)
    const {loading , error , detailRealestate} = realestateDtails



    useEffect(()=> {
    
     
        dispacth(listRealestatesDetails(match.params.id))

       
       
    }, [dispacth , match])


    

    // const stuff = detailRealestate ? detailRealestate.images[0].name : null

// we loop through the products and we want it to return us the matched id with the url:id (check app.js route product)
//     const product = Products.find( (p) => p._id ===match.params.id )
//    console.log(product)

//we used a ? so we could fetch it with the search prop

// const addtoCartHnadler = ()=> {
//     history.push(`/cart/${match.params.id}?qty=${qty}`)

// }

    return (
  <>
  <Link className = "btn btn-light my-3" to = "/" >
  Go Back 
  </Link>
{loading ? <Loader/> : error ? <Message variant = "danger">{error}</Message> : (
    <Row>
  <Col md={6}>
  <Image  src = {detailRealestate?.images?.[0]?.name} style = {{borderRadius : "10%" , height : "400px"}} fluid/>
  

</Col>


<Col md={3}>
<ListGroup variant="flush" >
    <ListGroup.Item>
        <h4>
            {detailRealestate.name}
        </h4>
    </ListGroup.Item>
{/* 
    <ListGroup.Item>
        <Rating value={realestate.rating} text = {`${realestate.numReviews}`} />
    </ListGroup.Item> */}

    <ListGroup.Item>
    Price: ${detailRealestate.price}
    </ListGroup.Item>

    <ListGroup.Item>
   Description: {detailRealestate.description}
   </ListGroup.Item>

    
</ListGroup>
  </Col>
  <Col md={3}>
     <Card>
     {/* //the flush variant gives us something like an hr  ---- */}
         <ListGroup variant= "flush">

             <ListGroup.Item>
             <Row>
                 <Col>
                     Price :
                 </Col>

                 <Col>
                     <strong>
                         ${detailRealestate.price}
                     </strong>
                 </Col>
             </Row>

             </ListGroup.Item>
             {/* <ListGroup.Item>
             <Row>
                 <Col>
                     Status :
                 </Col>

                 <Col>
                     <strong style = {product.countInStock ===0 ? {color: "red"} : null} >
                         {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                     </strong>
                 </Col>
             </Row>

             </ListGroup.Item> */}

             {/* {product.countInStock > 0 && ( */}
                 {/* <ListGroup.Item>
                 <Row>
                 <Col>Qty</Col>

                 <Col>
                 <Form.Control as ="select" 
                 value={qty} 
                 onChange = {(e) => setQuty(e.target.value)}> */}
                 {/* we want the keys index of product.countInStock
                 but without effecting it os we did a spread 
                 operater to get a copy and set the index start
                 at 1 insted of zero  oh and we converted it to 
                 an array so we could iterate through it with map */}
                {/* { [...Array(product.countInStock).keys()].map((x) => (
                     <option key = {x + 1} 
                     value = {x + 1}>
                     {x+1}

                     </option>
             ))} */}

                 {/* </Form.Control>
                     
                 </Col>

                 </Row>

                 </ListGroup.Item>

             )} */}

             <ListGroup.Item>
             <Button  variant = "outline-dark" className = "btn-block" 
             type = "button" outLine>
              Add To Cart
              </Button>

             </ListGroup.Item>


         </ListGroup>
     </Card>



  </Col>


  </Row>
)}
 
 
  </> 
    )
}

export default RealestateDetailScreen