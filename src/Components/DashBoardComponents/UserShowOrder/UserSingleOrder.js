import React from 'react';
import { Col } from 'react-bootstrap';
import './UserSingleOrder.css';

const UserSingleOrder = ({order}) => {
    const { email, location, service, paymentId,status} = order
    
    return (
        <Col md={6}>
           <div className="d-flex justify-content-between mt-3 pt-4 pl-4 pr-4 order-card">
               <div>
                    <p>Email : {email}</p>
                    <p>Service : {service}</p>
                    <p>Location : {location}</p>
                   <p>Payment Id : {paymentId}</p>
               </div>
               <div>
                   <span className=" bg-white p-3 text-muted">{status}</span>
               </div>
           </div>
        </Col>
    );
};

export default UserSingleOrder;