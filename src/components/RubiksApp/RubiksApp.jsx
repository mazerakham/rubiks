import React, { Component } from 'react';
import RubiksCubeContainer from './RubiksCube/RubiksCubeContainer';

export default class RubiksApp extends Component {

  render() {
    return (
      <div className="rubiksApp">
        <div className="buttons-panel">
          <button>Button 1</button>
          <button>Button 2</button>
        </div>
        <div className="cube-panel">
          Hello world.
          <RubiksCubeContainer />
        </div>
      </div>
    )
  }

}