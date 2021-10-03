import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';
import school from '../images/school.jpg'
const About = () => {
    return (
        <div>
          <Container>
          <Row>
            <Col xs={6}>
            <img className="size" src={school} alt="" />
            </Col>
           <Col xs={6}>
           <h3 className="margintop">Founded to accelerate the nation’s industrial revolution, MIT is profoundly American. With ingenuity and drive, our graduates have invented fundamental technologies, launched new industries, and created millions of American jobs. At the same time, and without the slightest sense of contradiction, MIT is profoundly global. Our community gains tremendous strength as a magnet for talent from around the world. Through teaching, research, and innovation, MIT’s exceptional community pursues its mission of service to the nation and the world.</h3>
          </Col>
          </Row>
          </Container>
           </div>
    );
};

export default About;