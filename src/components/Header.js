import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div>

            <Navbar bg="warning" expand="lg">
                <Container>
  <Navbar.Brand><Link className="link" to='/'>E-Commerce</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      
      
        <Nav.Item href="#action/3.1"><Link className="link" to='/cart'><i className="fas fa-shopping-cart"></i>  Cart</Link></Nav.Item>
  
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    )
}

export default Header
