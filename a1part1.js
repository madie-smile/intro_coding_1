var canvas;
var ctx;
var w = 1000;
var h = 700;

document.getElementById("button").onclick=button;
setUpCanvas();
shape(w/2,h/2,100,100,input1,input2,input3);

function button (){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    shape(w/2,h/2,100,100,input1,input2,input3);
    console.log("click", input1,input2,input3);
}

function shape(x,y,sw,sh,c,s,r){
    x=x-rw/2;
    y=y-rh/2;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+rw,y);
    ctx.lineTo(x+rw,y+rh);
    ctx.lineTo(x,y+rh);
    ctx.closePath();
    ctx.strokeStyle=c;
    ctx.stroke(); 
}

function setUpCanvas(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid black";
}

console.log("assignment 1");