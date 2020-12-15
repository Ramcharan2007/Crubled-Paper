class ground
{
    constructor(x,y,width,height)
    {
        var groundOptions=
        {
            'isStatic':true
        }
        this.ground=Bodies.rectangle(x,y,width,height,groundOptions);
        this.width=width;
        this.height=height;
        World.add(world,this.ground);
    }
    display()
    {
        var Gposition=this.ground.position;
        rectMode(CENTER);
        fill("brown");
        rect(Gposition.x,Gposition.y,this.width,this.height);
    }
}