import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function WorkInquiry() {
  return (
    <Card className="container-md rounded mt-5 py-5" border="secondary">
      <Card.Body>
        <Container>
        <FontAwesomeIcon icon={faBriefcase} size="3x" color="green" />
          <Row>
            <Col>
              <Card.Title>Work Inquiry</Card.Title>
              <Card.Text>
                Incredible opportunities are all around. Let's work together
              </Card.Text>
            </Col>
            <Button variant="primary" type="button" size="lg">CONNECT</Button>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
