import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import spinner from '../../../img/loader.gif';
import SideBar from '../SideBar/SideBar';
import ManageServiceCard from './ManageServiceCard';

const ManageServices = () => {
    const [services, setServices] = useState([])
   // console.log(services);
  
      useEffect(()=>{
          fetch(`https://tech-solution-farhan.herokuapp.com/services`,{
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify()
            })
          .then (res => res.json())
          .then(data => setServices(data))
      },[])
    return (
        <section>
            <Row>
                <Col md={2}>
                    <SideBar />
                </Col>

                <Col md={10} className=" bg-light row" style={{ position: "absolute", right: 0 }}>
                    
                        {
                            services.length >0 ?  services.map(service =>  <ManageServiceCard service={service} />)
                            :<img style={{width:'200px'}} className="text-center" src={spinner} alt="..."/>   
                        }
                </Col>
            </Row>
        </section>
    );
};

export default ManageServices;