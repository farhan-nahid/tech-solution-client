import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './SingleServices.css';

const SingleServices = ({service}) => {
    const {name,  textArea, price, _id} =service

    const history = useHistory();
    const handleOrder = () => {
        history.push(`/dashboard/order/${_id}`)
    }
    
    return (
        <Col md={4} className="p-2">
            <Card className="text-center p-4 card ">
            {
            service.image ? <img  src={`data:image/png;base64,${service.image.img}`}/>
            :
            <img  className="img-fluid mb-3" src={`https://tech-solution-farhan.herokuapp.com/${service.img}`} alt=""/>
        }
                <h5 className="mt-3 name">{name}</h5>
                <p  className="text-muted">{textArea}</p>
                
                <div className="d-flex justify-content-between">
                    <h4 className="name">৳{price}</h4>
                    <Button variant='danger' onClick={()=>handleOrder()} className="btn-brand">Repair Now</Button>
                </div>
            </Card>
        </Col>
    );
};

export default SingleServices;