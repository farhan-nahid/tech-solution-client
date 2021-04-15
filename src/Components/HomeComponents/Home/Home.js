import React from 'react';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Partners from '../Partners/Partners';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Slider from '../Slider/Slider';

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