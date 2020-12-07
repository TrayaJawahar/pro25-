class Paper {
  constructor(x, y, radius) {
    var options = {
      isStatic:false,
        'restitution':0.3,
        'friction':1,
        'density':3.5,
        }
        this.image = loadImage("pictures/paper.png");
    this.body = Bodies.circle(x, y,30, options); 
    World.add(world, this.body);
      }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    ellipse(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 0, 0,100,100);
    fill("white");
    pop();  
  }
}
