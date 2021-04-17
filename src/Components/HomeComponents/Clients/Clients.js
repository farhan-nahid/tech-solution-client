import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import spinner from '../../../img/loader.gif';
import SingleClient from '../SingleClient/SingleClient';


const Clients = () => {
    const [clientReview, srtClientReview] = useState([])
  
useEffect(()=>{
    fetch('http://localhost:5000/review',{
        headers:{
            'Content-Type':'Application/json'
        },
        body:JSON.stringify()
        })
    .then(res => res.json())
    .then(data => srtClientReview(data))
},[])

    return (
        <section className="mt-5 pt-5">
            <Container>
                <h3 className="text-center section-title">WHAT CLIENTS SAY?</h3>
                <p  className="text-muted text-center"> There are are some clients who take's our service & give us reviews</p>
                    <Row className="mt-5">
                        {
                            clientReview.length > 0 ?
                            clientReview.map(review=> <SingleClient key={review.id} review={review} />)
                            :
                            <img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt="..."/>  
                        }
                    </Row>
            </Container>
        </section>
    );
};

export default Clients;

 