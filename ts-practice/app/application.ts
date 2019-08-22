class Point {
   x: number;
   y: number;
   constructor(x: number, y: number) {
     this.x = x;
     this.y = y;
   }

   add(point: Point) {
     this.x += point.x;
     this.y += point.y
   }
}

class Rect {
  topLeft: Point;
  bottomRight: Point;

  constructor(left: number, top: number, right: number, bottom: number) {
    this.topLeft = new Point(left, top);
    this.bottomRight = new Point(right, bottom);
  }

  add(point: Point) {
    this.topLeft.add(point);
    this.bottomRight.add(point);
  }

}

class Ball extends Rect {
  radius: number;
  pos: Point;
  dir: Point;
  min: Point;
  max: Point;

  constructor(radius: number, posX: number, posY: number, dirX: number, dirY: number) {
    super(posX, posY, posX + 2 * radius, posY + 2 * radius);
    this.radius = radius;
    this.pos = new Point(posX, posY);
    this.dir = new Point(dirX, dirY);
  }

  move(): Point {
    if(this.pos.x + this.dir.x <= this.min.x) {
      this.dir.x *= -1;
    }
    if(this.pos.y + this.dir.y <= this.min.y) {
      this.dir.y *= -1;
    }
    if(this.pos.x + this.dir.x + this.radius * 2 >= this.max.x) {
      this.dir.x *= -1;
    }
    if(this.pos.y + this.dir.y+ this.radius * 2 >= this.max.y) {
      this.dir.y *= -1;
    }
    this.pos.add(this.dir);

    return this.pos;
  }

  setConstraints(minX: number, minY: number, maxX: number, maxY: number) {
    this.min = new Point(minX, minY);
    this.max = new Point(maxX, maxY);
  }

}

var ballElement : HTMLElement = <HTMLElement>document.querySelectorAll('.ball')[0];
var boardElement : HTMLElement = <HTMLElement>document.querySelectorAll('.game-board')[0];

var ball = new Ball(parseInt(getComputedStyle(ballElement)['border-top-left-radius']), ballElement.offsetLeft, ballElement.offsetTop, 1, -1);
ball.setConstraints(0,0, boardElement.offsetWidth, boardElement.offsetHeight);

setInterval(() => {
  let {x: posX, y: posY} = ball.move();

  ballElement.style.left = posX + 'px';
  ballElement.style.top = posY + 'px';

}, 15);