import React, { Component } from 'react';
import logo from './logo.svg';
import ThisMonthsMovies from "./ThisMonthsMovies.js";
import SubmitForm from "./SubmitForm.js";
import Navigation from "./Navigation.js";


class App extends Component {



  render() {   
    return (
      <div>
        <Navigation/>
        <SubmitForm />
        <ThisMonthsMovies/>
      </div>      
    );
  }
  
}


export default App;
