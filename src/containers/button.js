import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clickButton } from '../actions/index';

class Button extends Component {

    buttonClicked() {
        this.props.clickButton("blablabla");
        // console.log(this.props.contentClicked);
        this.setState({ phraseText: this.props.contentClicked })
        console.log(this.state);
    };

    render() {
        // console.log(this.props.actionClick());
        return <button onClick={this.buttonClicked()}> botão </button>
    }

}

function mapStateToProps(state) {
    return {
        contentClicked: state.click
    };
  
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clickButton: clickButton
    }, dispatch);
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Button);
  