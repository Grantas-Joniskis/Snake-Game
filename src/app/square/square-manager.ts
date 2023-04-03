import AreaManager from '../area/area-manager';
import Score from '../score/score';
import Snake from '../snake/snake';
import Square from './square';
import SquareState from './square-state';

class SquareManager {
  private static squares: {
    [key: number]: Square;
  } = {};

  public static initSquares(): void {
    for (let i = 1; i <= AreaManager.getTotalSquareNumber(); i += 1) {
      this.addSquare(i, new Square(i));
    }
  }

  public static updateSquare(squareId: number) {
    if (squareId === 0) return;
    this.updateSquareValue(squareId);
    this.updateHTMLSquare(squareId);
  }

  public static updateSquareValue(squareId: number): void {
    const square = this.getSquare(squareId);

    if (squareId === Snake.getHeadPosition()) square.setState(SquareState.HEAD);
    else if (Snake.bodyContains(square.getSquareId())) square.setState(SquareState.BODY);
    else if (squareId === Score.getPosition()) square.setState(SquareState.SCORE);
    else square.setState(SquareState.EMPTY);
  }

  public static updateHTMLSquare(squareId: number): void {
    const square = this.getSquare(squareId);
    const htmlSquare = this.getHTMLSquare(squareId);

    let squareColor: string;
    if (square.getState() === SquareState.HEAD) squareColor = Snake.getHeadColor();
    else if (square.getState() === SquareState.BODY) squareColor = Snake.getBodyColor();
    else if (square.getState() === SquareState.SCORE) squareColor = Score.getColor();
    else squareColor = 'white';

    htmlSquare.style.backgroundColor = squareColor;
  }

  public static addSquare(squareId: number, square: Square) {
    this.squares[squareId] = square;
  }

  public static getSquare(squareId: number): Square {
    return this.squares[squareId];
  }

  public static getHTMLSquare(squareId: number): HTMLDivElement {
    return document.getElementById(String(squareId)) as HTMLDivElement;
  }
}

export default SquareManager;
