class OtherFishTwo extends OtherFish{
    constructor(img){
        super();
        this.otherFish2 = img;
        this.points = 5
        this.sizeScale = random(1);
        this.w = this.otherFish2.width/12*this.sizeScale
        this.h = this.otherFish2.height/12*this.sizeScale
    }
    
    display(){
        super.display();
        if (this.direction === 1){
            image(this.otherFish2, this.x, this.y, this.w, this.h);
        }
        else{
            push();
            translate(this.x, this.y);
            noFill();
            scale(-1, 1);
            image(this.otherFish2, -this.w, 0, this.w, this.h);
            pop();
        }
    }
}