import React from 'react';
import Split from './Split';
import ChatLog from './ChatLog'
import './App.css';

function App() {
  return (
    <main className='App'>
      <Split className='left' flexBasis={0.5}>
        <ChatLog />
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  )
}

export default App;