import React from 'react';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import HomeBanner from '../HomeBanner/HomeBanner';
import './Header.css';

const Header = () => {
    return (
        <section className="bg-light">
            <NavBar />
            <HomeBanner />
        </section>
    );
};

export default Header;