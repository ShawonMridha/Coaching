import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useState } from 'react/cjs/react.development';
import Show from '../Show/Show';

const Data = () => {
    const [meal, setMeal]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=>setMeal(data))
    },[])
    return (
        <div>
            <h3>hello:{meal.length}</h3>
 <Row xs={1} md={3} className="g-4">
 {
     meal.map(card=> <Show cards={card}></Show>)
     }
</Row>
           
          
          
        </div>
    );
};

export default Data;