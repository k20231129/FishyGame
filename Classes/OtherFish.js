class OtherFish {
  constructor() {
    this.x = random([(windowWidth + random(100)), random(-100, 0)]);
    this.y = random(windowHeight - 50);
    this.sizeScale;
    this.w = 0;
    this.h = 0;
    this.speed = random(1, 4.5)
    this.setFishDirection();
    this.update();
    this.points;
  }

  update() {
    this.otherFishCor = {
      leftX: this.x,
      leftY: this.y,
      rightX: this.x + this.w,
      rightY: this.y + this.h
    }
  }

  display() {
    this.move();
    this.update();
  }

  move() {
    if (this.direction === 1) {
      if (this.x < windowWidth + 100) {
        this.x += this.speed
      }
      else {
        this.x = random(-100, 0);
        this.y = random(windowHeight);
      }
    }
    else {
      if (this.x > -100) {
        this.x -= this.speed
      }
      else {
        this.x = (windowWidth + random(100));
        this.y = random(windowHeight);
      }
    }
  }

  isColliding(playerFish) {
    //Check if the OtherFish is on top or below the PlayerFish
    if (this.otherFishCor.leftY > playerFish.fishCor.rightY || playerFish.fishCor.leftY > this.otherFishCor.rightY) {
      return false;
    }
    //Check if the OtherFish is to the left or right of the PlayerFish
    if (this.otherFishCor.rightX < playerFish.fishCor.leftX || playerFish.fishCor.rightX < this.otherFishCor.leftX) {
      return false;
    }
    // Else, rectangles overlap
    return true;
  }
  //For demo, refer to https://editor.p5js.org/kelsey_sha/sketches/WczL2stJg

  setFishDirection(){
    if (this.x > windowWidth) {
      this.direction = -1;
    }
    else if (this.x < 0) {
      this.direction = 1;
    }
  }
  respawn() {
    this.x = random([(windowWidth + random(100)), random(-100, 0)]);
    this.y = random(windowHeight);
  }
}

