import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = ({img,title}) => {
  return (
    <>
    <Card style={{ width: '230px',zIndex:"1"}}>
    <Card.Img style={{height:'350px'}}  variant="top" src={img}/>
    <Card.Body>
      <Card.Title style={{color:'white'}}>{title}</Card.Title>
    </Card.Body>
  </Card>
  </>
  )
}

export default Cards