import SquareState from './square-state';

class Square {
  private squareId: number;

  private state: SquareState;

  private prevSquare: Square | undefined;

  constructor(squareId: number) {
    this.squareId = squareId;
    this.state = SquareState.EMPTY;
    this.prevSquare = undefined;
  }

  public getSquareId(): number {
    return this.squareId;
  }

  public setState(state: SquareState): void {
    this.state = state;
  }

  public getState(): SquareState {
    return this.state;
  }
}

export default Square;
