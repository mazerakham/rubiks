import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  <TestComponent />,
  document.getElementById('root')
);
