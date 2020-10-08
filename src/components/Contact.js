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
        <Card text="dark" className="connect-icon github">
            <FontAwesomeIcon
              className="m-2 fa-github"
              icon={["fab", "github"]}
              size="3x"
            />
          <h6 className="small text-center">Github</h6>
        </Card>
        <Card text="dark" className="connect-icon mail">
          <FontAwesomeIcon
            style={{ color: "#eb3349" }}
            className="m-2 fa-mail"
            icon={faEnvelopeOpenText}
            size="3x"
          />
          <h6 className="small text-center">Email</h6>
        </Card>
        <Card text="" className="connect-icon linkedin">
          <FontAwesomeIcon
            style={{ color: "#115bdc" }}
            className="m-2 fa-linkedin"
            icon={["fab", "linkedin"]}
            size="3x"
          />
          <h6 className="small text-center">LinkedIn</h6>
        </Card>
        <Card text="" className="connect-icon phone">
          <FontAwesomeIcon
            style={{ color: "#af52ec" }}
            className="m-2 fa-phone"
            icon={faPhone}
            size="3x"
          />
          <h6 className="small text-center">Phone</h6>
        </Card>
      </Card.Body>
    </Card>
  );
}
