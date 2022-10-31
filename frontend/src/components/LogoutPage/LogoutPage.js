import React from 'react';
import './LogoutPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


export const LogoutPage = () => {

  let navigate = useNavigate();

  const logout = () => {
    Cookies.remove('nexopedia-token');
    const waitSeconds = setTimeout(redirectPage, 3000);
  }

  const redirectPage = () => {
    navigate('/');
  }

  logout();

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
