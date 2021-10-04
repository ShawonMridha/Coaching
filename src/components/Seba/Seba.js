import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import './Seba.css'

const Seba = (props) => {
    const{service, description,img,tk}=props.data;
    return (
         <Col>
       <Card>
         {/* <Card.Img  className="small" variant="top" src={img}  /> */}
         <Image className="small" src={img} fluid />
         <Card.Body>
           <Card.Title>{service}</Card.Title>
           <h4>Course Price:{tk}</h4>
           <Card.Text>
             {description}
           </Card.Text>
         </Card.Body>
       </Card>
     </Col>
       
    );
};

export default Seba;