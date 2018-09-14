import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    persons: [
      //This is the persons object array
      { id: "p1", name: "Max", age: 28 },
      { id: "p2", name: "Manu", age: 29 },
      { id: "p3", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    //Fetch all the persons
    //const newPersonsArray = this.state.persons.slice();
    //OR
    const newPersonsArray = [...this.state.persons]; //This is known as spread. It spreads the elements in the array and then adds the persons array
    //Remove a person from allPersons array (delete it)
    newPersonsArray.splice(personIndex, 1); //This can lead to unpredictable apps
    //setState (change the value) of the persons object we created under state, with the new persons array
    this.setState({ persons: newPersonsArray });
  };

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
    let btnClass = "";

    let persons = null; //We create the persons variable that will hold all Person components
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((personParam, index) => {
            return (
              <ErrorBoundary key= {personParam.id}>
                <Person 
                click= {() => this.deletePersonHandler(index)} //Passing in as a function to have access to the index 
                
                name= {personParam.name}
                age= {personParam.age}
                changed= {event => this.nameChangedHandler(event)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
      //This is done through Radium
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    let styleClasses = [];
    if (this.state.persons.length <= 2) {
      styleClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      styleClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={styleClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons} {/* This is the format of JSX between the brackets */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
