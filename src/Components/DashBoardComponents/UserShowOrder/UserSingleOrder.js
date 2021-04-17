import React from 'react';
import { Col } from 'react-bootstrap';
import './UserSingleOrder.css';

const UserSingleOrder = ({order}) => {
    const {name, email, price} = order
    return (
        <Col md={6}>
           <div className="d-flex justify-content-between mt-3 p-4 order-card">
               <div>
                    <h6> Service Name :  { name}</h6>
                    <h6>Price : {price}</h6>
                    <p>Email : {email}</p>
               </div>
               <div>
                   <span className="bg-danger p-1">Pending</span>
               </div>
           </div>
        </Col>
    );
};

export default UserSingleOrder;