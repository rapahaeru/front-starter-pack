import React, { Component } from 'react';

class Phrase extends Component {

    render() {
        return <div className="phrase">{this.props.content}</div>
    }
}

export default Phrase;