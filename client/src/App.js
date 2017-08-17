import React, { Component } from 'react';
import logo from './logo.svg';
import MovieSection from "./MovieSection.js";
import SubmitForm from "./SubmitForm.js";
import Navigation from "./Navigation.js";


class App extends Component {



  render() {   
    return (
      <div>
        <Navigation/>
        <SubmitForm />
        <MovieSection movies="this_month" title="This Month's Movies"/>
        <MovieSection movies="next_month" title="Next Month's Movies"/>
        <MovieSection movies="rest_of_the_year" title="Rest of the Year"/>
      </div>      
    );
  }
  
}


export default App;
