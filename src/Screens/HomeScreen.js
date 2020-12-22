import React, { useEffect, useState } from 'react';

import axios from 'axios';

import {Card,Button,Col,Row, Container} from 'react-bootstrap';

import {useDispatch} from 'react-redux';

import {addCart} from '../actions/index' 

const HomeScreen = () => {


    const [data,setData] = useState([]);

  

    const disptach = useDispatch();

    useEffect(()=>{

        const fetch = async()=>{
            const {data} = await axios.get('https://fakestoreapi.com/products/');
             
            setData(data);

        }
        fetch();
    },[])


    const addtoCart = (id,title,price,image)=>{

         const data = {
             id,
             title,
             price,
             image

         }

         
         disptach(addCart(data))


         alert('Added to the cart!')

    

        
    
   
    }





    return (
        <Container>
        <Row className="mx-auto">
            
          {data ? data.map(el=> <Col className="my-3" key={el.id} xs={12} md={6} xl={4}><Card style={{ width: '18rem' }}>
  <Card.Img className="mx-auto p-1" style={{width:200,height:200}}  variant="top" src={`${el.image}`} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.price} RS.
    </Card.Text>
    <Button variant="primary" onClick={()=>addtoCart(el.id,el.title,el.price,el.image)}>Add To Cart</Button>
  </Card.Body>
</Card></Col>):null} 
         
        
            
        </Row></Container>
    )
}

export default HomeScreen
