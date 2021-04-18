import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleClient.css';

const SingleClient = ({review}) => {
    const {name, description, companyName, img} = review
    
    return (
        <Col md={4} className="p-2">
            <div className=" review p-3"> 
             <div className="d-flex">
                <div className="img">
                    <img className="user-img" src={img} alt="..."/>
                </div>
                <div className="client-information ml-3">
                    <h6>{name}</h6>
                    <p>{companyName}</p>
                </div>
            </div>
                <p className="text-muted mt-3">{description}</p>
            </div>
        </Col>
    );
};

export default SingleClient;