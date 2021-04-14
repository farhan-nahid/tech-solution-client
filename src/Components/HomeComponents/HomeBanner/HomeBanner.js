import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import repair from '../../../img/mobile.jpg';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <Container>
            <Row className="p-5">
                <Col md={6} className="mt-4 d-flex justify-content-center">
                    <div>
                    <h1 className="section-title">WE’RE FINDING SOLUTIONS <br/> FOR YOUR PROBLEMS</h1>
                    <p  className="text-muted">Our repair technicians have a wealth of experience repairing mobile devices and  diagnosing wealth of great thing experience repairing errors.</p>
                    <Button variant='danger' className="btn-brand">Learn More</Button>
                    </div>
                </Col>
                <Col md={5} className="offset-md-1 mt-4">
                <img  className="img-fluid" src={repair} alt=""/>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeBanner;