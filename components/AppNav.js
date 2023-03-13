import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function AppNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Link href={'/'} passHref legacyBehavior>
        <Navbar.Brand>NewbAPI</Navbar.Brand>
      </Link>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={'/explore'} passHref legacyBehavior>
              <Nav.Link>Explore</Nav.Link>
            </Link>
            <Link href={'/fake-api'} passHref legacyBehavior>
              <Nav.Link>Fake API</Nav.Link>
            </Link>
            <Link href={'/'} passHref legacyBehavior>
              <Nav.Link>API Status</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}