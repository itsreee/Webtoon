import React from 'react'
import { Container } from 'react-bootstrap'
const Poster = () => {
  return (
    <Container className='bg-black d-flex justify-content-center gap-5 align-items-center mt-5'>
    <div className="text-white text-center fs-20">
        <p>Subscribe to your favourite writers <br />
             and be the first one to read</p>
       <input type="text" placeholder='Enter your email address ' className='form-control border-danger bg-white ' style={{height:"50px",borderRadius:'5px'}} />
       <button className='btn btn-danger m-3'>Submit</button>
            </div>
            <div id='image'>
            <iframe className='img-fluid' width="800" height="524" src="https://www.youtube.com/embed/DtYLNWXUoKc" title="DARK MOON: THE BLOOD ALTAR (Official Trailer) | WEBTOON" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </Container>
  )
}

export default Poster