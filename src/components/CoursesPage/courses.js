import React, { Component } from "react";
import Container from "react-bootstrap/Container";
/*import { Link } from "react-router-dom";*/
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import styles from "./coursesPage.css";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Courses extends Component {
  render() {
    return (
      <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
              <b className="display-6">Internship Courses</b>
              <br />
              <br />
              <Card.Header>
                <b>Networking</b>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>All Cisco Practicals</ListGroup.Item>
                    <ListGroup.Item>
                      Linux & Windows Systems Administration
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Installing and configuring Windows Server OS
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Installing & configuring a Wireless LAN
                    </ListGroup.Item>
                    <ListGroup.Item>
                      Laptop/ PC repair & servicing
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <br />
              <br />
              <Card.Header>
                <b>Coding (No Coding Experience)</b>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>Website design & hosting</ListGroup.Item>
                    <ListGroup.Item>Web Apps development</ListGroup.Item>
                    <ListGroup.Item>Mobile Apps development</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
              <br />
              <br />
              <Card.Header>
                <b>Graphics Design</b>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>Adobe Photoshop</ListGroup.Item>
                    <ListGroup.Item>Adobe Illustrator</ListGroup.Item>
                    <ListGroup.Item>Adobe indesign</ListGroup.Item>
                    <ListGroup.Item>Photography</ListGroup.Item>
                    <ListGroup.Item>Videography</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Container>
          </Jumbotron>
        </Card>
        <hr />
        <div>
          <Row>
            <Col md={6}>
              <p>Copyright &copy; 2021 Stratcom Company Limited</p>
            </Col>
          </Row>
        </div>
        <br /> <br />
      </Container>
    );
  }
}
