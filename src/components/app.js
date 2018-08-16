import React, { Component, Fragment } from 'react';

import Button from '../containers/button';
import Phrase from '../components/phrase'

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { clickButton } from '../actions/index';

class App extends Component {

    constructor() {
        super();
        // this.state = {
        //     phraseText: "React opaaa starter"
        // }
    }
  
  // componentDidMount(){
  //   this.setState({ phraseText: this.props.contentClicked })
  // }

  buttonClicked = () => {
    this.props.clickButton("blablabla");
    // console.log(this.props.contentClicked);
    // this.setState({ phraseText: this.props.contentClicked })
    // console.log(this.state);
};


  render() {
    console.log(this.props);

    return (
      <Fragment>
        <Phrase content={this.props.contentClicked} />
        <div>
            <Button actionClick={ this.buttonClicked } />
            {/* <button onClick={ () => { this.buttonClicked() } }> BOTAO </button> */}
        </div>
      </Fragment> 
    );
  }
}

function mapStateToProps(state) {
  console.log("mAP: ", state.click);
  return {
      contentClicked: state.click
  };

}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//       clickButton: clickButton
//   }, dispatch);
// }


export default connect(mapStateToProps, { clickButton })(App);
