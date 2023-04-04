import SquareState from './square-state';

class Square {
  private squareId: number;

  private state: SquareState;

  constructor(squareId: number) {
    this.squareId = squareId;
    this.state = SquareState.EMPTY;
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
