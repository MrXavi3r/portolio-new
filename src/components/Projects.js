import React, { Component } from "react";
import { Card, Carousel, Container } from "react-bootstrap/";

class Projects extends Component {
  render() {
    return (
      <Container>
      <Carousel id="projects" className="border-0 m-0">
        <Carousel.Item className="container-sm m-0">
          <Card className="my-5 mr-4 p-0">
            <Card.Img
              variant="top"
              src={require("../restaurant_bar.png")}
              alt="restaurant"
              width="300"
              height="300"
            />
          </Card>
        </Carousel.Item>
        <Carousel.Item className="container-sm">
          <Card body className="my-5 mr-4 p-0">
          <Card.Img
              variant="top"
              src={require("../graffiti.png")}
              alt="graffiti"
              width="300"
              height="300"
            />
          </Card>
        </Carousel.Item>
        <Carousel.Item className="container-sm">
          <Card body className="my-5 mr-4 p-0">
          <Card.Img
              variant="top"
              src={require("../real_estate.png")}
              alt="real estate"
              width="300"
              height="300"
            />
          </Card>
        </Carousel.Item>
        <Carousel.Item className="container-sm">
          <Card body className="my-5 mr-4 p-0">
          <Card.Img
              variant="top"
              src={require("../band.png")}
              alt="band"
              width="300"
              height="300"
            />
          </Card>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
  }
}

export default Projects;
