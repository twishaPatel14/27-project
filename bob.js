class Bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8


			}
		this.x=x;
		this.y=y;
    
  
		this.body=Bodies.circle(this.x, this.y, 25, options)
		World.add(world, this.body);

	}
	display()
	{

			var paperpos=this.body.position;		

			push()
			
			ellipseMode(RADIUS)
			fill(254,0,255)
      ellipseMode(CENTER);
    ellipse(this.body.position.x,this.position.y,25,25)
			pop()

	}

} 