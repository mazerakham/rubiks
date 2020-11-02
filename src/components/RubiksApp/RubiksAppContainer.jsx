import React, { Component } from 'react';
import RubiksApp from './RubiksApp';
import './RubiksApp.scss';

export default class RubiksAppContainer extends Component {

  render() {
    return (
      <div className="rubiksAppContainer">
        <h3>Container hello world.</h3>
        <RubiksApp />
      </div>
    )
  }

}