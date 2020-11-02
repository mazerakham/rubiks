import { range } from '@src/arch/utils';

export default class RubiksCube {

  static getSolvedCube() {
    return new RubiksCube(
      [...range(6).map(i => this.solvedSide(i))]
    );
  };

  static solvedSide = (i) => {
    return range(3).map(j => range(3).map(j => i));
  };

  getColor = (i, j, k) => {
    return this.sides[i][j][k];
  }

  constructor(sides) {
    console.assert(sides.length == 6);
    this.sides = sides;
  }


}