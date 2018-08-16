import React, { Component, Fragment } from 'react';

import Button from '../containers/button';
import Phrase from '../components/phrase'

class App extends Component {

    constructor() {
        super();
        this.state = {
            phraseText: "React opaaa starter"
        }
    }
  
  render() {
    console.log(this.state);

    return (
      <Fragment>
        <Phrase content={this.state.phraseText} />
        <div>
          <Button />
        </div>
      </Fragment> 
    );
  }
}

export default App;