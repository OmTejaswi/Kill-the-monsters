class createHero {
    constructor(x,y,r) {

        var physycs = {
            density: 1,
            frictionAir: 1
        }

        this.body = Bodies.circle(x,y,r);
        World.add(world,this.body);

        this.image = loadImage("images/Superhero-01.png");
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,350,150);
    }
}