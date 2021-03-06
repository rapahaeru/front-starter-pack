import React, { Component, Fragment } from 'react';

import Phrase from '../components/phrase'

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { clickButton } from '../actions/index';

import ButtonNative from '../containers/button_native'

class JobadDetail extends Component {

  buttonClicked = () => {
    this.props.clickButton("blablabla");
  }

  render() {
    console.log(this.props);

    return (
      <Fragment>
        <div className="jobad-container">
          <Phrase content={this.props.contentClicked} />
          <div>
            <ButtonNative actionClick={ this.buttonClicked } />
          </div>
        </div>
      </Fragment> 
    );
  }
}

function mapStateToProps(state) {
  return {
      contentClicked: state.click
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//       clickButton: clickButton
//   }, dispatch);
// }


export default connect(mapStateToProps, { clickButton })(JobadDetail);
