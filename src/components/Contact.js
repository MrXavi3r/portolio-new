import React from "react";
import { Card } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Card className="mt-5" border="light">
      <Card.Title className="m-auto">Stay Connected</Card.Title>
      <Card.Body className="m-auto">
        <Card.Text>
        <p className="mx-5 text-center">
            <small className="text-muted">Miami, FL</small>
          </p>
          </Card.Text>
          <FontAwesomeIcon
            className="mr-5"
            icon={["fab", "github"]}
            size="3x"
          />
          <FontAwesomeIcon
            style={{color: '#ee5941'}}
            className="mr-5"
            icon={faEnvelopeOpenText}
            size="3x"
          />
          <FontAwesomeIcon
            style={{color: '#115bdc'}}
            className="mr-5"
            icon={["fab", "linkedin"]}
            size="3x"
          />
          <FontAwesomeIcon
            style={{color: '#af52ec'}}
            className=""
            icon={faPhone}
            size="3x"
          />
      </Card.Body>
    </Card>
  );
}
