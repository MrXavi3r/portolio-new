import React from "react";
import { Navbar, Nav } from "react-bootstrap/";

export default function Header() {
  return (
    <Navbar bg="white" variant>
      <Navbar.Brand href="#home" className="pr-5 font-weight-bold">
        Xavier
      </Navbar.Brand>
      <Nav className="mr-auto" variant="">
        <Nav.Link href="#home" className="pr-5">
          Home
        </Nav.Link>
        <Nav.Link href="#about" className="pr-5">
          About
        </Nav.Link>
        <Nav.Link href="#projects" className="pr-5">
          Projects
        </Nav.Link>
        <Nav.Link href="#work-inquiry">
          Inquire
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
