import React, { Component } from 'react';


class Button extends Component {

    render() {
        return <button onClick={this.props.actionClick}> botão </button>
    }

}

export default Button;