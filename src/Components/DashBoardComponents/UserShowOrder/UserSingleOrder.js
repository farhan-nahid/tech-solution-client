import React from 'react';
import { Col } from 'react-bootstrap';
import './UserSingleOrder.css';

const UserSingleOrder = ({order}) => {
    const {name, email, location, service, paymentId} = order
    
    return (
        <Col md={6}>
           <div className="d-flex justify-content-between mt-3 pt-4 pl-4 pr-4 order-card">
               <div>
                    <h6>User Name :  { name}</h6>
                    <p>Email : {email}</p>
                    <p>Service : {service}</p>
                    <p>Location : {location}</p>
                   <p>Payment Id : {paymentId}</p>
               </div>
               <div>
                   <span className="bg-danger p-1">Pending</span>
               </div>
           </div>
        </Col>
    );
};

export default UserSingleOrder;