import * as React from "react";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarHeader() {
  return (
    <Navbar className="fs-5 text-uppercase text-decoration-none">
      <Container>
        <Navbar.Brand className="me-5" href="#home">
          {"Phir Se Nachle"}
        </Navbar.Brand>
        <Nav className="justify-content-around flex-grow-1">
          <LinkContainer to="/classes">
            <Nav.Link>Classes</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/events">
            <Nav.Link>Events</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/our-story">
            <Nav.Link>Our Story</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
