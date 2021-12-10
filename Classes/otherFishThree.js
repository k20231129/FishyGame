class OtherFishThree extends OtherFish{
    constructor(img){
        super();
        this.otherFish3 = img;
        this.points = 5
        this.sizeScale = random(3.5);
        this.w = this.otherFish3.width/10*this.sizeScale
        this.h = this.otherFish3.height/10*this.sizeScale
    }
    
    display(){
        super.display();
        if (this.direction === 1){
            image(this.otherFish3, this.x, this.y, this.w, this.h);
        }
        else{
            push();
            translate(this.x, this.y);
            noFill();
            scale(-1, 1);
            image(this.otherFish3, -this.w, 0, this.w, this.h);
            pop();
        }
    }
}