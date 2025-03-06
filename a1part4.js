var canvas;
var ctx;
var w = 1000;
var h = 700;

document.getElementById("button").onclick=button;
setUpCanvas();
shape(w/2,h/2,input1,input2,input3);

function button (){
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    // var input3 = document.getElementById("input3").value;
    shape(w/2,h/2,input1,input2,input3);
    console.log("click", input1,input2,input3);
}

function shape(x,y,c, n, r){
    x=Math.random()*w;
    y=Math.random()*h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arcTo(x-35, y+100, x+300, y+300, 50);
    ctx.moveTo(x,y);
    ctx.arcTo(x+35, y+100, x-300, y+300, 50);
    ctx.closePath();
    ctx.fillStyle=c;
    ctx.fill(); 
    ctx.strokeStyle=c;
    ctx.stroke();
    // ctx.rotate(r * Math.PI / 180);
    for(var i=0;i<n;i++){
        shape(w/2,h/2,input1,input2,input3);
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