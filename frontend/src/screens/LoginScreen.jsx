import { useState, useEffect } from 'react';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => { 
    e.preventDefault();
    console.log('submit');
  }

  return ( 
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>
        <Form.Group className='my-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}>
          </Form.Control>
          <Button type='submit' variant='primary' className='my-4'>
            Sign In
          </Button>

          <Row className='pt-3'>
            <Col>
              New Customer? <Link to='/register'>Register</Link>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </FormContainer>
   );
}
 
export default LoginScreen;