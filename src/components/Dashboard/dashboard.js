import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ApplicationsTableRow from './ApplicationsTableRow';
import styles from "./dashboard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Header";

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      applications: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:8000/dashboard').then(res=>{
      this.setState({
        applications: res.data
      });
    }).catch((error)=>{
      console.log(error);
    })
  }

  DataTable(){
    return this.state.applications.map((res, i)=>{
      return <ApplicationsTableRow obj={res} key={i} />
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container>
              <h1 className="display-6">Your Applications</h1>
              <br />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Reg No</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Internship</th>
                    <th>Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {this.DataTable()}
                </tbody>
              </Table>
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
        <br />
      </Container>
      </div>
    );
  }
}