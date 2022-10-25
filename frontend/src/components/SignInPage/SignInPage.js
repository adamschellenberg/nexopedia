import React from 'react';
import './SignInPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const SignInPage = () => {
  return (
    <div className="signinBackground">
      <NavBar />
      <Container>
        <h1 className='display-3 signin-header text-center'>Sign In</h1>
        
        {/* Sign In Form */}
        <div className="signin-form-container mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="signInEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="signInPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
        </div>

        <Footer />
      </Container>
    </div>
  )
}
