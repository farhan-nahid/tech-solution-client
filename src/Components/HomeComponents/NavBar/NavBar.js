import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="#home"> <span className="title">Smart Fix </span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link href="#home"  className="mr-3 nav-items">Home</Nav.Link>
            <Nav.Link href="#link"  className="mr-3 nav-items">About</Nav.Link>
            <Nav.Link href="#home"  className="mr-3 nav-items">Services</Nav.Link>
            <Nav.Link href="#home"  className="mr-3 nav-items">Clients</Nav.Link>
            <Nav.Link href="#link"  className="mr-3 nav-items">Contact</Nav.Link>
            <Button variant="danger" className="btn-brand mr-3">Login</Button>
          </Nav>  
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;