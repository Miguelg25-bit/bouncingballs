
let balls = [];


let totalBalls = 5;

function setup() {
  createCanvas(600, 400);
  textSize(16);


  for (let i = 0; i < totalBalls; i++) {
    balls.push(new BouncingBall());
  }
}

function draw() {
  background(220);

  
  let r = random(255);
  let g = random(255);
  let b = random(255);
  fill(r, g, b);
  text("Click a ball to change its size and color!", mouseX + 10, mouseY);

  
  for (let ball of balls) {
    ball.move();
    ball.checkEdges();
    ball.display();
  }
}


function mousePressed() {
  for (let ball of balls) {
    if (ball.isMouseInside()) {
      ball.changeSize();
      ball.changeColor();
    }
  }
}


class BouncingBall {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(30, 60);
    this.xspeed = random(2, 4);
    this.yspeed = random(2, 4);
    this.color = color(random(255), random(255), random(255));
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  checkEdges() {
    if (this.x > width - this.size / 2 || this.x < this.size / 2) {
      this.xspeed *= -1;
    }
    if (this.y > height - this.size / 2 || this.y < this.size / 2) {
      this.yspeed *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  changeSize() {
    this.size = random(20, 80);
  }

  isMouseInside() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.size / 2;
  }
}
