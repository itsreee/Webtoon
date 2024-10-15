import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png'
const Header = () => {
  return (
<Navbar collapseOnSelect expand="lg" className="" >
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className="img-fluid" style={{width:'70px',height:'60px'}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white'>Trending</Nav.Link>
            <Nav.Link className='text-white'>Volumes</Nav.Link>
            <NavDropdown title="Geners" id="collapsible-nav-dropdown" className='text-white bg-white rounded'>
              <NavDropdown.Item className='text-white'>Action</NavDropdown.Item>
              <NavDropdown.Item className='text-white'>
               Thriller
              </NavDropdown.Item>
              <NavDropdown.Item className='text-white'>Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='text-white'>
                Watch Now
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className='text-white'>Favourites</Nav.Link>
            <Nav.Link eventKey={2} className='text-white'>
              Profile <span className='ml-1'><i class="fa-solid fa-user" ></i></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

