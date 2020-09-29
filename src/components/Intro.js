import React from "react";
import { Button, Jumbotron, Container, Row, Col, Media } from "react-bootstrap/";

export default function Intro() {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <h1>Xavier Ritch</h1>
            <h4>Software Engineer</h4>
            <p>
            I have a passion for building user-friendly, feature rich, fullstack applications.
            </p>
            <p>
              <Button variant="primary">CONNECT</Button>
            </p>
          </Col>
          <Col>
            <Media>
                <img src= "./portrait.jpg" alt="self portrait"/>
            </Media>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
