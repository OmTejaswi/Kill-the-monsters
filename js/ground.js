class createGround {
    constructor(x,y,width,height) {
        var physics = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,physics);
        World.add(world,this.body);

        this.w = width;
        this.h = height;
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("fff");
        rect(pos.x,pos.y,this.w,this.h);
    }
}