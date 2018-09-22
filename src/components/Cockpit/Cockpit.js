import React from "react";
import classes from './Cockpit.css';

const cockpit = props => {

    let styleClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }
    

    if (props.persons.length <= 2) {
      styleClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      styleClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={styleClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.click}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;