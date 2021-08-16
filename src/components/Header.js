import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.css";

import {  Link } from "react-router-dom";
function Header() {
    return (

        <header className="App-header">
        <Navbar collapseOnSelect expand="lg" bg="light" text="dark" variant="light" fixed="top">
          <Container>
            <Nav>
              <Link to={"/"} className="nav-link">
                <b className="brand">Internship@Stratcom</b>
              </Link>
            </Nav>

            <Nav className="justify-content-end">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav>
                  <Link to={"/apply"} className="nav-link">
                    Apply
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/dashboard"} className="nav-link">
                    Dashboard
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/courses"} className="nav-link">
                    Courses
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
            </Nav>
          </Container>
        </Navbar><br /><br /><br />
      </header>


    
    )
}

export default Header
