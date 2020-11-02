import React, { Component } from 'react';
import RubiksCubeCpt from './RubiksCubeCpt';
import RubiksCube  from '@src/arch/RubiksCube';

export default class RubiksCubeContainer extends Component {
  render(){ 
    return (
      <RubiksCubeCpt cube={RubiksCube.getSolvedCube()}/>
    );
  }
}