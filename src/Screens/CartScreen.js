import React from 'react'
import { Container, Row,Col, ListGroup,Image,Button,Card, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import {useSelector,useDispatch} from 'react-redux';
import {removeFromCart} from '../actions/index'


const CartScreen = () => {


    const Items = useSelector(state => state.cartItems);

   

    const dispatch = useDispatch()



    const removeItem = (id)=>{
         
        dispatch(removeFromCart(id))

    }

    return (
        <div>
            <Container>
                
                 <Link  to='/' className="btn btn-primary mt-3">Go back</Link>
                <Row className="mt-3 ">
                  
                    <Col xl="8">
                     <h1>Shopping Cart</h1> 

                     <ListGroup variant="flush">
                         {Items.length > 0 ? Items.map(el=><ListGroup.Item key={el.id}>
                             <Row>
                                 <Col md={2}>
                                     <Image src={el.image} thumbnail/>
                                 </Col>
                                 <Col md={6}>
                                     
                                  <h5>{el.title}</h5>   
                                     
                                   </Col>
                                   <Col md={2}>
                                       <p>{el.price} Rs</p>
                                   </Col>
                                   <Col md={2}>
                                       <Button onClick={()=>{removeItem(el.id)}}  className="btn btn-danger">
                                           <i className="fas fa-trash"></i>
                                       </Button>
                                   </Col>
                             </Row>
                         </ListGroup.Item>):<p>nothing added!</p>}
                         
                     </ListGroup> 
 



                    </Col>

                    <Col xl={4}>
                      
                      <Card className="p-2">
                          <Card.Title>
                              Total Items ({Items.length})
                          </Card.Title>
                           
                           {Items.length > 0 ? <ListGroup className="list-group-flush">
                               <ListGroupItem>total: {Items.reduce((acc,crr)=>{
                                   return acc + crr.price
                               },0) } Rs</ListGroupItem>
                           </ListGroup>:null}


                      </Card>
                   
                    </Col>




           
              </Row>
            </Container>
        </div>
    )
}

export default CartScreen
