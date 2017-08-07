import React, { Component } from 'react';
import moment from 'moment';

class MovieBox extends Component {

    render(){

    var movie = this.props.movie
    
    var defaultImage = "/assets/missing_image.png"

        return(
            <div className="col-md-3">     
                <img className="imageBox" src={movie.coverArtUrl || defaultImage} alt={movie.title}></img>
                <h3>{movie.title}</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Release: </th>
                            <td> { moment(movie.releaseDate).format("YYYY/MM/DD") } </td>
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