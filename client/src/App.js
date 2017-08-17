import React, { Component } from 'react';
import logo from './logo.svg';
import MovieSection from "./MovieSection.js";
import SubmitForm from "./SubmitForm.js";
import Navigation from "./Navigation.js";
import MovieFilter from "./MovieFilter.js";


class App extends Component {

  state = {movieFilter: ""}
 
  handleMovieFilter = (filter) => {

    this.setState({
      movieFilter: filter
    })

    console.log("Filter is " + filter)
  }

  render() {   
    return (
      <div>
        <Navigation/>
        <SubmitForm />
        <MovieFilter onClickHandler={this.handleMovieFilter}/>
        <MovieSection movies="this_month" title="This Month's Movies" filter={this.state.movieFilter}/>
        <MovieSection movies="next_month" title="Next Month's Movies" filter={this.state.movieFilter}/>
        <MovieSection movies="rest_of_the_year" title="Rest of the Year" filter={this.state.movieFilter}/>
      </div>      
    );
  }
  
}


export default App;
