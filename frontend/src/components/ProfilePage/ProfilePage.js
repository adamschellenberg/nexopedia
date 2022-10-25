import React from 'react';
import './ProfilePage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const ProfilePage = () => {
  let playerAvatar = "avatars/dinja-follower.png";

  return (
    <div className='profileBackground'>
      <NavBar />
      <Container>
        <h1 className='display-3 profile-header text-center'>Profile</h1>

        <div className="avatar-container border rounded bg-light">
          <img src={playerAvatar} alt="avatar"></img>
        </div>
        
        <Button variant="info" type="submit">
            Change Avatar
        </Button>

        <Footer />
      </Container>
    </div>
  )
}
