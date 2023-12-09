import React, { useState } from 'react'
import '../header/header.css'
import { Nav, Container, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png';

const Header = () => {

    const [nav, setNav] = useState();

    const changeValueOnScroll = () => {
        const scrollValue = document.documentElement.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false);
    }
    window.addEventListener("scroll", changeValueOnScroll);


    return (
        <header>
            <Navbar expand="lg" className={`${nav === true ? "sticky" : ""}`}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className='img-fluid' alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#explore">Explore</Nav.Link>
                            <Nav.Link href="#review">Review</Nav.Link>
                            <Nav.Link href="#faq">FAQ</Nav.Link>
                            <button className='main-btn ms-3'>1200 123 145</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header
