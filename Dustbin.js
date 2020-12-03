class Dustbin{

    constructor(x,y,witdh,height) {  
      var options={
       restituion:0.3,
       friction:0.5,
       denity:1.2
     }
     this.body = bodies.rectangle(x,y,witdh,height)
     this.witdh = witdh;
     this.height = height;

     World.add(world, this.body);
  }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    }




};