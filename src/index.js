import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RubiksApp from './components/RubiksApp';
import RubiksAppContainer from './components/RubiksAppContainer';
import './index.css';

class TestComponent extends Component {
  constructor() {
    super();
    console.log("TestComponent constructor.");
  }

  render() {
    return (
      <div>
        <h1>
          Hello World!
        </h1>
      </div>
    );
  }
}

console.log("We are here.");

ReactDOM.render(
  <RubiksAppContainer />,
  document.getElementById('root')
);
