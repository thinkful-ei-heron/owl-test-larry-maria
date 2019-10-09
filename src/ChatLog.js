import React from 'react';
import STORE from './store.js';

function getParticipant (id) {
  console.log(`ID is ${id}`);
  const part = STORE.participants.find (
        myObj => myObj.id === id
  );
  console.log(part);
  return part.name;
}

function LogEvent (props) {
  return (
  <p>
    {props.name} {props.type}
  </p>
  );
}

function ChatLog() {
  const events = STORE.chatEvents.map(evnt => 
    <LogEvent key={evnt.key} 
              name={getParticipant(evnt.participantId)} 
              type={evnt.type} />
  );

  return (
    <div>
      <h3>Chat Log</h3>
      {events}
    </div>
  )
}

export default ChatLog;
