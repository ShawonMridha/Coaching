import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import './Show.css'

const Show = (props) => {
    const{img, service, tk}=props.cards
    return (
        <Col>
      <Card>
        {/* <Card.Img  className="small" variant="top" src={img}  /> */}
        <Image className="small" src={img} fluid />
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <Card.Text>
            {tk}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Show;