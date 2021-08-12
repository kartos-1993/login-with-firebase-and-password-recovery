import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import {Link} from "react-router-dom"

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp} = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Password Donot match")
    }
     try{
       setError('')
       setLoading(true)
     await signUp(emailRef.current.value, passwordRef.current.value);
    }catch{
      setError("Failed to create an account")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="mb-4 text-center">Sign Up</h2>
          {/* {currentUser && currentUser.email} */}
          {error && <Alert variant = "danger">{error}</Alert>}
          <Form onSubmit = {handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="mb-3"
                type="email"
                required
                ref={emailRef}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="mb-3"
                type="password"
                required
                ref={passwordRef}
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-conform">
              <Form.Label>Password Conformation</Form.Label>
              <Form.Control
                className="mb-3"
                type="password"
                required
                ref={passwordConfirmRef}
              ></Form.Control>
            </Form.Group>
            <Button className="w-100" type="submit" disabled = {loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to = "/login">Log In</Link>
      </div>
    </>
  );
}




