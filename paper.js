class Paper{
    constructor(){
        var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':1.2
    }
        this.body = Bodies.circle(100, 600 ,20 ,options);
        
        
        World.add(world, this.body);

    }
    display(){
        fill("orange");

        var pos=this.body.position
    
    ellipse(pos.x, pos.y , 20,20 ); 
    }
    }
    function keyPressed() {
        if (keyCode === UP_ARROW) {
           Matter.Body.applyForce(this.body,this.body.position,{x:85,y:-85});
           
         }
       }