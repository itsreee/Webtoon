import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid className='bg-white text-black py-5'>
      <Row className='justify-content-center text-center'>
        <Col xs={12} md={3} className='mb-4'>
          <h3>Connect with us</h3>
          <div>
            <h3>
              <i className="fa-brands fa-facebook"></i>
              <span className='mx-2'><i className="fa-brands fa-instagram"></i></span>
              <span className='mx-2'><i className="fa-brands fa-twitter"></i></span>
              <span className='mx-2'><i className="fa-brands fa-youtube"></i></span>
            </h3>
          </div>
          <p>Instagram Feed <br/>Download and enjoy offline</p>
          <h3><i className="fa-solid fa-download"></i></h3>
        </Col>

        <Col xs={12} md={3} className='mb-4'>
          <h3>Quick links</h3>
          <ul className='list-unstyled'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Report</li>
            <li>Profile</li>
          </ul>
        </Col>

        <Col xs={12} md={3} className='mb-4'>
          <h3>Genres</h3>
          <ul className='list-unstyled'>
            <li>Fantasy</li>
            <li>Horror</li>
            <li>Romance</li>
            <li>Comedy</li>
            <li>Action</li>
          </ul>
        </Col>

        <Col xs={12} md={3} className='mb-4'>
          <h3>Sign Up</h3>
          <p>Sign up to create your account and get <br /> personalized content.</p>
          <input className='form-control mb-2' type="text" placeholder='Email' />
          <button className='btn btn-info rounded border-info'>SIGN UP</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
