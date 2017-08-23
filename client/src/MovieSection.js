import React, { Component } from 'react';
import chunk from 'lodash/chunk.js';
import MovieBox from './MovieBox.js'
import InfoBox from './InfoBox.js';


class MovieSection extends Component {

    state = {movies: [],
            filter: "",}    

    componentDidMount() {
        fetch('/movies/' + this.props.movies)
        .then(res => res.json())
        .then(movies => this.setState({ movies }));
    }

    componentWillReceiveProps(nextProps) {

            if(this.state.filter != nextProps.filter){
                this.setState({
                    filter: nextProps.filter
                })                
            }
    }

    filterMovies = () =>{         
        if(this.state.filter != ""){
            var moviesFiltered = this.state.movies.filter(
                x => x.region == this.state.filter
            )
        } else {
            moviesFiltered = this.state.movies
        }
        return moviesFiltered
    }

    renderInfoBox = () => {
        let movies = this.filterMovies()
        if(movies.length == 0){
            return(
                <InfoBox text="No movies matched the filter" />
            )
        } else {
            return null
        }

    }

    render(){             

        let rows = [];
        var movies = this.filterMovies()

        rows = chunk(movies, 4)

        return(
        <div>
            <h1>{this.props.title}</h1>            
            {rows.map((row, i) =>
                <div className="row">
                    {row.map(movie =>
                        <MovieBox movie={movie} />
                    )}
                </div>
            )}
            {this.renderInfoBox()}
        </div>
        )
    }
}

export default MovieSection