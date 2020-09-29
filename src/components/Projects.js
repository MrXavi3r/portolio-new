import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap/";

class Projects extends Component {
  render() {
    return (
        <Container className="container-md mt-4 mr-4">
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
          </Row>
        </Container>
    );
  }
}

export default Projects;
