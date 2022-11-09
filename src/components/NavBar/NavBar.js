import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cookies from 'js-cookie';

export const NavBar = () => {
    const [link1, setLink1] = useState([]);
    const [link2, setLink2] = useState([]);

    const updateLinks = async () => {
        if (Cookies.get('nexopedia-token')) {
            setLink1( {
                'link': '/profile',
                'page': 'Profile'
            });
            setLink2( {
                'link' : '/logout',
                'page': 'Logout'
            });
        } else {
            setLink1( {
                'link': '/sign-in',
                'page': 'Sign In'
            });
            setLink2( {
                'link' : '/sign-up',
                'page': 'Sign Up'
            });
        }
    }

    useEffect( () => {
        updateLinks();
    }, []);

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
                            <Nav.Link href={link1.link}>{link1.page}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={link2.link}>{link2.page}</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/logout">Logout</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
