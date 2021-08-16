import React, { Component } from "react";

export default class ApplicationsTableRow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.regno}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.course}</td>
                <td>{this.props.obj.intern}</td>
                <td>{this.props.obj.gender}</td>
            </tr>
        );
    }
}