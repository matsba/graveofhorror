import React, { Component } from 'react';

class InfoBox extends Component {

    render(){
        return(

            <div className="alert alert-info">
                {this.props.text}
            </div>
        )
    }
}

export default InfoBox
