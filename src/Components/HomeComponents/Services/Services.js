import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Laptop from '../../../img/laptop.jpg';
import data from '../../../img/mobile.jpg';
import pc from '../../../img/pc.jpg';
import phone from '../../../img/phone.jpg';
import tab from '../../../img/tab.jpg';
import SingleServices from '../SingleServices/SingleServices';

const Services = () => {
   
const servicesData = [

    {
        id:1,
        name:'PC & MAC Computers',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:pc

    },
    {
        id:2,
        name:'Laptop Macbook Repair',
        description:'Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Laptop

    },
    {
        id:3,
        name:'Smartphone Repair',
        description:'Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:phone

    },
    {
        id:4,
        name:'Tablet – IPad Repair',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:tab

    },
    {
        id:5,
        name:'Data Recovery',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:data

    },
    {
        id:6,
        name:'Console Repair',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:pc

    }
]

    return (
        <section className="mt-5 pt-5">
            <Container>
                <h3 className="text-center section-title">OUR SERVICES</h3>
                <p  className="text-muted text-center">There are many valid reasons why you should choose us to take care of your valuable device</p>
                    <Row className="mt-5">
                        {
                            servicesData.map(service => <SingleServices key={service.id} service={service} />)
                        }
                    </Row>
            </Container>
        </section>
        
    );
};

export default Services;