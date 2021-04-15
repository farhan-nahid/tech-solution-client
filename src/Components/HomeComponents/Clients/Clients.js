import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleClient from '../SingleClient/SingleClient';


const clientsData = [
    {
        id:1,
        name:'Mark Hanry',
        description:"we've been using your company and from the very beginning found him and his team to be extremely professional and knowledgeable. We wouldn't have any hesitation in recommending their services",

    },
    {
        id:2,
        name:'Billie M Boyce',
        description:"we've been using your company and from the very beginning found him and his team to be extremely professional and knowledgeable. We wouldn't have any hesitation in recommending their services",

    },
    {
        id:3,
        name:'Tonya R Sherrod',
        description:"we've been using your company and from the very beginning found him and his team to be extremely professional and knowledgeable. We wouldn't have any hesitation in recommending their services"

    },
]


const Clients = () => {
    return (
        <section className="mt-5 pt-5">
            <Container>
                <h3 className="text-center section-title">WHAT CLIENTS SAY?</h3>
                <p  className="text-muted text-center"> There are are some clients who take's our service & give us reviews</p>
                    <Row className="mt-5">
                        {
                            clientsData.map(client=> <SingleClient key={client.id} client={client} />)
                        }
                    </Row>
            </Container>
        </section>
    );
};

export default Clients;

 