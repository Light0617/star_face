import React from 'react';
import './Person.css';

const person = (props) => {
  return (
    <div className = "Person">
      <h1 onClick = {props.click}>{props.name} have a hobby with {props.hobby}!</h1>
      <h2>{props.children}</h2>
      <input type = 'text' onChange={props.changed} value = {props.name}/>
    </div>
  )
};

export default person;
