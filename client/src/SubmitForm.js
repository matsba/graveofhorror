import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import moment from 'moment';
import _ from 'lodash';
import {RadioGroup, Radio} from 'react-radio-group';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-select/dist/react-select.css';

const initialState = {
        title: '',
        releaseDate: moment(),
        originalReleaseYear: '',
        coverArtUrl: '',
        region: 'A',
    };

const years =  _.range(1900, 2040).map((obj) => { 
   var rObj = {};
   rObj['label'] = obj;
   rObj['value'] = obj;
   return rObj;
});

const yearDefaulOption = [{
    'label': 1970, 'value': 1970
}]
class SubmitForm extends Component {

    constructor(props) {
        super(props);
        this.state = initialState
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
  }

    handleInputChange(event) {

        const target = event.target;
        //Checking for radio buttons
        const value = target ? target.value : event;
        const name = target ? target.name : "region";

        this.setState({
        [name]: value
        });
    }

    handleDateChange(date) {
        this.setState({
        releaseDate: date
        });
    }

    handleYearChange(y) {
        y = y.value
        this.setState({
        originalReleaseYear: y
        });
    }

  handleSubmit(event) {    
    var data = {} 
    data.title = this.state.title
    data.releaseDate = moment(this.state.releaseDate).format("YYYY/MM/DD")
    data.originalReleaseYear =  this.state.originalReleaseYear
    data.coverArtUrl = this.state.coverArtUrl        
    data.region = this.state.region

    console.log(data)

    fetch('movies/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    this.setState(initialState)
    event.preventDefault();
  }



    render(){

        return(
            <div className="row">
            <div id="submitForm" className="col-md-6">
                <h1>Add Blu-ray</h1>
                <p>Facilis in architecto est dolor quia dolor. Alias sunt quo odit consequatur animi illum. Aut itaque eaque dolores assumenda reiciendis quod eius aut. Saepe est cumque delectus illo delectus ratione impedit. Explicabo est accusamus vel provident est nulla deleniti.</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group"> 
                            <label for="title" className="control-label">Title</label>
                             <input type="text" className="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInputChange} required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group"> 
                            <label for="releaseDate" className="control-label">Release date</label>
                            <DatePicker className="form-control" id="releaseDate" name="releaseDate"
                            dateFormat="YYYY/MM/DD" selected={this.state.releaseDate} onChange={this.handleDateChange}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group"> 
                            <label for="originalReleaseYear" className="control-label">Original Release Year</label>
                            <Select id="originalReleaseYear" name="originalReleaseYear"
                            value={this.state.originalReleaseYear} focusedOption={this.state.yearDefaulOption} onChange={this.handleYearChange} options={years} required/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group"> 
                            <label for="coverArtUrl" className="control-label">Cover Art</label>
                            <input type="url" className="form-control" className="form-control" id="coverArtUrl" name="coverArtUrl" value={this.state.coverArtUrl} onChange={this.handleInputChange} pattern="https?://.+"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group"> 
                            <label for="region" className="control-label">Region</label>
                                <RadioGroup name="region" selectedValue={this.state.region} onChange={this.handleInputChange}>
                                    <Radio value="A" type="radio"/> A
                                    <Radio value="B" type="radio"/> B
                                    <Radio value="C" type="radio"/> C
                                    <Radio value="Free" type="radio"/> Free
                                </RadioGroup>                            
                        </div>
                    </div>
                    <div className="form-group">        
                        <div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    };

}

export default SubmitForm