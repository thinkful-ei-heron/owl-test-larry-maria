import React from 'react';
import STORE from './store.js';

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
              name={STORE.getParticipant(evnt.participantId)} 
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
