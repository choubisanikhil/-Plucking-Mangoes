class Ground{

    constructor(){

        var options={
            isStatic:true,
            friction:0.4
        }
      this.body = Bodies.rectangle(600,625,1200,20,options);
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill("silver");
      rect(600,625,1200,20);
    
    }

}