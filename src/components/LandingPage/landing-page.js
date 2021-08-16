import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "./landingPage.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
              <h1 className="display-6">Welcome!</h1>
              <p className={styles.Message}>
                This is an online platform that lets you apply for field
                attachment or internship at Stratcom Company Limited, Uganda.
                <br />Sign up for practical Internship@Stratcom and acquire hands-on skills needed by employers.<br />
                <b>We inspire Computing & Engineering Students</b>
              </p>
              <Button variant="success" bg="block">
                <Link to={"/apply"} style={{ textDecoration: "none", color: "white" }} className="btn btn-lg">
                  Apply Now
                </Link>
              </Button>
            </Container>
          </Jumbotron>
        </Card>
        <br /> <br />
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
              <h1 className="display-6">About Internship</h1>
              <p className={styles.Message}>
                The term internship or field attachment adopted for all teaching units to mean any approved field based practical work carried out by staff and students for tthe purpose of teaching and/or research in places outside the university control but where the university is responsible for the safety of its staff, students and others exposed to their activities.
              </p>
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
      </div>
    );
  }
}
