import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { server_calls } from '../../api';
import Cookies from 'js-cookie';
import { useGetData } from '../../custom-hooks';

export const ProfilePage = () => {

  let avatarList = [
    'acegon-follower.png',
    'blizstrong-follower.png',
    'cruff-follower.png',
    'dinja-follower.png',
    'dreddiful-follower.png',
    'fortle-follower.png',
    'gekoko-follower.png',
    'glidlee-follower.png',
    'holoch-follower.png',
    'imburion-follower.png',
    'lioness-follower.png',
    'lume-follower.png',
    'lunabelle-follower.png',
    'mailtress-follower.png',
    'mara-follower.png',
    'masquiti-follower.png',
    'mearn-follower.png',
    'mermella-follower.png',
    'minet-follower.png',
    'moonica-follower.png',
    'noki-follower.png',
    'paupo-follower.png',
    'raksuma-follower.png',
    'sandillo-follower.png',
    'spektar-follower.png',
    'vodo-follower.png',
    'wargoyle-follower.png',
    'woozy-follower.png',
    'zumble-follower.png'
  ]
  
  const [ userAvatar, setUserAvatar ] = useState('');

  const getUserAvatar = async () => {
    const result = await useGetData.useUserAvatar();
    const base_url = "avatars/"
    let url = base_url + result.avatar;
    setUserAvatar(url);
  }

  useEffect( () => {
    getUserAvatar();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ selectedAvatar, setSelectedAvatar ] = useState('');

  const handleUpdate = (event) => {
    let token = Cookies.get('nexopedia-token');
    server_calls.updateAvatar(token, selectedAvatar)
      .then(function() {window.location.reload(false)});
    setShow(false);
  }

  const handleRadioChange = (event) => {
    event.preventDefault();
    setSelectedAvatar(event.target.value);
  }

  return (
    <div className='profileBackground'>
      <NavBar />
      <Container>
        <h1 className='display-3 profile-header text-center'>Profile</h1>

        <div className="avatar-container border rounded bg-light">
          <img src={userAvatar} alt='avatar' />
        </div>
        
        <Button variant="info" onClick={handleShow}>
            Change Avatar
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          scrollable
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Choose Your Avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <img src="avatars/acegon-follower.png"></img> */}
            {
              avatarList.map( avatar => {
                let avatarUrl = "avatars/" + avatar;
                return (
                  <div onChange={handleRadioChange} className="avatarImgDiv">
                    <img src={avatarUrl}></img>
                    <input type="radio" name="avatarImg" value={avatar}/>
                  </div>
                )
              })
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleUpdate}>Update</Button>
          </Modal.Footer>
        </Modal>
        <Footer />
      </Container>
    </div>
  )
}
