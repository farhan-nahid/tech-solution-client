import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import spinner from '../../../img/loader.gif';
import AdminSingleOrder from '../AdminSingleOrder/AdminSingleOrder';
import SideBar from '../SideBar/SideBar';

const AllOrders = () => {
    const [Orders, setOrders] = useState([])
  
useEffect(()=>{
    fetch('https://tech-solution-farhan.herokuapp.com/allOrders',{
        headers:{
            'Content-Type':'Application/json'
        },
        body:JSON.stringify()
        })
    .then(res => res.json())
    .then(data => setOrders(data))
},[])

    return (
        <Row>
             <Col md={2}>
                <SideBar />
             </Col>
             <Col md={10}>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email Address</th>
                                <th className="text-secondary" scope="col">Service Name</th>
                                <th className="text-secondary" scope="col">Price</th>
                                <th className="text-secondary" scope="col">Action</th>
                            </tr>
                        </thead>
                            {
                                Orders.length > 0 ?
                                Orders.map(order => <AdminSingleOrder key={order._id}  order={order}/>)
                                :
                                <img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt="..."/>  
                            }
                    </table>
                </Col>
          </Row>
    );
};

export default AllOrders;