import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Seba from '../Seba/Seba';

const Service = () => {
    const[services, setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeService.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
           <Container>
           <Row xs={1} md={3} className="g-4">
             {
                services.map(service=> <Seba data={service}></Seba>)
            }
            </Row>
          </Container> 
        </div>
    );
};

export default Service;