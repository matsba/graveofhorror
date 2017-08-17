import React, { Component } from 'react';
import chunk from 'lodash/chunk.js';
import MovieBox from './MovieBox.js'

class MovieSection extends Component {

    state = {movies: [],
            filter: "",
            moviesShown: []}    

    componentDidMount() {
        fetch('/movies/' + this.props.movies)
        .then(res => res.json())
        .then(movies => this.setState({ movies: movies, moviesShown: movies }));
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.filter)
            if(this.state.filter != nextProps.filter){
                this.setState({
                    filter: nextProps.filter
                })
                this.filterMovies()
            }
    }

    filterMovies = () =>{         
        if(this.state.filter != ""){
            var moviesFiltered = this.state.movies.filter(
                x => x.region == this.state.filter
            )

            this.setState({
                moviesShown: moviesFiltered
            })
        } else {
            this.setState({
                moviesShown: this.state.movies
            })
        }
    }

    render(){             

        console.log("Rendering..." + this.props.title)
        let rows = [];
        rows = chunk(this.state.moviesShown, 4)

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
        </div>
        )
    }
}

export default MovieSection