import React, { Component } from "react";
import { Card, Row, Container } from "react-bootstrap/";

class Projects extends Component {
  render() {
    return (
      <Container id="projects" className="mt-5">
        <Row className="d-flex flex-nowrap pt-0 mx-auto">
          <Card className="three-d my-5 mr-4 p-0">
            <Card.Img
              variant="top"
              src={require("../restaurant_bar.png")}
              alt="restaurant"
              width="100"
              height="100"
            />
            <Card.Title className="text-center">Restaurant</Card.Title>
            <Card.Text>
              lorem ipsum slaem walem deku academ naru kage drago goku super
              ceter alis diety aphro zues de dexe classis exeter xolo graphi
              coloss olympia hessi kobe mobe
            </Card.Text>
          </Card>
          <Card className="three-d my-5 mr-4 p-0">
            <Card.Img
              variant="top"
              src={require("../graffiti.png")}
              alt="graffiti"
              width="100"
              height="100"
            />
            <Card.Title className="text-center">Grafitti</Card.Title>
            <Card.Text>
              lorem ipsum slaem walem deku academ naru kage drago goku super
              ceter alis diety aphro zues de dexe classis exeter xolo graphi
              coloss olympia hessi kobe mobe
            </Card.Text>
          </Card>
          <Card className="three-d my-5 mr-4 p-0">
            <Card.Img
              variant="top"
              src={require("../real_estate.png")}
              alt="real estate"
              width="100"
              height="100"
            />
            <Card.Title className="text-center">Kitchen</Card.Title>
            <Card.Text>
              lorem ipsum slaem walem deku academ naru kage drago goku super
              ceter alis diety aphro zues de dexe classis exeter xolo graphi
              coloss olympia hessi kobe mobe
            </Card.Text>
          </Card>
          {/* <Card className="three-d my-5 mr-4 p-0">
            <Card.Img
              variant="top"
              src={require("../band.png")}
              alt="band"
              width="100"
              height="100"
            />
            <Card.Title className="text-center">Band</Card.Title>
            <Card.Text>
              lorem ipsum slaem walem deku academ naru kage drago goku super
              ceter alis diety aphro zues de dexe classis exeter xolo graphi
              coloss olympia hessi kobe mobe
            </Card.Text>
          </Card> */}
        </Row>
      </Container>
    );
  }
}

export default Projects;
