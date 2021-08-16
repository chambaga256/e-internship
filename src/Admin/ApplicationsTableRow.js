import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class ApplicationsTableRow extends Component{
    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Application successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render(){
        return(
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.regno}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.course}</td>
                <td>{this.props.obj.intern}</td>
                <td>{this.props.obj.gender}</td>
                <td>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}