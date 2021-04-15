import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleClient = ({client}) => {
    const {name, description} = client
    return (
        <Col md={4} className="p-2">
            <Card className="text-center p-4 ">
                <p>{description}</p>
                <h6>{name}</h6>
            </Card>
        </Col>
    );
};

export default SingleClient;