import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
    const handleBlur = () => {
        console.log('biuzcx');
    }
    return (
        <section>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>
                <Col md={10} className=" bg-light" style={{ position: "absolute", right: 0 }}>
                <h5 className="name">Add more Admin</h5>
                    <Form className="mt-5">
                       <div className="row">
                           <Col md={6}>
                                <Form.Control onBlur={handleBlur} type="email" name='email'  placeholder="Enter Admin Email*" required/>
                           </Col>
                            <Col md={6}>
                                <Button variant="danger" type="submit" className="btn-brand"> Add Admin</Button>
                            </Col>
                       </div>
                    </Form>
                </Col>
            </Row>            
        </section>
    );
};

export default AddAdmin;