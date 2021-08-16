import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import styles from "./register.css"; 

export default class Register extends Component {
  render() {
    return (
      <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
                <b className="display-6">Registration Form</b><br />
              <Form>
                  <br />
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control type="text" placeholder="Enter your password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupcPassword">
                  <Form.Label>Confirm your Password</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Confirm your password here"
                  />
                  <br />
                <Button variant="success" bg="block">
                  <Link
                    to={"/register"}
                    style={{ textDecoration: "none", color: "white" }}
                    className="btn btn-lg"
                  >Sign up</Link>
                </Button>
                <br /><br />
                <Link
                    to={"/login"}
                    style={{ textDecoration: "none", color: "dark" }}
                    className="btn btn-lg"
                  >Already a member? login here</Link>
                </Form.Group>
              </Form>
            </Container>
          </Jumbotron>
        </Card>
        <br />
      </Container>
    );
  }
}
