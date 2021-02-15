class createMonster {
    constructor(x,y,width,height) {

        var physics = {
            density: 1,
            restitution: 0.5,
            friction: 1,
            density: 2
           // frictionAir: 1,
            //isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,physics);
        World.add(world,this.body);

        this.image = loadImage("images/Monster-01.png");
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,200,200);
    }
}