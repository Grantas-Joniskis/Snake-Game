import Snake from '../snake/snake';
import SquareManager from '../square/square-manager';

class Area {
  private static areaClassName = 'area';

  private static rowClassName = 'area-row';

  private static squareClassName = 'area-square';

  public static createAreaInHTML(
    areaSize: number,
    borderSize: number,
    squareSize: number,
    squareNumberPerRow: number,
  ): void {
    this.styleHTMLBody();
    this.createHTMLArea(areaSize, borderSize);
    this.createHTMLSquares(squareNumberPerRow, squareSize);
  }

  public static startAreaInHTML(): void {
    SquareManager.updateSquare(Snake.getHeadPosition());
  }

  private static styleHTMLBody(): void {
    const body = this.getHTMLBody();

    body.style.margin = '0px';
    body.style.width = '100vw';
    body.style.height = '100vh';
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.backgroundColor = '#F5F3C1';
  }

  private static createHTMLArea(areaSize: number, borderSize: number): void {
    const body = this.getHTMLBody();
    const areaDiv = document.createElement('div');

    areaDiv.classList.add(this.areaClassName);
    areaDiv.style.height = `${areaSize}px`;
    areaDiv.style.width = `${areaSize}px`;
    areaDiv.style.border = `${borderSize}px solid #0EA293`;

    body.append(areaDiv);
  }

  private static createHTMLSquares(squareNumberPerRow: number, squareSize: number): void {
    let squareId = 1;
    for (let i = 1; i <= squareNumberPerRow; i += 1) {
      const row = this.createHTMLRow();
      for (let j = 1; j <= squareNumberPerRow; j += 1) {
        this.createHTMLSquare(squareId, row, squareSize);
        squareId += 1;
      }
    }
  }

  private static createHTMLRow(): HTMLDivElement {
    const row = document.createElement('div');
    const area = this.getHTMLArea();

    row.classList.add(`.${this.rowClassName}`);
    row.style.display = 'flex';

    area.append(row);

    return row;
  }

  private static createHTMLSquare(
    id: number,
    row: HTMLDivElement,
    squareSize: number,
  ): void {
    const square = document.createElement('div');

    square.id = String(id);
    square.classList.add(`.${this.squareClassName}`);
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = 'white';
    square.style.boxShadow = 'inset 0 0 0 1px #F3E8FF';
    row.append(square);
  }

  private static getHTMLBody(): HTMLBodyElement {
    return document.querySelector('body') as HTMLBodyElement;
  }

  private static getHTMLArea(): HTMLDivElement {
    return document.querySelector(`.${this.areaClassName}`) as HTMLDivElement;
  }
}

export default Area;
