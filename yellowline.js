class YellowLine{
    constructor(){
        this.x = 400;
        this.y = 490;
        this.width = 800;
        this.height = 5;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height);
    }

    display(){
        var pos = this.body.position
     
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}