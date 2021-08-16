import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

function LandingPage({ history }) {
  


  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Stratcom </h1>
              <p className="subtitle">We train and we care .</p>
            </div>
            <div className="buttonContainer">
              <Link to={"landing-page"}>
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
