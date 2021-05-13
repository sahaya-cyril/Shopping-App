import React from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>ONLINE SHOP</Navbar.Brand>
                </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <i className="fas fa-shopping-cart"></i>
                            &nbsp; CART
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signin">
                        <Nav.Link>
                            <i className="fas fa-user"></i>
                            &nbsp; SIGNIN
                        </Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default header;