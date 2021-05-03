import React from 'react';
import Tabs from './components/Tabs';
import BlocklyCanvas from './components/Blockly/BlocklyCanvas'
import './App.css';

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
     <Tabs> 
       <div label="Mission #1"> 
         See ya later, <em>Alligator</em>! 
       </div> 
       <div label="Mission #2"> 
         After 'while, <em>Crocodile</em>! 
       </div> 
       <div label="Mission #3"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div>
       <div label="Mission #4"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
       <div label="Mission #5"> 
         Nothing to see here, this tab is <em>extinct</em>! 
       </div> 
     </Tabs>

      <BlocklyCanvas />
      
    </div>
  );
}

export default App;