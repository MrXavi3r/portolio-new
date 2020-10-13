import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap/";

export default function WorkInquiry() {
  return (
    <Container className="work-inquiry rounded mt-5" id="work-inquiry">
      <Card
        className="container-md mt-5 mr-5 py-3 work-inquiry border-0"
      >
        <Row>
          <Col>
          <Card className="work-inquiry border-0">
            <Card.Title className="text-center"><h2>Work Inquiry</h2></Card.Title>
            <Card.Body className="pt-0">
              <Card.Text className="text-center">
                  Incredible opportunities are all around. Let's work together
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
          <Button variant="danger" type="button" size="lg" className="three-d">
              LET'S CHAT
            </Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
