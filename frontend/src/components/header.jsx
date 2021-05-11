import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

const header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand href="#home">ONLINE SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">
                            <i className="fas fa-shopping-cart"></i>
                            &nbsp; CART
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <i className="fas fa-user"></i>
                            &nbsp; SIGNIN
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default header;