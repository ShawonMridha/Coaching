import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Show.css'

const Show = (props) => {
    const{img, service, tk}=props.cards
    return (
        <Col>
      <Card>
        <Card.Img className="small" variant="top" src={img} />
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