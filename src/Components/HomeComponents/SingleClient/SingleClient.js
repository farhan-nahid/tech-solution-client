import React from 'react';
import { Col } from 'react-bootstrap';

const SingleClient = ({review}) => {
    const {name, description, companyName} = review
    return (
        <Col md={4} className="p-2">
            <div className="text-center review p-4 ">  
                <h5>{name}</h5>
                <h6>{companyName}</h6>
                <p>{description}</p>
            </div>
        </Col>
    );
};

export default SingleClient;