import React, { Component } from 'react';

class MovieFilter extends Component {

    handleClick = (value) => {
        this.props.onClickHandler(value)
    }

    render() {

        return(

            <div className="row">
                <h1>Filter</h1>
                <h3>Region</h3>
                <button className="btn btn-default" onClick={() => this.handleClick("A")}>A</button>
                <button className="btn btn-default" onClick={() => this.handleClick("B")}>B</button>
                <button className="btn btn-default" onClick={() => this.handleClick("C")}>C</button>
                <button className="btn btn-default" onClick={() => this.handleClick("Free")}>Free</button>
            </div>
        )
    }

}

export default MovieFilter