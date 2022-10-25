import React from 'react';
import './LogoutPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';

export const LogoutPage = () => {
  return (
    <div className='logoutBackground'>
      <NavBar />
      <Container>
        <p className="lead logout-text">Successfully logged out. Returning to home page in 3 seconds...</p>


        <Footer />
      </Container>
    </div>
  )
}
