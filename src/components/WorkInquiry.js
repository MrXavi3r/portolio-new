import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function WorkInquiry() {
  return (
    <Container>
      <Card
        className="container-md mt-5 mr-5 py-3"
        border="secondary"
        bg="warning"
      >
        <Row>
          <Col>
          <Card bg="warning" border="warning">
          <Card className="w-25 rounded-circle" bg="info">
              <FontAwesomeIcon
                icon={faBriefcase}
                size="3x"
                className="m-auto"
                color="brown"
              />
            </Card>
            <Card.Title className="text-center">Work Inquiry</Card.Title>
            <Card.Body>
              <Card.Text>
                  Incredible opportunities are all around. Let's work together
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
          <Button variant="primary" type="button" size="lg">
              CONNECT
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
