class paper
{
    constructor()
    {
        var options=
        {
            restitution:0.33,
            isStatic:false,
            friction:0.5,
            density:1.2
        }
        paper.body=Bodies.circle(200,50,20,options);
        this.image=loadImage("paper.png");
        //Body.scale(paper.body,0.5,0.5);
        //this.image.setScale(20,20);
        World.add(world,paper.body);
        
    }

    display()
    {
        push();
        //ellipseMode(RADIUS);
        strokeWeight(1);
        stroke("white");
        fill("red");
        //ellipse(paper.body.position.x,paper.body.position.y,20);
        imageMode(CENTER);
        image(this.image,paper.body.position.x,paper.body.position.y,50,50);
        pop();
    }

}