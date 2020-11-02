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
        <Card text="dark" className="connect-icon github three-d">
            <a href='http://github.com/mrXavi3r' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-dark'>
            <FontAwesomeIcon
              className="m-2 fa-github"
              icon={["fab", "github"]}
              size="3x"
            />
          <h6 className="small text-center">Github</h6>
          </a>
        </Card>
        <Card text="dark" className="connect-icon mail three-d">
        <a href='mailto:xritch89@hotmail.com' className='text-decoration-none text-dark'>
          <FontAwesomeIcon
            style={{ color: "#eb3349" }}
            className="m-2 fa-mail"
            icon={faEnvelopeOpenText}
            size="3x"
          />
          <h6 className="small text-center">Email</h6>
          </a>
        </Card>
        <Card text="" className="connect-icon linkedin three-d">
        <a href='https://www.linkedin.com/in/xavier-ritch-254238145/' target='_blank' rel='noopener noreferrer' className='text-decoration-none text-dark'>
          <FontAwesomeIcon
            style={{ color: "#115bdc" }}
            className="m-2 fa-linkedin"
            icon={["fab", "linkedin"]}
            size="3x"
          />
          <h6 className="small text-center">LinkedIn</h6>
          </a>
        </Card>
        <Card text="" className="connect-icon phone three-d">
        <a href="tel:123-456-7890" target='_blank' rel='noopener noreferrer' className='text-decoration-none text-dark'>
          <FontAwesomeIcon
            style={{ color: "#af52ec" }}
            className="m-2 fa-phone"
            icon={faPhone}
            size="3x"
          />
          <h6 className="small text-center">Phone</h6>
          </a>
        </Card>
      </Card.Body>
    </Card>
  );
}
