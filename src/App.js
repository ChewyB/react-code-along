import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [ //This is the persons object array
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

 deletePersonHandler = (personIndex) => {
  //Fetch all the persons
  const newPersonsArray = this.state.persons;
  //Remove a person from allPersons array (delete it)
  newPersonsArray.splice(personIndex, 1);
  //setState (change the value) of the persons object we created under state, with the new persons array
  this.setState({persons: newPersonsArray})
 }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null; //We create the persons variable that will hold all Person components
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((personParam, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)} //Passing in as a function to have access to the index
            name={personParam.name} 
            age={personParam.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} 
                onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>

        {persons} {/* This is the format of JSX between the brackets */}
        

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
