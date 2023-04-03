import AreaManager from '../area/area-manager';
import Snake from '../snake/snake';
import SquareManager from '../square/square-manager';
import GameManager from './game-manager';
import Score from '../score/score';

class Game {
  public static start() {
    AreaManager.initArea();
    SquareManager.initSquares();
    GameManager.registerKeyboard();
    Snake.init();
    Score.create();

    setInterval(() => {
      Snake.run();
      AreaManager.runArea();
    }, 100);
  }
}

export default Game;
