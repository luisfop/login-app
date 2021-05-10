import React,{useRef,useState} from "react";

import { Form, Button, Card, Alert } from "react-bootstrap";

import { useAuth } from "../context/AuthContext";

const Signup = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);


    const {signUp} = useAuth();

    

    async function handleSubmit(e){
        e.preventDefault();

         if(passwordRef.current.value !== passwordConfirmRef.current.value){
             return setError('Password do not match!')
        }

        try{
            setError('');
            await signUp(emailRef.current.value, passwordRef.current.value);
        }catch(error){
            console.log('Error signing up!', error)
            setError('Failed to create an account! ');
            setLoading(true)
        }


        setLoading(false);

    }


  return (

    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>

            {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type="password" required ref={passwordConfirmRef} />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">Sign up!</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log in
      </div>
    </>

  );
};

export default Signup;
