var canvas;
var ctx;
var w = 1000;
var h = 700;

document.getElementById("button").onclick=button;
setUpCanvas();
shape(w/2,h/2);
context.rotate(angle)

// shape(w/2,h/2,100,100,input1,input2,input3);

// function button (){
//     var input1 = document.getElementById("input1").value;
//     var input2 = document.getElementById("input2").value;
//     var input3 = document.getElementById("input3").value;
//     shape(w/2,h/2,100,100,input1,input2,input3);
//     console.log("click", input1,input2,input3);
// }

function shape(){
    x=w/2;
    y=h/2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arcTo(x-35, y+100, x+300, y+300, 50);
    ctx.moveTo(x,y);
    ctx.arcTo(x+35, y+100, x-300, y+300, 50);
    ctx.stroke();
    // ctx.rotate(20 * Math.PI / 180);
    ctx.fill();
    
}

// function shape(){
//     x=w/2;
//     y=h/2;
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x+100, y+100);
//     ctx.arcTo(x+150, y+100, x-150, y-70, 50);
//     ctx.lineTo(x+100, y+100);
//     ctx.stroke();
// }

function shape2(){
// Start a path
ctx.beginPath();
ctx.moveTo(20, 20);
// Create a horizontal line
ctx.lineTo(100, 20);
// Create an arc
ctx.arcTo(150, 20, 150, 70, 50);
// Create a vertical line
ctx.lineTo(150, 120);
// Draw the path
ctx.stroke();
}

// function shape(x,y,sw,sh){
//     x=x-w/2;
//     y=y-h/2;
// ctx.beginPath();
// ctx.moveTo(x, y);
// ctx.bezierCurveTo(x, y+180, x+180, y+180, x+180, y);
// ctx.lineTo(x*1.5,y-200);
// ctx.closePath();
// ctx.stroke();
// }

// function shape(x,y,sw,sh){
//     x=x-sw/2;
//     y=y-sh/2;
//     ctx.beginPath();
//     ctx.moveTo(x,y);
//     ctx.bezierCurveTo(x,y);
//     ctx.bezierCurveTo(x+sw,y+sh);
//     ctx.bezierCurveTo(x,y+h);
//     // ctx.closePath();
//     ctx.strokeStyle=c;
//     ctx.stroke(); 
// }

function setUpCanvas(){
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "4px solid black";
}

console.log("assignment 1");