class PlayerFish{
    constructor(playerAnimation){
        this.direction = 1;
        this.points = 0;
        this.scale = 0;
        this.playerAnimation = playerAnimation;
        this.playerAnimation.frameDelay = 5;
        this.animatedSpriteFish = createSprite(0, 0);
        this.animatedSpriteFish.scale = 0.05 
        this.animatedSpriteFish.addAnimation('floating', this.playerAnimation);
        this.w = this.animatedSpriteFish.width //53
        this.h = this.animatedSpriteFish.height
        this.x = windowWidth / 2 - (this.w / 2);
        this.y = windowHeight / 2 - (this.h / 2);
        this.update()
    }
    update(){
        this.fishCor = { 
            leftX: this.x,
            leftY: this.y,
            rightX: this.x + this.w,
            rightY: this.y + this.h
        }
        this.w = this.animatedSpriteFish.width;
        this.h = this.animatedSpriteFish.height;
    }
    display(){
        this.update();
        if (this.direction === 1) {
            push();
            translate(this.x + this.w/2, this.y + this.h/2);
            this.animatedSpriteFish.scale = (0.05 + this.scale)
            drawSprite(this.animatedSpriteFish)
            pop();
        }
        else {
            push();
            translate(this.x+this.w/2, this.y + this.h/2);
            scale(-1, 1);
            this.animatedSpriteFish.scale = (0.05 + this.scale)
            drawSprite(this.animatedSpriteFish)
            pop();
        }
        this.move();
    }
    
    move(){
        if (keyIsDown(39)){ //right arrow
            if (this.x < windowWidth - this.w){
                this.x += 3
                this.direction = -1
                this.fishCor.leftX = this.x
                this.fishCor.rightX = this.x + this.w
            }
        }
        if (keyIsDown(37)){ //left arrow
            if (this.x > 0){
                this.x -= 3
                this.direction = 1
                this.fishCor.leftX = this.x
                this.fishCor.rightX = this.x + this.w
            }
        }
        if (keyIsDown(38)){ //up arrow
            if (this.y > 0){
                this.y -= 3
                this.fishCor.leftY = this.y
                this.fishCor.rightY = this.y + this.h
            }
        }
        if (keyIsDown(40)){ //down arrow
            if (this.y < windowHeight - this.h){
                this.y += 3
                this.fishCor.leftY = this.y
                this.fishCor.rightY = this.y + this.h
            }
        }
    }

    collectPoints(otherFish){
        this.points += otherFish.points
        this.grow();
        return;
    }

    grow(){
        this.scale = this.points/10000
    }

}