import React, { Component } from 'react'
import SubmitForm from "./SubmitForm.js"

class Navigation extends Component {

    openForm() {
        alert("this was clicked")
    }

    render(){

        return(
            <div className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li onClick={this.openForm}><a href="#">Add Blu-ray</a></li>
                </ul>
            </div>
            </div>
        );
    };

}

export default Navigation;