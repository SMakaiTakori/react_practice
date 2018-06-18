import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Puppies!</h1>
        <p>Aren't they so adorable?</p>
        <Person name="Makai" age="30" />
        <Person name = "Alfredo" age ="24"> My Hobbies: Coding </Person>
		<Person name = "Loris" age = "25"/>

        <img src="https://s.abcnews.com/images/US/puppies-gty-hb-170911_4x3_992.jpg"/>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default App;
