import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Clients from '../Clients/Clients';
import Header from '../Header/Header';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Slider from '../Slider/Slider';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header />
            <Skills />
            <Services />
            <Slider />
            <Clients />
            <Partners />
            <Footer />
        </>
    );
};

export default Home;