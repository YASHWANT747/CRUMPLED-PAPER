class paper{
    constructor(x,y,r)
    {
 
    var option = {
        isStatic: false,
        restitution : 0.5,
        friction : 0,
        density : 1.2,
    }

          this.x=x;
         this.y=y;
         this.r = r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, option);
        
        
		World.add(world, this.body);
        }
    
       display()
        {
        var paperpos = this.body.position
       //var angle = this.body.angle;
        push ()
        translate(paperpos.x, paperpos.y);
        //rotate (angle);
         ellipseMode(RADIUS);
         fill(255,0,255)
         image(this.image , 0, 0, this.r,this.r);
         pop()
       }
}