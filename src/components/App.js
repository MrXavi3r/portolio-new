import React from "react";
import "../App.css";
import Header from "./Header";
import Intro from "./Intro";
import About from "./About";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./Projects";
import Contact from "./Contact";
import WorkInquiry from "./WorkInquiry";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Container } from "react-bootstrap";

library.add(fab);
function App() {
  return (
    <>
      <Header />
      <Intro />
      <Container className="container-xl mx-auto">
        <About />
        <Projects />
        <WorkInquiry />
        <Contact />
      </Container>
    </>
  );
}

export default App;
