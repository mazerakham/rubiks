import React, { Component } from 'react';
import Smile3D from '@src/components/JVG/Smile3D';

export class BottomLayer extends Component {
  render() {
    return (
      <Smile3D x={0.5} y={0.5} z={0.5} />
    )
  }
}

export class MiddleLayer extends Component {
  render() {
    return (
      <Smile3D x={0.5} y={0.5} z={1.5} />
    )
  }
}

export class TopLayer extends Component {
  render() {
    return (
      <Smile3D x={0.5} y={0.5} z={2.5} />
    )
  }
}