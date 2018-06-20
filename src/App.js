import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons:[
			{name:'Makai', age:30},
			{name:'Alfredo', age:24},
			{name:'Loris', age:25}
		]
	}	

	switchNameHandler = (newName) => {
		// console.log('Was clicked!');
		// DON't DO THIS: this.state.persons[0].name = 'Makai Takori'; 
		this.setState( {persons:[
			{name:newName, age:30},
			{name:'Alfredo', age:24},
			{name:'Loris', age:29}
		]
	} )
	}

	nameChangedHandler = (event) => {
		this.setState( {persons:[
			{name:'Makai', age:30},
			{name: event.target.value, age:24},
			{name:'Loris', age:25}
		]
	} )
	}
	
  render() {
  	const style={
  		backgroundColor:'white',
  		font:'inherit',
  		border:'1px solid blue',
  		padding:'8px',
  		cursor:'pointer'
  	};


    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>It's Actually working!</p>
        <button style={style}
        onClick={()=> this.switchNameHandler('Max!!')}>Switch Name</button>
        <Person 
       		name={this.state.persons[0].name} 
        	age={this.state.persons[0].age} />
        <Person 
        	name = {this.state.persons[1].name} 
        	age={this.state.persons[1].age}
        	click= {this.switchNameHandler.bind(this, 'Maddie')}
        	changed={this.nameChangedHandler}>My Hobbies: Writing</Person>
		<Person 
			name = {this.state.persons[2].name} 
			age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className: 'App'}, React.createElement('h1',null, 'Does this work now?'));

  }
}

export default App;
