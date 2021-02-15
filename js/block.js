class Block {
    constructor(x,y) {
        var physics = {
            restitution: 0.8,
            friction: 1,
            density:20,
        }
        this.body = Bodies.rectangle(x,y,30,30,physics);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,30,30);
        pop();
    }
}