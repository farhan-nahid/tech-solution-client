import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Affordable from '../../../img/Affordable .png';
import Excellent from '../../../img/Excellent .png';
import Friendly from '../../../img/Friendly.png';
import Professionals from '../../../img/Professionals.png';
import Technical from '../../../img/Technical .png';
import Trustworthy from '../../../img/Trustworthy.png';
import SingleSkill from '../SingleSkill/SingleSkill';


const skillsData = [

    {
        id:1,
        name:'Experienced Professionals',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Professionals

    },
    {
        id:2,
        name:'Expert Technical Skills',
        description:'Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Technical

    },
    {
        id:3,
        name:'Trustworthy See Reviews',
        description:'Our Technical has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Trustworthy

    },
    {
        id:4,
        name:'Friendly Service',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Friendly

    },
    {
        id:5,
        name:'Excellent Reputation',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Excellent

    },
    {
        id:6,
        name:'Affordable Diagnosis',
        description:'Our business has been built on trust and customer satisfaction Our business has been built on trust and customer satisfaction satisfaction',
        img:Affordable

    }
]

const Skills = () => {
    return (
        <section className="mt-5 pt-5">
            <Container>
                <h3 className="text-center section-title">WHY CHOOSE US</h3>
                <p className="text-center text-muted">There are many valid reasons why you should choose us to take care of your valuable device</p>
                    <Row className="mt-5">
                        {
                            skillsData.map(skill => <SingleSkill key={skill.id} skill={skill} />)
                        }
                    </Row>

            </Container>
            
        </section>
    );
};

export default Skills;