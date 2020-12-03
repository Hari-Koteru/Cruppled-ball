class Paper {
 
 constructor(x,y,width,height); 
   options= {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2

  };
  body = Bodies.rectangle(x, y, 50, 50, options);
  width = 50;
  height = 50;
  add(world,body);

  diplay(){
   var pos = this.body.position;
   push();
   translate(pos.x,pos.y);
   roatate(angle);
  }

}
