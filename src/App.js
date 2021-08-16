import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/*import WelcomePage from "./components/WelcomePage/welcome-page";*/
import LandingPage from "./components/LandingPage/landing-page";
import Apply from "./components/ApplyPage/apply";
import Dashboard from "./components/Dashboard/dashboard";
import Courses from "./components/CoursesPage/courses";
import Login from "./components/LoginPage/login";
import Register from "./components/RegistrationPage/register";
import Admin from "./Admin/admin"
import Home from "./components/Home/home"
import './App.css';

function App() {
  return (
    <Router>
    <div>
     
  
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                

              <Route path="/"component= {Home} exact/> 
                <Route path="/register" component={Register}  exact/>
                <Route exact path="/landing-page" component={LandingPage} exact/>
                <Route path="/apply" component={Apply} />
                <Route path="/dashboard" component={Dashboard} exact/>
                <Route path="/courses" component={Courses} exact />
                <Route path="/admin" component={Admin} exact />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
