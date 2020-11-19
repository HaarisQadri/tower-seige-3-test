class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.2,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
      }


      score(){
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score = score +1;
        }
      }

      display(){

       

        if(this.body.speed < 5){
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,30,40);
          pop();
          
          }
        
          else{
           World.remove(world, this.body);
           push();
           this.Visiblity=this.Visiblity-0.01;
           tint(255,this.Visiblity);
           rect(0, 0,30,40)
           pop();
          }
          
        
      }
      
}