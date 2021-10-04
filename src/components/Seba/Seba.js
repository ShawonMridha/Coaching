import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Seba.css'

const Seba = (props) => {
    const{service, description,img}=props.data;
    return (
       <div className="service">
          <Container className="border">
          <Row className="margin">
           <Col xs={6}>
             <h3>{service}</h3>
             <p>{description}</p>
            </Col>
           <Col xs={6}>
              <img className="small" src={img} alt="" />
           </Col>
           </Row>
          </Container>

          
          <Container className="border">
          <Row className="margin">
           <Col xs={6}>
           <img className="small" src={img} alt="" />
             
            </Col>
           <Col xs={6}>
           <h3>{service}</h3>
             <p>{description}</p>
           </Col>
           </Row>
          </Container>
       </div>
       
    );
};

export default Seba;