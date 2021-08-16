import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import ApplicationsTableRow from "./ApplicationsTableRow";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/admin")
      .then((res) => {
        this.setState({
          applications: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.applications.map((res, i) => {
      return <ApplicationsTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
        <div>
          <Header />
         < Container>
        <h1 className="display-6">Manage Applications</h1>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
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
