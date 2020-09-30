import React from "react";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Media
} from "react-bootstrap/";

export default function Intro() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col>
            <h1>Xavier Ritch</h1>
            <h4 className="text-muted">Software Engineer</h4>
            <p>
              I have a passion for building user-friendly, feature rich,
              fullstack applications.
            </p>
            <p>
              <Button variant="primary" size="lg">CONNECT</Button>
            </p>
          </Col>
          <Col>
            <Media>
              <img
                width={300}
                height={300}
                className=""
                src={require("../portrait.png")}
                alt="portrait"
              />
            </Media>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
