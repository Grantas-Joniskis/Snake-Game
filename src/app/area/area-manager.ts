import Area from './area';

class AreaManager {
  private static areaSize = 900;

  private static borderSize = 6;

  private static squareSize = 45;

  private static squareNumberPerRow = this.areaSize / this.squareSize;

  private static totalSquareNumber = this.squareNumberPerRow ** 2;

  public static initArea(): void {
    Area.createAreaInHTML(
      this.areaSize,
      this.borderSize,
      this.squareSize,
      this.squareNumberPerRow,
    );
  }

  public static runArea(): void {
    Area.startAreaInHTML();
  }

  public static getSquareNumberPerRow(): number {
    return this.squareNumberPerRow;
  }

  public static getTotalSquareNumber(): number {
    return this.totalSquareNumber;
  }
}

export default AreaManager;
