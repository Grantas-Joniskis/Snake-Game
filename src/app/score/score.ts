import AreaManager from '../area/area-manager';
import Snake from '../snake/snake';
import SquareManager from '../square/square-manager';

class Score {
  private static position: number;

  private static color = '#FFB26B';

  public static create() {
    this.generatePosition();
    SquareManager.updateSquare(this.position);
  }

  public static generatePosition(): void {
    const excludedSquares = [Snake.getHeadPosition(), ...Snake.getBody()];

    this.position = Math.floor(Math.random()
    * (AreaManager.getTotalSquareNumber() - 1 + 1)) + 1;

    while (excludedSquares.includes(this.position)) {
      this.position = Math.floor(Math.random()
      * (AreaManager.getTotalSquareNumber() - 1 + 1)) + 1;
    }
  }

  public static getPosition(): number {
    return this.position;
  }

  public static getColor(): string {
    return this.color;
  }
}

export default Score;
