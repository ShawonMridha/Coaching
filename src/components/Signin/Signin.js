import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import event from '../images/events.jpg'
import './Signin.css'

const Signin = () => {
    return (
        <div>
             <Container>
          <div>
           <Row>
               <Col xs={6}>
                 <div className="align">
                 <h3 className="events-color">Upcoming Events: </h3>
                 <h5>1. Free class for Three days.</h5>
                 <h5>2. Course Fee 50% Discount.</h5>
                 <h5>3. Quiz exam for free book</h5>
                 <h5>4. Library fee free</h5>
                 <h5>5. Special English corurse 80% discount </h5>
                 </div>
               </Col>
               <Col xs={6}>
               <img className="size" src={event} alt="" />
               </Col>
           </Row>
           </div>
          </Container>
         <Container>
         <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Password
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
      </Form.Label>
     
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
     
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button className="primary" type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
         </Container>
        </div>
    );
};

export default Signin;