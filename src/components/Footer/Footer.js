import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare,faInstagramSquare,faTwitterSquare,faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    
    return (
        
        <div className="footer-color">
            <Row>
            <Col xs={4}>
                <h4 className="color">Social Links</h4>
            <div className="icon">
               <div className="flex">
                <FontAwesomeIcon  icon ={faInstagramSquare} />
                </div>
               
                <div className="flex">
                <FontAwesomeIcon  icon ={faTwitterSquare} />
                </div>

                <div className="flex">
                <FontAwesomeIcon  icon ={faYoutube} /> 
                </div>
                  </div>  
            </Col>
            <Col xs={4}>
            <h4 className="color">Helpful Links</h4>
            <p>Service</p>
            <p>Supports</p>
            <p>Term & condition</p>
            </Col>
            <Col xs={4}>
            <h4 className="color">Address</h4>
            <p>127,Dhanmondi</p>
            <p>phone: 349583458</p>
            <p>Email: shawon567@gmail.com</p>
            <p>Bangladesh</p>
            </Col>
            </Row>
            <p>Copyright © 2007-2022</p>

        </div>
        
        
    );
};

export default Footer;
