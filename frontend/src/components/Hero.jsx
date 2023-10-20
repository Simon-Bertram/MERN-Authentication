import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hero = () => {
  return ( 
    <div className="hero">
      <Container>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>
              <h1>MERN Authentication</h1>
            </Card.Title>
            <Card.Text>
              <p>
                This is boilerplate for MERN authentication including json web tokens, bcrypt, and react-bootstrap.
              </p>
            </Card.Text>
            <div className="d-flex justify-content-center my-4">
              <Button variant='primary' href='/login' className='me-3'>
                Sign In
              </Button>
              <Button variant='secondary' href='/register' className='me-3'>
                Sign Up
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
   );
}
 
export default Hero;
