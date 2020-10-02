import React from "react";
import { Card } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Card className="mt-5" border="light">
      <Card.Title className="m-auto">Stay Connected</Card.Title>
      <Card.Text>
        <p className="mx-5 pt-3 text-center">
            <small className="text-muted">Miami, FL</small>
          </p>
          </Card.Text>
      <Card.Body className="d-flex justify-content-around pt-0 w-75 mx-auto">
          <Card body className="">
          <FontAwesomeIcon
            className="mx-auto"
            icon={["fab", "github"]}
            size="3x"
          />
          {/* <Card.Title>Github</Card.Title> */}
          </Card>
          <Card body>
          <FontAwesomeIcon
            style={{color: '#eb3349'}}
            className="mx-auto"
            icon={faEnvelopeOpenText}
            size="3x"
          />
          {/* <Card.Title>Mail</Card.Title> */}
          </Card>
          <Card body>
          <FontAwesomeIcon
            style={{color: '#115bdc'}}
            className="mx-auto"
            icon={["fab", "linkedin"]}
            size="3x"
          />
          {/* <Card.Title>linkedIn</Card.Title> */}
          </Card>
          <Card body>
          <FontAwesomeIcon
            style={{color: '#af52ec'}}
            className="mx-auto"
            icon={faPhone}
            size="3x"
          />
          {/* <Card.Title>Phone</Card.Title> */}
          </Card>
      </Card.Body>
    </Card>
  );
}
