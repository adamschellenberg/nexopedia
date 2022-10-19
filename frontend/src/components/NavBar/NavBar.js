import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <div>
        <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#">Nexopedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/database">Database</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/guides">Guides</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/items">Items</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="/locations">Locations</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link href="/sign-in">Sign In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
