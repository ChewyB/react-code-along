import React, { Component } from "react";
import classes from "./App.css";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      persons: [
        //This is the persons object array
        { id: "p1", name: "Max", age: 28 },
        { id: "p2", name: "Manu", age: 29 },
        { id: "p3", name: "Stephanie", age: 26 }
      ],
      otherState: "some other value",
      showPersons: false
    };
    console.log("(App.js) constructor()")
  }

  componentWillMount() {
    console.log("(App.js) componentWillMount()");
  }
  
  componentDidMount() {
    console.log("(App.js) componentDidMount()");
  }

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
    console.log("(App.js) render()");
    let persons = null; //We create the persons variable that will hold all Person components
    if (this.state.showPersons) {
      persons = (
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
      );
      //This is done through Radium
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

   

    return (
      <div className={classes.App}>
        <Cockpit 
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        click={this.togglePersonHandler}/>

        {persons} {/* This is the format of JSX between the brackets */}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
