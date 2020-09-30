import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function WorkInquiry() {
  return (
    <Card className="container-md mt-5 mr-5 py-3" border="secondary">
     <Card className="w-25 rounded-circle" bg="info">
        <FontAwesomeIcon icon={faBriefcase} size="3x" className="mx-auto" />
        </Card>
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Title>Work Inquiry</Card.Title>
              <Card.Text>
                Incredible opportunities are all around. Let's work together
              </Card.Text>
            </Col>
            <Col className="d-flex justify-content-center">
            <Button variant="primary" type="button" size="lg" className="h-75 mx-auto">CONNECT</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
