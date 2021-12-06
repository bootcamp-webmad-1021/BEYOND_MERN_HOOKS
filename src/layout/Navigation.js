import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/state">useState</Nav.Link>
          <Nav.Link as={Link} to="/didMount">DidMount</Nav.Link>
          <Nav.Link as={Link} to="/didUpdate">DidUpdate</Nav.Link>
          <Nav.Link as={Link} to="/willUnmount">WillUnmount</Nav.Link>
          <Nav.Link as={Link} to="/params/patito">Params</Nav.Link>
          <Nav.Link as={Link} to="/form">Form</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation
