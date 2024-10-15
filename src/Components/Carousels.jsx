import React from 'react';
import { Carousel } from 'react-bootstrap';
const Carousels = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'700px'}}
          src="https://webtoons-static.pstatic.net/image/pc/home/og_id.jpg?dt=2020081801"
          alt="First slide"
        />
        <Carousel.Caption className="text-black">
          <h1>WEBTOON</h1>
          <h3>Choose your favourite Webtoons!!</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:'700px'}} 
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/2353657.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='text-black'>
          <h1>Trending Stories</h1>
          <h3>See Whats Trending Today!!</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:'700px'}}
          src="https://cdn.newswire.com/files/x/e7/71/57754aa863631cebe55470e27f92.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="text-black">
          <h1>Surf Through Different Geners</h1>
          <h3>Binge Watch Popular Geners!!
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
