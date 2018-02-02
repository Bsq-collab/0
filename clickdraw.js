var c=document.getElementById("slate");//gets the canvas tag 
var ctx=c.getContext("2d");//obj info
ctx.fillStyle="cyan";
ctx.strokeStyle="black";//changes the color
ctx.fillRect(50,50,100,200);//
/*ctx.clearRect(50,50,100,200);
for (var i = 0; i < 6; i++){
  for (var j = 0; j < 6; j++){
    ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' +
                     Math.floor(255 - 42.5 * j) + ',0)';
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}

/*
fillStyle()
strokeStyle()
clearRect()
fillText()

*/
