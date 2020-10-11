import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export default function WorkInquiry() {
  return (
    <Container className="work-inquiry rounded mt-5" id="work-inquiry">
      <Card
        className="container-md mt-5 mr-5 py-3 work-inquiry border-0"
      >
        <Row>
          <Col>
          <Card className="work-inquiry border-0">
          {/* considered a briefcase icon here, but idk, so leaving it out for now */}
              {/* <FontAwesomeIcon
                icon={faBriefcase}
                size="3x"
                className="highlight"
              /> */}
            <Card.Title className="text-center"><h2>Work Inquiry</h2></Card.Title>
            <Card.Body className="pt-0">
              <Card.Text className="text-center">
                  Incredible opportunities are all around. Let's work together
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
          <Button variant="danger" type="button" size="lg">
              LET'S CHAT
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
