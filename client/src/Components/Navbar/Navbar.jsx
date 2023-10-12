import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavbaMain() {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Your Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#hire">Hire</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Nav.Link href="#our-fleets">Our Fleets</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button variant="primary">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
export default NavbaMain;
