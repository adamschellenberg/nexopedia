import React from 'react';
import { NavBar } from '../NavBar';
import './HomePage.css';
import Container from 'react-bootstrap/Container';
import Masquiti from '../../assets/images/masquiti.png';
import { Footer } from '../Footer';

export const HomePage = () => {
  return (
    <div>
      <div className="homeBackground"/>
      <NavBar />
      <Container>
        <div className="main">
          <div><h1>Welcome to Nexopdia</h1></div>
          <hr />
          <div>Nexopedia is a fan-made wiki for the Nexomon: Extinction game.
            Because this website is fully developed and maintained by fans in their
            free time, things are always chaning and being updated. If there is
            incorrect or missing information, please let us know at nexopedia@gmail.com
            and let us know! All help and feedback is appreciated! Check back
            often to see the new updates!
            <br />
            Happy taming!
          </div>
          <hr />
          <img src={Masquiti} className="img" alt="Masquiti"/>
        </div>
        <Footer />
      </Container>
    </div>
  )
}