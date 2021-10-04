import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useState } from 'react/cjs/react.development';
import Show from '../Show/Show';

const Home = () => {
    const[cards, setCards] =useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[]);
    return (
        <div>
         <Container>
         <Row xs={1} md={3} className="g-4">
         {
              cards.map(card=> <Show cards={card}></Show>)
         }
        </Row>
         </Container>
        </div>
    );
};

export default Home;