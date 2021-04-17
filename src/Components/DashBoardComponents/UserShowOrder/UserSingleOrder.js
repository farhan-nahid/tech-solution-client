import React from 'react';
import { Col } from 'react-bootstrap';
import './UserSingleOrder.css';

const UserSingleOrder = ({order}) => {
    const {name, email, price, service, paymentId} = order
    return (
        <Col md={6}>
           <div className="d-flex justify-content-between mt-3 p-4 order-card">
               <div>
                    <h6>User Name :  { name}</h6>
                    <p>Email : {email}</p>
                    <p>Price : {price}</p>
                    <p>Service : {service}</p>
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