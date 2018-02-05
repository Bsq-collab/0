
var c=document.getElementById("slate"); //gets the canvas tag 
var ctx=c.getContext("2d");//obj info
//Getting the button values
var clear=document.getElementById("clear");
var toggle=document.getElementById("toggle");
var shape= true; // let true be circle, false is square

//this draws the circle with an outline of black and a fill color of cyan
var circle= function(x,y){
  ctx.strokeStyle="black";
  ctx.fillStyle="cyan";
  ctx.beginPath();
  ctx.arc(x-10,y-10,10,0,2*Math.PI);//subtracting to center the mouse click
  ctx.stroke();
  ctx.fill();
}

//draws the square with an ourline of red and a fill color of purple
var square=function(x,y){
  ctx.strokeStyle="red";
  ctx.fillStyle="purple";
  ctx.fillRect(x-15,y-15,15,15);//subtracting to center the mouse click
}
//if the toggle button is clicked this negates the shape.
var changeShape=function(){
  if(shape){
    shape=false;
  }
  else{
    shape=true;
  }
}
// drawShape is called at mouse click and calls the circle and square functions
var drawShape=function(e){
  ctx.fillStyle="cyan";
  if(shape){
    circle(e.x,e.y);//at the mouse location
  }
  else{
    square(e.x,e.y);
  }
}
//when clear is clicked it clears the canvas, all coordinates.
var clearCanvas=function(){
  ctx.clearRect(0,0,600,600);
}
c.addEventListener("click",drawShape);
toggle.addEventListener("click",changeShape);
clear.addEventListener("click",clearCanvas);
