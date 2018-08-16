import React, { Component } from 'react';


class ButtonNative extends Component {

    render() {
        return <button onClick={this.props.actionClick}> botão </button>
    }
}

export default ButtonNative;