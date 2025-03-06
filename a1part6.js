var canvas;
var ctx;
var w = 1000;
var h = 700;

document.getElementById("button").onclick=button;
setUpCanvas();

function button (){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    shape(w/2,h/2,input1,input2,input3);
    console.log("click", input1,input2,input3);
}

function shape(x,y,c, sc, n){
    x=Math.random()*w;
    y=Math.random()*h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arcTo(x-7, y+20, x+60, y+60, 10);
    ctx.moveTo(x,y);
    ctx.arcTo(x+7, y+20, x-60, y+60, 10);
    ctx.closePath();
    ctx.fillStyle=c;
    ctx.fill(); 
    ctx.strokeStyle=c;
    ctx.stroke();
    ctx.rotate(2);
    ctx.shadowBlur = 20;
    ctx.shadowColor=sc;
  
    for(var i=0;i<n;i++){
        shape(w/2,h/2,input1,input2,input3);
    }
    
    if(x<0){
        x=w/2
    }
    else if (x>1000){
        x=w/2
    }
    else {
        if(x=0){
       x=20
        } else if (x=1000){
        x=x-10
        } else {
        x=350
        }
        }
    
}

function setUpCanvas(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid black";
}

console.log("assignment 1");