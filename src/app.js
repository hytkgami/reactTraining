import React from 'react';
import {render} from 'react-dom';

import {Sub} from './sub.js'

class App extends React.Component {
  render () {
    return(
      <div>
        <Sub text="child-1" />
        <Sub text="child-2" />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
