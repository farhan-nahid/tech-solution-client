import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import spinner from '../../../img/loader.gif';
import SingleServices from '../SingleServices/SingleServices';
const Services = () => {

const [services, setServices] = useState([])
  
useEffect(()=>{
    fetch('https://tech-solution-farhan.herokuapp.com/services',{
        headers:{
            'Content-Type':'Application/json'
        },
        body:JSON.stringify()
        })
    .then(res => res.json())
    .then(data => setServices(data))
},[])

    return (
        <section className="mt-5 pt-5 pb-5 bg-light">
            <Container>
                <h3 className="text-center section-title">OUR SERVICES</h3>
                <p  className="text-muted text-center">There are many valid reasons why you should choose us to take care of your valuable device</p>
                    <Row className="mt-5">
                        {
                            services.length > 0 ?  services.map(service => <SingleServices key={service._id} service={service} />)
                            :
                            <img style={{width:'30%'}} className="text-center m-auto" src={spinner} alt="..."/>  
                        }
                    </Row>
            </Container>
        </section>
        
    );
};

export default Services;