import React from "react";
import { Navbar, Nav } from "react-bootstrap/";

export default function Header() {
  return (
    <Navbar bg="white" variant="">
      <Navbar.Brand href="#home" className="pr-5 font-weight-bold">
        Xavier
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home" className="pr-5">
          Home
        </Nav.Link>
        <Nav.Link href="#features" className="pr-5">
          Projects
        </Nav.Link>
        <Nav.Link href="mailto:xritch89@hotmail.com">
          xritch89@hotmail.com
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
