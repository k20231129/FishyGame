class OtherFishFour extends OtherFish{
    constructor(img){
        super();
        this.otherFish4 = img;
        this.points = 5
        this.sizeScale = random(2);
        this.w = this.otherFish4.width/10*this.sizeScale
        this.h = this.otherFish4.height/10*this.sizeScale
    }
    
    display(){
        super.display();
        if (this.direction === 1){
            image(this.otherFish4, this.x, this.y, this.w, this.h);
        }
        else{
            push();
            translate(this.x, this.y);
            noFill();
            scale(-1, 1);
            image(this.otherFish4, -this.w, 0, this.w, this.h);
            pop();
        }
    }

}