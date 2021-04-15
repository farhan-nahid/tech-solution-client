import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const DashBoard = () => {
    return (
        <section>
                <Row>
                    <Col md={3}>
                        <SideBar />
                    </Col>
                    <Col md={7} className="offset-md-1">

                    </Col>
                </Row>
        </section>
    );
};

export default DashBoard;