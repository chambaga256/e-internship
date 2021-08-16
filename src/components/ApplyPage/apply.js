import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import styles from "./applyPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Header from "../Header";

export default class Apply extends Component {
  constructor(props){
    super(props)

    //setting up functions
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRegno = this.onChangeRegno.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeUniversity = this.onChangeUniversity.bind(this);
    this.onChangeIntern = this.onChangeIntern.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //setting up state
    this.state = {
      name:'',
      regno:'',
      email:'',
      course:'',
      university:'',
      intern:'',
      gender:''
    }
  }

  onChangeName(e){
    this.setState({ name: e.target.value })
  }
  onChangeRegno(e){
    this.setState({ regno: e.target.value })
  }
  onChangeEmail(e){
    this.setState({ email: e.target.value })
  }
  onChangeCourse(e){
    this.setState({ course: e.target.value })
  }
  onChangeUniversity(e){
    this.setState({ university: e.target.value })
  }
  onChangeIntern(e){
    this.setState({ intern: e.target.value })
  }
  onChangeGender(e){
    this.setState({ gender: e.target.value })
  }

  onSubmit(e){
    e.preventDefault()

    const applyObject = {
      name: this.state.name,
      regno: this.state.regno,
      email: this.state.email,
      course: this.state.course,
      university: this.state.university,
      intern: this.state.intern,
      gender: this.state.gender
    };

    axios.post('http://localhost:8000/apply', applyObject).then(res=>console.log(res.data));

    this.setState({
      name: '',
      regno: '',
      email: '',
      course: '',
      university: '',
      intern: '',
      gender: ''
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
                <b className="display-6">Application Form</b><br />
              <Form onSubmit={this.onSubmit}>
                  <br />
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Full Names</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={this.onChangeName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRegno">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.regno}
                    onChange={this.onChangeRegno}
                    placeholder="Enter your registration number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" value={this.state.email} onChange={this.onChangeEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupCourse">
                  <Form.Label>Current Course</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.course}
                    onChange={this.onChangeCourse}
                    placeholder="Enter your current course"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupUniversity">
                  <Form.Label>University</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.university}
                    onChange={this.onChangeUniversity}
                    placeholder="Enter your current university"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupIntern">
                  <Form.Label>Intership Course</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.intern}
                    onChange={this.onChangeIntern}
                    placeholder="Enter an internship course of your choice"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" placeholder="Enter your gender" value={this.state.gender} onChange={this.onChangeGender} />
                </Form.Group>
                <br />
                <Button variant="success" bg="block" type="submit">Submit Form</Button>
              </Form>
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
