import React from 'react';
import './SignUpPage.css';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const SignUpPage = () => {
  return (
    <div className='signupBackground'>
      <NavBar />
      <Container>
        <h1 className='display-3 signup-header text-center'>Sign Up</h1>

        {/* Sign Up Form */}
        <div className="signup-form-container mx-auto">
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
              Sign Up
            </Button>
          </Form>
        </div>

        <Footer />
      </Container>
    </div>
  )
}
