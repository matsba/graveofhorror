import React, { Component } from 'react';
import chunk from 'lodash/chunk.js';
import MovieBox from './MovieBox.js'

class ThisMonthsMovies extends Component {

    state = {movies: []}

    componentDidMount() {
        fetch('/movies')
        .then(res => res.json())
        .then(movies => this.setState({ movies }));
    }

    render(){        

        let rows = [];
        rows = chunk(this.state.movies, 4)

        console.log(rows)

        return(
        <div>
            <h1>This Months Blu-rays</h1>
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

export default ThisMonthsMovies