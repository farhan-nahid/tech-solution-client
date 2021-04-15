import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import airbnb from '../../../img/airbnb.png';
import google from '../../../img/google.png';
import netflix from '../../../img/netflix.png';
import slack from '../../../img/slack.png';
import uber from '../../../img/uber.png';

 
const Partners = () => {
    return (
        <section>
            <Container className='my-5'>
                <Row xs={12} className='justify-content-around align-items-center '>
                    <Col className='text-center mt-4' xs={6} md={2}><img style={{width:'100px'}} src={slack} alt=""/></Col>
                    <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={google} alt=""/></Col>
                    <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={uber} alt=""/></Col>
                    <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={netflix} alt=""/></Col>
                    <Col className='text-center  mt-4' xs={6} md={2}><img style={{width:'100px'}} src={airbnb} alt=""/></Col>
                </Row>
            </Container>
        </section>
    );
};

export default Partners;