import React, { Component } from 'react';

class MovieBox extends Component {

    render(){

    var movie = this.props.movie

        return(
            <div className="col-md-3">     
                <img className="imageBox" src={movie.coverArtUrl} alt={movie.title}></img>
                <h3>{movie.title}</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Release: </th>
                            <td> { movie.releaseDate } </td>
                        </tr>
                        <tr>
                            <th>Year: </th>
                            <td>{ movie.originalReleaseYear }</td>
                        </tr>
                        <tr>
                            <th>Region</th>
                            <td>{ movie.region }</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

}

export default MovieBox;