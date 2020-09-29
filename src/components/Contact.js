import React from "react";
import { Card } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Card className="mt-5">
      <Card.Title className="mx-auto">Stay Connected</Card.Title>
      <Card.Body className="mx-auto">
        <Card.Text>
          xritch89@hotmail.com
          <p>
            <small className="text-muted">954-296-6361</small>
          </p>
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
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
