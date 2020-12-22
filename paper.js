class paper {

constructor(x,y,r){
	var options ={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
}
this.x=x;
this.y=y;
this.r=r;
this.Body=Bodies.circle(x,y,r/2,options); 
this.image=loadImage("paper.png");
World.add(world,this.Body);


}
display(){
	var pos=this.Body.position 
	//push();
	//translate(pos.x,pos.y);
	//ellipse(pos.x,pos.y,this.r,this.r);
	imageMode(CENTER);
	image(this.image,pos.x,pos.y,this.r,this.r);
	//pop();

}


}

