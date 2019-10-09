import React from 'react';
import STORE from './store.js';

function LogEvent (props) {
  return (
  <div>
    <p> {props.name} is on Stage</p>
    <img src={props.avatar} alt="Avatar" />
  </div>
  );
}

function Stage() {
  const onStagePersons = STORE.participants.filter(person =>
    person.onStage === true
  );

  console.log(`On Stage Persons ${JSON.stringify(onStagePersons)}`);

  const participant = onStagePersons.map(person => 
    <LogEvent key={person.id}
              name={person.name}
              avatar={person.avatar}
              onStage={person.onStage} />
  );

  return (
    <div>
      <h3>Stage</h3>
      {participant}
    </div>
  )
}

export default Stage;