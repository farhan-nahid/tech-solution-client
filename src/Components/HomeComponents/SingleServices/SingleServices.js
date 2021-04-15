import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleServices.css';

const SingleServices = ({service}) => {
    const {name, img, description} =service
    return (
        <Col md={4} className="p-2">
            <Card className="text-center p-4 card ">
                <img className="img-fluid" src={img} alt="..."/>
                <h5 className="mt-3 name">{name}</h5>
                <p  className="text-muted">{description}</p>
            </Card>
        </Col>
    );
};

export default SingleServices;