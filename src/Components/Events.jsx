import React from 'react'
import { Carousel,Container } from 'react-bootstrap';
const Events = () => {
  return (
    <Container className='mb-5 '>
        <h1 className='text-white'>Ongoing Events
        </h1>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'500px'}}
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/529353149683957.62ebd18891acf.gif"
          alt="First slide"
        />
        <Carousel.Caption className="text-black">
        <h1>Webtoon Canvas</h1>
        <h3>Create your own webtoon</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:'500px'}} 
          className="d-block w-100"
          src="https://acegif.com/wp-content/uploads/gifs/coin-flip-33.gif"
          alt="Second slide"
        />
        <Carousel.Caption className='text-black'>
          <h1>Webtoon Coins</h1>
          <h3>Get free coins to watch premium stories</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Events