import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import SideBar from '../SideBar/SideBar';



const Order = () => {
    const {id} = useParams()

  const [orderCheckout, setOrderCheckout] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
 // console.log(orderCheckout);
  const {name, price} =orderCheckout;

    useEffect(()=>{
        const url= `http://localhost:5000/services/${id}`
     //   console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setOrderCheckout(data))
    },[id])

    /*const handleOrderCheckout = () => {
        const newOrder = {...loggedInUser, ...orderCheckout}
        delete newOrder._id
        fetch('http://localhost:5000/orderCheckout', {
            method : 'POST',
            headers:{ 
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        window.alert("We Received Your Order Successfully")
    }*/

    return (
        <section className="row">
             <Col md={2}>
                 <SideBar />
            </Col>
            <Col md={10} className=" bg-light" style={{ position: "absolute", right: 0,  }}>

                    <div className="d-flex justify-content-between pt-5 name">
                        <h3>Orders</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                <Form className="mt-5 pt-5">
                     <Form.Group controlId="formBasicName">
                        <Form.Control value={loggedInUser.name} type="text" name='name' placeholder="Enter Your Name*" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control value={loggedInUser.email} name='name' placeholder="Enter Your Email*" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicService">
                        <Form.Control value={name} type="text" name='name' placeholder="Enter Service Name*" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPrice">
                        <Form.Control value={price} type="number" name='price' placeholder="Enter Service Charge*" required/>
                    </Form.Group>
                    <ProcessPayment />
                    <Button variant="danger" className="mt-3 float-right btn-brand">Pay Now</Button>
                </Form>
               
            </Col>
        </section>
    );
};

export default Order;