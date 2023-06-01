import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/About" className="nav-link">About</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
          </Nav>
          <Link className="btn btn-outline-light" to="/AddUser">Add User</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
