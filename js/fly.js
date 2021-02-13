class fly{
    constructor(body1,body2,offsetX) {
        this.offsetX=offsetX;
        

      var opt={
         bodyA:body1,
         bodyB:body2,
         }

      this.con = Matter.Constraint.create(opt);
      World.add(world,this.con);

      this.posx = offsetX;
      
    }
    display() {
        line(this.con.bodyA.position.x,this.con.bodyA.position.y,this.con.bodyB.position.y+this.posx,
            this.con.bodyB.position.y)
    }
}