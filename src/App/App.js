import React from 'react';
import $ from 'jquery';
import { hashHistory } from 'react-router';

class App extends React.Component {

render() {
    return (
        <div>
            {this.props.children}
        </div>
    );
  }
}

export default App;
