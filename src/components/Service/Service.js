import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
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
             <Row>
             {
                services.map(service=> <Seba data={service}></Seba>)
            }
            </Row>
            
        </div>
    );
};

export default Service;