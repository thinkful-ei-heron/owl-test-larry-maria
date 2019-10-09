import React from 'react';
import Split from './Split';
import ChatLog from './ChatLog'
import Stage from './Stage'
import './App.css';

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={0.5}>
        <ChatLog />
      </Split>
      <Split className='right'>
        <Stage />
      </Split>
    </main>
  )
}

export default App;
