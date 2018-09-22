import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component
{
    constructor(props) {
        super(props);
        
        console.log("(Persons.js) constructor()")
      }
    
      componentWillMount() {
        console.log("(Persons.js) componentWillMount()");
      }
      
      componentDidMount() {
        console.log("(Persons.js) componentDidMount()");
      }

    render() {
        console.log("(Persons.js) render()");
        return this.props.persons.map((personParam, index) => {
          return (
            <Person
              click={() => this.props.clicked(index)} //Passing in as a function to have access to the index
              name={personParam.name}
              age={personParam.age}
              changed={event => this.props.changed(event)}
              key={personParam.id}
            />
          );
        });
    }
}   

export default Persons;
