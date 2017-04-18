import React, { Component } from 'react';
import './css/App.css';
import Gray from './components/GrayButtons';
import Pink from './components/PinkButtons';
import Black from './components/BlackButtons';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator!</h1>
        <div className="box">
          <div className="title">
            <p>GA Instruments TI-WDI</p>
          </div>
          <div className="display">
            <input type="text" readOnly size="18" id="d"/>
          </div>
          <div className="keys">
            <p>
              <Gray value="mrc" />
              <Gray value="m-" />
              <Gray value="m+" />
              <Pink value="/" />
            </p>
            <p>
                <Black value="7" />
                <Black value="8" />
                <Black value="9" />
                <Pink value="*" />
              </p>
              <p>
                <Black value="4" />
                <Black value="5" />
                <Black value="6" />
                <Pink value="-" />
              </p>
              <p>
                <Black value="1" />
                <Black value="2" />
                <Black value="3" />
                <Pink value="+" />
              </p>
              <p>
                <Black value="0" />
                <Black value="." />
                <Black value="C" />
                <input type="button" className="button orange" value="=" />
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
