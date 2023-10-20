import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return ( 
    <header>
      <Navbar expand="lg" className="bg-primary" data-bs-theme="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">MERN Auth</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/login">
                <Nav.Link><FaSignInAlt /> Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link><FaSignOutAlt /> Sign Up</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
   );
}

export default Header;