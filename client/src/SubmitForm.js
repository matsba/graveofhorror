import React, { Component } from 'react';

const initialState = {
        title: '',
        releaseDate: '',
        originalReleaseYear: '',
        coverArtUrl: '',
        region: '',
    };

class SubmitForm extends Component {

    constructor(props) {
    super(props);
    this.state = initialState
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    fetch('movies/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
    })
    this.setState(initialState)
    event.preventDefault();
  }

    render(){

        return(
            <div id="submitForm">
                <h1>Add Blu-ray</h1>
                <p>Facilis in architecto est dolor quia dolor. Alias sunt quo odit consequatur animi illum. Aut itaque eaque dolores assumenda reiciendis quod eius aut. Saepe est cumque delectus illo delectus ratione impedit. Explicabo est accusamus vel provident est nulla deleniti.</p>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group"> 
                        <label for="title" className="control-label col-sm-2">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                        </div>
                        <label for="releaseDate" className="control-label col-sm-2">Release date</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="releaseDate" name="releaseDate" value={this.state.releaseDate} onChange={this.handleInputChange}/>
                        </div>
                        <label for="originalReleaseYear" className="control-label col-sm-2">Original Release Year</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="originalReleaseYear" name="originalReleaseYear" value={this.state.originalReleaseYear} onChange={this.handleInputChange}/>
                        </div>
                        <label for="coverArtUrl" className="control-label col-sm-2">Cover Art</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" className="form-control" id="coverArtUrl" name="coverArtUrl" value={this.state.coverArtUrl} onChange={this.handleInputChange}/>
                        </div>
                        <label for="region" className="control-label col-sm-2">Region</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="region" name="region" value={this.state.region} onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="form-group">        
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    };

}

export default SubmitForm