class OtherFishOne extends OtherFish{
    constructor(img){
        super();
        this.otherFish1 = img;
        this.sizeScale = random(5.5); 
        this.w = this.otherFish1.width/15*this.sizeScale;
        this.h = this.otherFish1.height/15*this.sizeScale;
        this.points = floor(this.w);
    }

    display(){
        super.display();
        if (this.direction === 1){
            image(this.otherFish1, this.x, this.y, this.w, this.h);
        }
        else{
            push();
            translate(this.x, this.y);
            noFill();
            scale(-1, 1);
            image(this.otherFish1, -this.w, 0, this.w, this.h);
            pop();
        }
    }
    
}
