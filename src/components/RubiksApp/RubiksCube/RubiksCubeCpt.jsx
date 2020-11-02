import React, { Component } from 'react';
import JVG3D from '@src/components/JVG/JVG3D';
import {BottomLayer, MiddleLayer, TopLayer} from './jvg/Layers';

export default class RubiksCubeCpt extends Component {

  constructor(props) {
    super(props);
    this.state = {cube: props.cube};
  }

  render() {
    return (
      <div>
        Rubiks Cube Hello World.
        <JVG3D width={150} height={150}>
          <BottomLayer cube={this.state.cube} />
          <MiddleLayer cube={this.state.cube} />
          <TopLayer cube={this.state.cube} />
        </JVG3D>
      </div>
    )
  }

}