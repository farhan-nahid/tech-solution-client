import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import NavBar from '../NavBar/NavBar';
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