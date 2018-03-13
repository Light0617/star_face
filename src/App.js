import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import './css/style.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons : [
      { id : 'asd', name : 'Max', hobby : 'Listening music'},
      { id : 'kas', name : 'White', hobby : 'Hiking'},
      { id : 'ass', name : 'Heisenberg', hobby : 'Swimming'}
    ],
    otherState : 'big breast',
    showPersons : false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //update new person
    //const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    //update new persons
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //update
    this.setState({ persons : persons});
  }
  deleteNameHandler = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons : persons});
  }
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map( (person, index) => {
            return <Person
              click = { () => this.deleteNameHandler(index)}
              name = {person.name}
              hobby = {person.hobby}
              key = {person.id}
              changed = { (event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return(
      <div className = 'App'>
        <h1> Hello world!</h1>
        <div>
          <button className = 'btn btn-white btn-animiated'
            style = {style}
            onClick = {this.togglePersonsHandler}>
              Switch Name
          </button>
        </div>
        {persons}
      </div>
    );
  }
}

export default App;
