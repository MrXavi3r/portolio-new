import React from "react";
import { Card } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <Card className="mt-5" border="light">
      <Card.Title className="m-auto">Stay Connected</Card.Title>
      <Card.Body className="m-auto">
        <Card.Text>
        <p className="mx-5 text-center">
            <small className="text-muted">Miami, FL</small>
          </p>
          <p className="text-center">xritch89@hotmail.com</p>
          <p className="text-center">
            <small className="text-muted">954-296-6361</small>
          </p>
          </Card.Text>
          <FontAwesomeIcon
            style={{color: '#af52ec'}}
            className="mr-5"
            icon={["fab", "github"]}
            size="3x"
          />
          <FontAwesomeIcon
            style={{color: '#115bdc'}}
            className="ml-5"
            icon={["fab", "linkedin"]}
            size="3x"
          />
      </Card.Body>
    </Card>
  );
}
