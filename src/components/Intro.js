import React from "react";
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Media,
  Image
} from "react-bootstrap/";


export default function Intro() {
  return (
    <Jumbotron fluid style={{ background: "#fff" }} id="home">
      <Container>
        <Row className="jumbo-column-container">
          <Col className="jumbo-column">
            <h1>Xavier Ritch</h1>
            <h4 className="text-muted">Software Engineer</h4>
            <p className="pt-3 w-50">
              I have a passion for building user-friendly, feature rich,
              fullstack applications.
            </p>
            <Button variant="primary" size="lg" className="m-5">
              CONNECT
            </Button>
          </Col>
          {/* <Col className="bg-img">
            <Media>
              <Image
              fluid
                className=""
                // src={require("../portrait.png")}
                style={{backgroundImage: `url(${Background})`}}
              />
            </Media>
          </Col> */}
        </Row>
      </Container>
    </Jumbotron>
  );
}
