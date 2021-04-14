import React from 'react';
import { Col } from 'react-bootstrap';
import './SingleSkill.css';

const SingleSkill = ({skill}) => {
    const {name, img, description} = skill

    return (
        <Col md={4} className="p-2">
            <div className="text-center p-4 skill-card ">
                <img className="icon" src={img} alt=""/>
                <h5 className="mt-3 name">{name}</h5>
                <p  className="text-muted">{description}</p>
            </div>
        </Col>
    );
};

export default SingleSkill;