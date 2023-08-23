import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBarr.css'

const NavBarr = () => {
    return (
            <Navbar style={{ backgroundColor: "#27a6a9" }} expand="lg">
                <Container>
                    {/* Logo */}
                    <Navbar.Brand href="#" style={{ color: "white" }}>MedStore</Navbar.Brand>

                    {/* Search Bar */}
                    <Form className="d-flex">
                        <FormControl type="search" placeholder="Search For Medical Stores Nera You..." className="mr-2" />
                        <Button variant="success">Search</Button>
                    </Form>

                    {/* Offer */}
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faTag} className="navbar-icon" />
                        {/* <img src="offer-logo.png" alt="Offer" className="navbar-icon" /> */}
                        <span>Offer</span>
                    </Nav.Link>

                    {/* Cart */}
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faShoppingCart} className="navbar-icon" />
                        {/* <img src="cart-logo.png" alt="Cart" className="navbar-icon" /> */}
                        <span>Cart</span>
                    </Nav.Link>

                    {/* Sign In/Sign Up */}
                    <Nav.Link href="#">
                        <FontAwesomeIcon icon={faUser} className="navbar-icon" />
                        {/* <img src="user-logo.png" alt="Sign in / Sign up" className="navbar-icon" /> */}
                        <span>Sign In / Sign Up</span>
                    </Nav.Link>
                </Container>
            </Navbar>
    )
}

export default NavBarr