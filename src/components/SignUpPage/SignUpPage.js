import React, { useState } from 'react';
import './SignUpPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';
import { server_calls } from '../../api';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    server_calls.signup(email, password).then(
      function() {
        navigate('/');
      }
    );
  }
  return (
    <div className='signupBackground'>
      <NavBar />
      <Container>
        <h1 className='display-3 signup-header text-center'>Sign Up</h1>

        {/* Sign Up Form */}
        <div className="signup-form-container mx-auto">
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email address</label>
              <input 
                type='email' 
                className='form-control' 
                id='email' 
                aria-describedby='emailHelp' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              <div id='emailHelp' className='form-text'>We'll never share your email with anyone else.</div>
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input 
                type='password' 
                className='form-control' 
                id='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-primary'>Submit</button>
          </form>
        </div>

        <Footer />
      </Container>
    </div>
  )
}
