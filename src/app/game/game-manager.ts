import Snake from '../snake/snake';
import SnakeDirection from '../snake/snake-direction';

class GameManager {
  private static up = ['ArrowUp', 'KeyW'];

  private static right = ['ArrowRight', 'KeyD'];

  private static down = ['ArrowDown', 'KeyS'];

  private static left = ['ArrowLeft', 'KeyA'];

  public static registerKeyboard(): void {
    document.addEventListener('keydown', (event) => {
      if (this.up.includes(event.code)) {
        Snake.setPrevDirection(Snake.getDirection());
        Snake.setDirection(SnakeDirection.UP);
      } else if (this.right.includes(event.code)) {
        Snake.setPrevDirection(Snake.getDirection());
        Snake.setDirection(SnakeDirection.RIGHT);
      } else if (this.down.includes(event.code)) {
        Snake.setPrevDirection(Snake.getDirection());
        Snake.setDirection(SnakeDirection.DOWN);
      } else if (this.left.includes(event.code)) {
        Snake.setPrevDirection(Snake.getDirection());
        Snake.setDirection(SnakeDirection.LEFT);
      }
    });
  }
}

export default GameManager;
