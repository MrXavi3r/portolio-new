import React from "react";
import Card from "react-bootstrap/Card";

export default function About() {
  return (
    <Card className="container-md rounded mt-5 ml-5 py-4" bg="info" text="light" border="secondary">
      <Card.Body>
        I've fallen in love with development. The past couple of years i've
        worked on amazing projects using Javascript, React, JQuery, Node.js,
        Express.js, SQL, and various libraries. I'm eager to work with other
        developers and continue to grow and learn.
      </Card.Body>
    </Card>
  );
}
