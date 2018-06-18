import React, { Component } from 'react';
import './App.css';
import Firsttry from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Puppies!</h1>
        <p>Aren't they so adorable?</p>
        <Firsttry />
        <img src="https://s.abcnews.com/images/US/puppies-gty-hb-170911_4x3_992.jpg"/>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default App;
