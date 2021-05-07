import React, { Component } from 'react';
import Tabs from './components/Tabs';
import BlocklyCanvas from './components/Blockly/BlocklyCanvas'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.setState({
      activeTab: "Mission 1",
      currentCode: null,
      code1: null,
      code2: null,
      code3: null,
      code4: null,
      code5: null
    });

  }

  printActiveTab(tab) {
    console.log(tab);
    this.setState({
      activeTab: tab
    });
  }

  printCode(code) {

    console.log("From app.js " + code);
    this.setState({
      currentCode: code
    });
  }

  render() {
    return (
      <div>
        <h1>Tabs Demo</h1>
        
        <Tabs onTabChanged={this.printActiveTab.bind(this)}> 
          <div label="Mission 1"> 
            See ya later, <em>Alligator</em>! 
          </div> 
          <div label="Mission 2"> 
            After 'while, <em>Crocodile</em>! 
          </div> 
          <div label="Mission 3"> 
            Nothing to see here, this tab is <em>extinct</em>! 
          </div>
          <div label="Mission 4"> 
            Nothing to see here, this tab is <em>extinct</em>! 
          </div> 
          <div label="Mission 5"> 
            Nothing to see here, this tab is <em>extinct</em>! 
          </div> 
        </Tabs>

        
        <BlocklyCanvas handleWorkspaceChanged={this.printCode.bind(this)} />
        
      </div>
    );
  }
}

export default App;