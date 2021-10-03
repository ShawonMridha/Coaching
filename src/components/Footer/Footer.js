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
            <h2> this is footer</h2>
            </Col>
            <Col xs={4}>
            <h2> this is footer</h2>
            </Col>
            </Row>
            <p>Copyright © 2007-2022</p>

        </div>
        
        
    );
};

export default Footer;
