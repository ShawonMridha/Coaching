import React from 'react';
import './About.css'
import { Col, Container, Row } from 'react-bootstrap';
import school from '../images/school.jpg'
const About = () => {
    return (
        <div>
         <div className="about-design">
         <h2>About/Contact US</h2>
          <p>Meet the People Behind shawon.org</p>
         </div>
         <div className="distance">
           <h3 className="color-pick">About US</h3>
           <p>We’re a small team who are all sharing mutual passion for learning education</p>
           <p>We’re all working remotely and enjoying it since 2013</p>
         </div>
         <div className="distance">
           <h3 className="text-color" >OUR MISSION</h3>
           <p>Alwys, we try to give good lession and every student become her goal</p>
         </div>
          <Container>
          <Row>
            <Col xs={6}>
            <img className="size" src={school} alt="" />
            </Col>
           <Col xs={6}>
           <h3 className="margintop">Pabna, Rajshahi, Bangladesh · Accounting, Management, English and Bangla Lecturer · FC University Admission Coaching
          Admission CoachingUniversity of Dhaka ... Activities and Societies: Jhitka Prodipto Chatra kalyan Porsod Human Shadow Foundation ... .</h3>
          </Col> 
          </Row>
          </Container>
          <Container>
            <h4  className="color-pick"> Follow Our Course</h4>
          </Container>
           </div>
    );
};

export default About;