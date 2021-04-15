import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Laptop from '../../../img/laptop.png';
import data from '../../../img/mobile.png';
import pc from '../../../img/pc.png';
import phone from '../../../img/phone.png';
import tab from '../../../img/tab.png';
import SingleServices from '../SingleServices/SingleServices';

const Services = () => {
   
const servicesData = [

    {
        id:1,
        name:'PC & MAC Computers',
        price:'20000',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:pc

    },
    {
        id:2,
        name:'Laptop Macbook Repair',
        price:'15000',
        description:'Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Laptop

    },
    {
        id:3,
        name:'Smartphone Repair',
        price:'8000',
        description:'Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:phone

    },
    {
        id:4,
        name:'Tablet – IPad Repair',
        price:'10000',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:tab

    },
    {
        id:5,
        name:'Data Recovery',
        price:'5000',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:data

    },
    {
        id:6,
        name:'Console Repair',
        price:'9000',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:pc

    }
]

    return (
        <section className="mt-5 pt-5 pb-5 bg-light">
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