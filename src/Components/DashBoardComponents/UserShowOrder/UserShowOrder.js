import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import spinner from '../../../img/loader.gif';
import SideBar from '../SideBar/SideBar';
import UserSingleOrder from './UserSingleOrder';

const UserShowOrder = () => {

    const [orders, setOrders] = useState([]);
     const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
     
     useEffect(()=>{
         fetch('https://tech-solution-farhan.herokuapp.com/order?email='+loggedInUser.email,{
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify()
            })
         .then(res => res.json())
         .then(data =>setOrders(data))
     },[loggedInUser])

     console.log(orders)
    return (
        <section className="row">
            <Col md={2}>
                <SideBar />
            </Col>
            <Col md={10} className=" bg-light" style={{ position: "absolute", right: 0 }}>  
                <div className="d-flex justify-content-between pt-5 name">
                    <h3>Your Order Summery</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                    <Row className="mt-3 pt-5">
                        {
                            orders.length > 0 ?
                            orders.map(order => <UserSingleOrder key={order._id}  order={order} />)
                            :
                            <img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt="..."/>  
                        }
                    </Row>
            </Col>
</section>
    );
};

export default UserShowOrder;