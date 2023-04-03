import AreaManager from '../area/area-manager';
import Score from '../score/score';
import SquareManager from '../square/square-manager';
import SquareState from '../square/square-state';
import SnakeDirection from './snake-direction';

class Snake {
  private static headColor = '#F7C8E0';

  private static bodyColor = '#B0DAFF';

  private static headPosition: number;

  private static prevHeadPosition: number;

  private static body: number[];

  // Needed for updating the last square
  private static lastBodySquare: number;

  private static direction: SnakeDirection;

  private static prevDirection: SnakeDirection;

  public static init(): void {
    this.body = [];
    this.headPosition = 190;
    this.body[0] = this.headPosition - 1;
    this.direction = SnakeDirection.RIGHT;
  }

  public static run(): void {
    if (this.bodyCollision()) return;
    this.oppositeDirection();
    this.move();
    this.scoreCollision();
    this.updateBody();
    this.updateSnake();
  }

  private static move(): void {
    this.prevHeadPosition = this.headPosition;

    if (this.direction === SnakeDirection.UP) {
      this.headPosition -= AreaManager.getSquareNumberPerRow();
      if (this.headPosition < 1) {
        this.headPosition = AreaManager.getTotalSquareNumber() + this.headPosition;
      }
    } else if (this.direction === SnakeDirection.RIGHT) {
      if (this.prevHeadPosition % AreaManager.getSquareNumberPerRow() === 0) {
        this.headPosition -= AreaManager.getSquareNumberPerRow() - 1;
      } else this.headPosition += 1;
    } else if (this.direction === SnakeDirection.DOWN) {
      this.headPosition += AreaManager.getSquareNumberPerRow();
      if (this.headPosition > AreaManager.getTotalSquareNumber()) {
        this.headPosition -= AreaManager.getTotalSquareNumber();
      }
    } else if (this.direction === SnakeDirection.LEFT) {
      if ((this.prevHeadPosition - 1) % AreaManager.getSquareNumberPerRow() === 0) {
        this.headPosition += AreaManager.getSquareNumberPerRow() - 1;
      } else this.headPosition -= 1;
    }
  }

  private static reset(): void {
    const arr = [Score.getPosition(), this.lastBodySquare, ...this.body, this.headPosition];
    for (let i = 0; i < arr.length; i += 1) {
      const square = SquareManager.getSquare(arr[i]);
      square.setState(SquareState.EMPTY);
      SquareManager.updateHTMLSquare(arr[i]);
    }
    this.init();
    Score.create();
  }

  private static oppositeDirection(): void {
    if ((
      this.prevDirection === SnakeDirection.UP && this.direction === SnakeDirection.DOWN)
      || (this.prevDirection === SnakeDirection.RIGHT && this.direction === SnakeDirection.LEFT)
      || (this.prevDirection === SnakeDirection.DOWN && this.direction === SnakeDirection.UP)
      || (this.prevDirection === SnakeDirection.LEFT && this.direction === SnakeDirection.RIGHT)
    ) this.direction = this.prevDirection;
  }

  private static bodyCollision(): boolean {
    if (this.bodyContains(this.headPosition)) {
      this.reset();
      return true;
    }
    return false;
  }

  private static scoreCollision(): void {
    if (this.headPosition === Score.getPosition()) {
      this.body.unshift(this.lastBodySquare);
      this.lastBodySquare = 0;
      Score.create();
    }
  }

  private static updateBody(): void {
    [this.lastBodySquare] = this.body;

    for (let i = 0; i < this.body.length - 1; i += 1) {
      this.body[i] = this.body[i + 1];
    }
    this.body[this.body.length - 1] = this.prevHeadPosition;
  }

  private static updateSnake(): void {
    const arr = [this.lastBodySquare, ...this.body, this.headPosition];
    for (let i = 0; i < arr.length; i += 1) {
      SquareManager.updateSquare(arr[i]);
    }
  }

  public static getHeadColor(): string {
    return this.headColor;
  }

  public static getBodyColor(): string {
    return this.bodyColor;
  }

  public static getHeadPosition(): number {
    return this.headPosition;
  }

  public static getBody(): number[] {
    return [...this.body];
  }

  public static bodyContains(squareId: number) {
    return this.getBody().includes(squareId);
  }

  public static getPrevHeadPosition(): number {
    return this.prevHeadPosition;
  }

  public static setDirection(direction: SnakeDirection): void {
    this.direction = direction;
  }

  public static getDirection(): SnakeDirection {
    return this.direction;
  }

  public static setPrevDirection(direction: SnakeDirection): void {
    this.prevDirection = direction;
  }
}

export default Snake;
